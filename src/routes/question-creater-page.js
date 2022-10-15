import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const QuestionCreaterPage = () => {
	const navigate = useNavigate()
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const uploadQuestion = () => {
		navigate('/');
	}

	return (
		<div className="QuestionCreaterPage">
			<div>
				Title:
				<input
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
			</div>
			<div>
				Description:
				<input
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
			</div>
			<button onClick={uploadQuestion}>問題をアップロード</button>
		</div>
	);
};

export default QuestionCreaterPage;