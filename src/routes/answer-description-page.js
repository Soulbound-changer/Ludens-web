import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"

const AnswerDescriptionPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [title, setTitle] = useState(location.state);
	const [description, setDescription] = useState("fuga hoge fuga hoge fuga hoge fuga hoge fuga hoge");
	const [discordName, setDiscordName] = useState("God");
	const [prize, setPrize] = useState("1000 yen");

	const downloadAnswer = () => {
		alert("解答をダウンロードしました");
	}

	const moveAnswerJudgementPage = () => {
		navigate('/answer-judgement-page');
	}

	const backPage = () => {
		navigate('/answer-list-page');
	}

	return (
		<div className="AnswerDescriptionPage">
			<div>
				Title: {title.answer}
			</div>
			<div>
				Description: {description}
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
			<button onClick={() => backPage()}>戻る</button>
		</div>
	);
};

export default AnswerDescriptionPage;