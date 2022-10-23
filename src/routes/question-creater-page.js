import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ethers } from "ethers";
import { QUIZ_CONTRACT_ADDRESS } from "../const/const";
import artifact from "../abi/Quiz.json";
// import { TextField } from '@mui/material';
// import * as React from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const QuestionCreaterPage = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
    const quizContract = new ethers.Contract(QUIZ_CONTRACT_ADDRESS, artifact.abi, signer);
	const navigate = useNavigate();
	const uploadQuestion = async (title, desc) => {
		if (!window.confirm('問題をアップロードしますか？')) {
			return ;
		}
		await quizContract.uploadQuiz(title, desc, {gasLimit: 5000000});
		alert("問題をアップロードしました");
		navigate('/');
	}

	// const test = async () => {
	// 	console.log(QUIZ_CONTRACT_ADDRESS);
	// 	const quizzes = await quizContract.getQuizzes();
	// 	const quizzesCleaned = quizzes.map((quiz) => {
	// 		return {
	// 			address: quiz.quizner,
	// 			timestamp: new Date(quiz.timestamp * 1000),
	// 			title: quiz.title,
	// 			desc: quiz.desc,
	// 		};
	// 	});
	// 	console.log(quizzesCleaned);
	// 	// console.log(quizzesCleaned[0].title);
	// 	// console.log(quizzesCleaned[0].desc);
	// 	// console.log(quizzesCleaned['desc']);
	// 	// console.log(quizzes['title']);
	// 	// console.log(quizzes['desc']);
	// }

	return (
		<div className="QuestionCreaterPage">
			<div>
				{/* Title: */}
				{/* <input
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/> */}
				<TextField
					// fullWidth
					id="Title"
					label="Title"
					variant="outlined"
					margin="normal"
					// style={{ height }}
					style = {{width: 300}}
					// sx={{ width: 1000 }}
					// InputProps={{ sx: { height: 200 } }}
					// inputStyle={{ textAlign: 'left' }}
					onChange={(event) => setTitle(event.target.value)}
				/>

			</div>
			<div>
				{/* Description:
				<input
					type="text"
					size="100"
					width="48"
					height="200"
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/> */}
				{/* <TextField
					fullWidth
					id="Description"
					label="Description"
					variant="outlined"
					margin="normal"
					// style={{ height }}
					// style = {{width: 300, height: 100}}
					sx={{ width: 1000 }}
					InputProps={{
						sx: { height: 200 },
						style: { textAlign: "right" }
					}}
					// inputStyle={{ textAlign: 'left' }}
					onChange={(event) => setDescription(event.target.value)}
				/> */}
				<TextareaAutosize
					aria-label="empty textarea"
					placeholder="Description"
					minRows={10}
					style={{ width: 400}}
					onChange={(event) => setDescription(event.target.value)}
				/>
			</div>
			<Button onClick={() => uploadQuestion(title, description)} variant="contained">問題をアップロード</Button>
			{/* <button onClick={() => uploadQuestion(title, description)}>問題をアップロード</button> */}
			{/* <button onClick={() => test()}>テスト</button> */}
		</div>
	);
};

export default QuestionCreaterPage;