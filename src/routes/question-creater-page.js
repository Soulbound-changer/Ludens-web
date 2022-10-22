import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../const/const";
import artifact from "../abi/Quiz.json";
// import artifact from "../abi/Greeter.json";

const QuestionCreaterPage = () => {
	// console.log(CONTRACT_ADDRESS);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
    const quizContract = new ethers.Contract(CONTRACT_ADDRESS, artifact.abi, signer);
    // const greetContract = new ethers.Contract(CONTRACT_ADDRESS, artifact.abi, signer);
	// const { uploadQuiz } = quizContract.functions;
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const uploadQuestion = async (title, desc) => {
		if (!window.confirm('問題をアップロードしますか？')) {
			return ;
		}
		await quizContract.uploadQuiz(title, desc);
		// const data = await greetContract.greet();
		// console.log(data);
		alert("問題をアップロードしました");
		navigate('/');
	}

	// const test = async () => {
	// 	console.log(CONTRACT_ADDRESS);
	// 	const quizzes = await quizContract.getQuizzes();
	// 	const quizzesCleaned = quizzes.map((quiz) => {
	// 		return {
	// 			address: quiz.quizner,
	// 			timestamp: new Date(quiz.timestamp * 1000),
	// 			title: quiz.title,
	// 			desc: quiz.desc,
	// 		};
	// 	});

	// 	console.log(quizzesCleaned);
	// 	// console.log(quizzesCleaned[0].title);
	// 	// console.log(quizzesCleaned[0].desc);
	// 	// console.log(quizzesCleaned['desc']);
	// 	// console.log(quizzes['title']);
	// 	// console.log(quizzes['desc']);
	// }

	return (
		<div className="QuestionCreaterPage">
			<div>
				Title:
				<input
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
			</div>
			<div>
				Description:
				<input
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
			</div>
			<button onClick={() => uploadQuestion(title, description)}>問題をアップロード</button>
			{/* <button onClick={() => test()}>テスト</button> */}
		</div>
	);
};

export default QuestionCreaterPage;