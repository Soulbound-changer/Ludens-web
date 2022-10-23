import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const AnswerDescriptionPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [state, setState] = useState(location.state);

	const [discordName, setDiscordName] = useState("God");
	const [prize, setPrize] = useState("0.01 ETH");

	const downloadAnswer = () => {
		alert("解答をダウンロードしました");
	}

	const moveAnswerJudgementPage = () => {
		navigate('/answer-judgement-page');
	}

	return (
		<div className="AnswerDescriptionPage">
			<div>
				Title: {state.answer.title}
			</div>
			<div>
				Description: {state.answer.desc}
			</div>
			<div>
				Discord name: {discordName}
			</div>
			<div>
				Prize: {prize}
			</div>
			<div>
				<button onClick={() => downloadAnswer()}>解答をダウンロード</button>
			</div>
			<button onClick={() => moveAnswerJudgementPage()}>採点結果を記入</button>
			<button onClick={() => navigate(-1)}>戻る</button>
		</div>
	);
};

export default AnswerDescriptionPage;