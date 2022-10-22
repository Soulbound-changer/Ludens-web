import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"

const QuestionDescriptionPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [state, setState] = useState(location.state);

	const [discordName, setDiscordName] = useState("");
	const [prize, setPrize] = useState("");

	const uploadAnswer = () => {
		alert("解答をアップロードしました");
	}

	const requestCheckAnswer = () => {
		if (!window.confirm('解答を依頼しますか？')) {
			return ;
		}
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