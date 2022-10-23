import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import { ANSWER_CONTRACT_ADDRESS } from "../const/const";
import { SKILL_SBT_CONTRACT_ADDRESS } from "../const/const";
import { ethers } from "ethers";
import skillSbtArtifact from "../abi/SkillSbt.json";
import answerArtifact from "../abi/Answer.json";

const AnswerjudgementPage = () => {
	const navigate = useNavigate();
	const [judgement, setJudgement] = useState(false);

	const passAnswer = () => {
		alert("合格を選択");
		judgement = true;
	}

	const failAnswer = () => {
		alert("不合格を選択");
		judgement = false;
	}

	const returnCheckAnswer = () => {
		if (!window.confirm('採点結果を提出しますか？')) {
			return ;
		}
		alert("採点結果を提出しました");
		navigate('/');
	}

	const requestCheckAnswer = async () => {
		if (!window.confirm('採点結果を提出しますか？')) {
			return ;
		}
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const answerContract = new ethers.Contract(ANSWER_CONTRACT_ADDRESS, answerArtifact.abi, signer);
		const isSuccessRequest = await answerContract.requestScoring(0, {gasLimit: 10000000});
		// const answers = await answerContract.getAnswers();
		if (!isSuccessRequest) {
			alert("採点結果を提出しました");
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
		alert("採点結果を提出しました");
		navigate('/');
	}

	return (
		<div className="AnswerjudgementPage">
			<div>
				<Button onClick={() => passAnswer()} variant="outlined" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					合格
				</Button>
				<Button onClick={() => failAnswer()} variant="outlined" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					不合格
				</Button>
				{/* <button onClick={() => passAnswer()}>合格</button>
				<button onClick={() => failAnswer()}>不合格</button> */}
			</div>
				<Button onClick={() => requestCheckAnswer()} variant="contained" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					採点結果を提出
				</Button>
				<Button onClick={() => navigate(-1)} variant="contained" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					戻る
				</Button>
			{/* <button onClick={() => returnCheckAnswer()}>採点結果を提出</button>
			<button onClick={() => navigate(-1)}>戻る</button> */}
		</div>
	);
};

export default AnswerjudgementPage;