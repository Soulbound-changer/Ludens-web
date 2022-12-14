import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { ANSWER_CONTRACT_ADDRESS } from "../const/const";
import { SKILL_SBT_CONTRACT_ADDRESS } from "../const/const";
import { ethers } from "ethers";
import skillSbtArtifact from "../abi/SkillSbt.json";
import answerArtifact from "../abi/Answer.json";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const QuestionDescriptionPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [state, setState] = useState(location.state);

	const [discordName, setDiscordName] = useState("");
	const [prize, setPrize] = useState("");


	const uploadAnswer = () => {
		alert("解答をアップロードしました");
	}

	const requestCheckAnswer = async () => {
		if (!window.confirm('解答を依頼しますか？')) {
			return ;
		}
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const answerContract = new ethers.Contract(ANSWER_CONTRACT_ADDRESS, answerArtifact.abi, signer);
		const isSuccessRequest = await answerContract.requestScoring(state.quiz.id, {gasLimit: 10000000});
		// const answers = await answerContract.getAnswers();
		if (!isSuccessRequest) {
			alert("依頼できませんでした。");
		}
		// const skillSbtContract = new ethers.Contract(SKILL_SBT_CONTRACT_ADDRESS, skillSbtArtifact.abi, signer);
		// const skillSbts = await skillSbtContract.getSkillSbts();
		// const skillSbtsCleaned = skillSbts.map((skillSbt) => {
		// 	return {
		// 		owner: skillSbt.owner,
		// 		timestamp: new Date(skillSbt.timestamp * 1000),
		// 		id: skillSbt.id,
		// 		quizId: skillSbt.quizId,
		// 		scoringQuizId: skillSbt.scoringQuizId,
		// 		answerer: skillSbt.answerer,
		// 	};
		// });
		// console.log(skillSbtsCleaned);
		alert("解答を依頼しました");
		navigate('/');
	}

	const test = async () => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const skillSbtContract = new ethers.Contract(SKILL_SBT_CONTRACT_ADDRESS, skillSbtArtifact.abi, signer);
		const skillSbts = await skillSbtContract.getSkillSbts();
		const skillSbtsCleaned = skillSbts.map((skillSbt) => {
			return {
				owner: skillSbt.owner,
				timestamp: new Date(skillSbt.timestamp * 1000),
				id: skillSbt.id,
				quizId: skillSbt.quizId,
				scoringQuizId: skillSbt.scoringQuizId,
				answerer: skillSbt.answerer,
			};
		});
		console.log(skillSbtsCleaned);
	}

	return (
		<div className="QuestionDescriptionPage">
			<div>
				<TextField
					id="Title"
					label="Title"
					variant="outlined"
					margin="normal"
					style = {{width: 300}}
					InputProps={{
						readOnly: true,
					}}
					defaultValue={state.quiz.title}
				/>
			</div>
			<div>
				{/* Description: {state.quiz.desc} */}
				<TextareaAutosize
					aria-label="empty textarea"
					placeholder="Description"
					minRows={10}
					style={{ width: 400}}
					InputProps={{
						readOnly: true,
					}}
					defaultValue={state.quiz.desc}
					// onChange={(event) => setDescription(event.target.value)}
				/>
			</div>
			<div>
				<Button variant="outlined" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					解答をアップロード
					<input hidden multiple type="file" />
				</Button>
				{/* <Button
					variant="outlined"
					sx={{ width: 200, padding: 1, margin: 2 }}
				>
					解答をアップロード
					<input hidden accept="image/*" multiple type="file" />
				</Button> */}
				{/* <button onClick={() => uploadAnswer()}>解答をアップロード</button> */}
			</div>
				<Button onClick={() => requestCheckAnswer()} variant="contained" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					解答を依頼
				</Button>
				<Button onClick={() => navigate(-1)} variant="contained" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					戻る
				</Button>
				{/* <button onClick={() => requestCheckAnswer()}>解答を依頼</button> */}
				{/* <button onClick={() => navigate(-1)}>戻る</button> */}
			{/* <div>
				<button onClick={() => test()}>テスト</button>
			</div> */}
		</div>
	);
};

export default QuestionDescriptionPage;