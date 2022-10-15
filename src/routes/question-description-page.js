import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"

const QuestionDescriptionPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [title, setTitle] = useState(location.state);
	const [description, setDescription] = useState("fuga hoge fuga hoge fuga hoge fuga hoge fuga hoge");
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

	const backPage = () => {
		navigate('/question-list-page');
	}

	return (
		<div className="QuestionDescriptionPage">
			<div>
				Title: {title.question}
			</div>
			<div>
				Description: {description}
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
			<button onClick={() => backPage()}>戻る</button>
		</div>
	);
};

export default QuestionDescriptionPage;