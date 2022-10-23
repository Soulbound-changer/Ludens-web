import { useNavigate } from "react-router-dom"
import { ethers } from "ethers";
import { QUIZ_CONTRACT_ADDRESS } from "../const/const";
import artifact from "../abi/Quiz.json";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

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
			const quizzes = await quizContract.getQuizzes({gasLimit: 5000000});
			const quizzesCleaned = quizzes.map((quiz) => {
				return {
					address: quiz.quizner,
					timestamp: new Date(quiz.timestamp * 1000),
					id: quiz.id,
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
						<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
							<nav aria-label="main mailbox folders">
								<List>
									<ListItem disablePadding>
										<ListItemButton onClick={() => moveQuestionDescriptionPage(quiz)}>
											<ListItemText primary={quiz["title"]} />
										</ListItemButton>
									</ListItem>
								</List>
							</nav>
							<Divider />
						</Box>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionListPage;