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

const SbtDescriptionPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [state, setState] = useState(location.state);

	const [discordName, setDiscordName] = useState("");
	const [prize, setPrize] = useState("");


	const uploadAnswer = () => {
		alert("解答をアップロードしました");
	}

	const requestCheckAnswer = async () => {
		// if (!window.confirm('解答を依頼しますか？')) {
		// 	return ;
		// }
		// const provider = new ethers.providers.Web3Provider(window.ethereum);
		// const signer = provider.getSigner();
		// const answerContract = new ethers.Contract(ANSWER_CONTRACT_ADDRESS, answerArtifact.abi, signer);
		// const isSuccessRequest = await answerContract.requestScoring(state.quiz.id, {gasLimit: 10000000});
		// if (!isSuccessRequest) {
		// 	alert("依頼できませんでした。");
		// }
		alert("メールを送信しました");
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
		<div className="SbtDescriptionPage">
			<div>
				<TextField
					id="Address"
					label="Address"
					variant="outlined"
					margin="normal"
					style = {{width: 400}}
					InputProps={{
						readOnly: true,
					}}
					defaultValue="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
				/>
			</div>
			<div>
				<TextField
					id="SBTlank1"
					label="採点した回数"
					variant="outlined"
					margin="normal"
					style = {{width: 300}}
					InputProps={{
						readOnly: true,
					}}
					defaultValue="0"
				/>
			</div>
			<div>
				<TextField
					id="SBTlank1"
					label="良い採点者に選ばれた回数"
					variant="outlined"
					margin="normal"
					style = {{width: 300}}
					InputProps={{
						readOnly: true,
					}}
					defaultValue="0"
				/>
			</div>
			<div>
				<TextareaAutosize
					aria-label="empty textarea"
					placeholder="Description"
					minRows={10}
					style={{ width: 400}}
					InputProps={{
						readOnly: true,
					}}
					value="自己紹介や連絡先など"
				/>
			</div>
			<div>
			</div>
				<Button onClick={() => requestCheckAnswer()} variant="contained" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					コンタクト
				</Button>
				<Button onClick={() => navigate(-1)} variant="contained" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					戻る
				</Button>
		</div>
	);
};

export default SbtDescriptionPage;