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
				<TextField
					id="Title"
					label="Title"
					variant="outlined"
					margin="normal"
					style = {{width: 300}}
					InputProps={{
						readOnly: true,
					}}
					defaultValue="ウォレット接続機能"
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
					defaultValue="ウォレットを接続可能なWebサイトを作成してください。フレームワークはReactを使用してください。"
				/>
			</div>
			<div>
				<Button onClick={() => downloadAnswer()} variant="outlined" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					解答をダウンロード
				</Button>
			</div>
				<Button onClick={() => moveAnswerJudgementPage()} variant="contained" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					採点結果を記入
				</Button>
				<Button onClick={() => navigate(-1)} variant="contained" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
					戻る
				</Button>
		</div>
	);
};

export default AnswerDescriptionPage;