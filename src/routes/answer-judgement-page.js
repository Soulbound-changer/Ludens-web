import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"

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

	const backPage = () => {
		navigate('/answer-description-page');
	}

	return (
		<div className="AnswerjudgementPage">
			<div>
				<button onClick={() => passAnswer()}>合格</button>
				<button onClick={() => failAnswer()}>不合格</button>
			</div>
			<button onClick={() => returnCheckAnswer()}>採点結果を提出</button>
			<button onClick={() => backPage()}>戻る</button>
		</div>
	);
};

export default AnswerjudgementPage;