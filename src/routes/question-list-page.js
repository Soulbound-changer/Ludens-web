import { useNavigate } from "react-router-dom"
import { ethers } from "ethers";
import { QUIZ_CONTRACT_ADDRESS } from "../const/const";
import artifact from "../abi/Quiz.json";
import { useState, useEffect } from "react";

const QuestionListPage = () => {
	const [quizzes, setQuizzes] = useState([]);

	const navigate = useNavigate();

	const moveQuestionDescriptionPage = (quiz) => {
		navigate('/question-description-page', { state: { quiz: quiz } });
	}

	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
    const quizContract = new ethers.Contract(QUIZ_CONTRACT_ADDRESS, artifact.abi, signer);

	useEffect(() => {
		const getQuizzes = async () => {
			console.log(QUIZ_CONTRACT_ADDRESS);
			const quizzes = await quizContract.getQuizzes();
			const quizzesCleaned = quizzes.map((quiz) => {
				return {
					address: quiz.quizner,
					timestamp: new Date(quiz.timestamp * 1000),
					title: quiz.title,
					desc: quiz.desc,
				};
			});
			console.log(quizzesCleaned);
			setQuizzes(quizzesCleaned);
		}
		getQuizzes();
		console.log('Got quizzes from chain');
	}, []);

	return (
		<div className="QuestionListPage">
			<div>
				{quizzes.map((quiz) => (
					<div>
						<button onClick={() => moveQuestionDescriptionPage(quiz)}>title: {quiz["title"]}</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionListPage;