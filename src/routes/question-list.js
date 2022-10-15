import { useNavigate } from "react-router-dom"

const QuestionList = () => {
	const navigate = useNavigate()

	const moveQuestionDescriptionPage = () => {
		navigate('/');
	}

	return (
		<div className="QuestionList">
			<div>
				<button onClick={moveQuestionDescriptionPage}>問題1</button>
			</div>
			<div>
				<button onClick={moveQuestionDescriptionPage}>問題2</button>
			</div>
			<div>
				<button onClick={moveQuestionDescriptionPage}>問題3</button>
			</div>
		</div>
	);
};

export default QuestionList;