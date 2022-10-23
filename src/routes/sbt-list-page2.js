import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { SKILL_SBT_CONTRACT_ADDRESS } from "../const/const";
import skillSbtArtifact from "../abi/SkillSbt.json";
import quizArtifact from "../abi/Quiz.json";
import { QUIZ_CONTRACT_ADDRESS } from "../const/const";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const SbtListPage2 = () => {
	const [answers, setAnswers] = useState([]);
	const answerss = ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"];

	const navigate = useNavigate();

	const moveAnswerDescriptionPage = (answer) => {
		navigate('/sbt-description-page', { state: { answer: answer } });
	}

	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
    const skillSbtContract = new ethers.Contract(SKILL_SBT_CONTRACT_ADDRESS, skillSbtArtifact.abi, signer);
    const quizContract = new ethers.Contract(QUIZ_CONTRACT_ADDRESS, quizArtifact.abi, signer);

	const { ethereum } = window;

	useEffect(() => {
		const getSkillSbts = async () => {
			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});
			const walletAddress = accounts[0].toUpperCase();
			console.log(walletAddress);
			const skillSbts = await skillSbtContract.getSkillSbts();
			let skillSbtsCleaned = skillSbts.map((skillSbt) => {
				return {
					owner: skillSbt.owner,
					timestamp: new Date(skillSbt.timestamp * 1000),
					id: skillSbt.id.toNumber(),
					quizId: skillSbt.quizId.toNumber(),
					scoringQuizId: skillSbt.scoringQuizId,
					answerer: skillSbt.answerer.toUpperCase(),
				};
			});
			console.log(skillSbtsCleaned);
			skillSbtsCleaned = skillSbtsCleaned.filter((skillSbt) => {
				return skillSbt.answerer === walletAddress;
			});
			console.log(skillSbtsCleaned);
			const quizzes = await quizContract.getQuizzes({gasLimit: 5000000});
			let quizzesCleaned = quizzes.map((quiz) => {
				return {
					address: quiz.quizner,
					timestamp: new Date(quiz.timestamp * 1000),
					id: quiz.id.toNumber(),
					title: quiz.title,
					desc: quiz.desc,
				};
			});
			console.log(quizzesCleaned);
			let answers = [];
			for (let i = 0; i < quizzesCleaned.length; i++) {
				for (let j = 0; j < skillSbtsCleaned.length; j++) {
					if (quizzesCleaned[i].id === skillSbtsCleaned[j].quizId) {
						answers.push(quizzesCleaned[i]);
					}
				}
			}
			console.log(answers);
			setAnswers(answers);
		}
		getSkillSbts();
		console.log('Got answers from chain');
	}, []);

	return (
		<div className="AnswerListPage">
			<div>
				{answerss.map((answer) => (
					<div>
						{/* <button onClick={() => moveAnswerDescriptionPage(answer)}>title: {answer}</button> */}
						<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
							<nav aria-label="main mailbox folders">
								<List>
									<ListItem disablePadding>
										<ListItemButton onClick={() => moveAnswerDescriptionPage(answer)}>
											<ListItemText primary={answer} />
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

export default SbtListPage2;