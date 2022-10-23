import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

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
				<Button onClick={() => returnCheckAnswer()} variant="contained" component="label" sx={{ width: 200, padding: 1, margin: 1 }}>
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