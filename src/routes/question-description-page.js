import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { SKILL_SBT_CONTRACT_ADDRESS } from "../const/const";
import { ethers } from "ethers";
import artifact from "../abi/SkillSbt.json";

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
		const skillSbtContract = new ethers.Contract(SKILL_SBT_CONTRACT_ADDRESS, artifact.abi, signer);
		await skillSbtContract.requestScoring(state.quiz.id);
		const skillSbts = await skillSbtContract.getSkillSbts();
		if (skillSbts.length === 0) {
			alert("依頼できませんでした。");
		}
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
		alert("解答を依頼しました");
		navigate('/');
	}

	return (
		<div className="QuestionDescriptionPage">
			<div>
				Title: {state.quiz.title}
			</div>
			<div>
				Description: {state.quiz.desc}
			</div>
			<div>
				Discord name:
				<input
					value={discordName}
					onChange={(event) => setDiscordName(event.target.value)}
				/>
			</div>
			<div>
				Prize:
				<input
					value={prize}
					onChange={(event) => setPrize(event.target.value)}
				/>
			</div>
			<div>
				<button onClick={() => uploadAnswer()}>解答をアップロード</button>
			</div>
			<button onClick={() => requestCheckAnswer()}>解答を依頼</button>
			<button onClick={() => navigate(-1)}>戻る</button>
		</div>
	);
};

export default QuestionDescriptionPage;