import { useNavigate } from "react-router-dom"

const QuestionListPage = () => {
	const navigate = useNavigate();
	const questions = ["問題1", "問題2", "問題3"];

	const moveQuestionDescriptionPage = (question) => {
		navigate('/question-description-page', { state: { question: question } });
	}

	return (
		<div className="QuestionListPage">
			<div>
				{questions.map((question) => (
					<button onClick={() => moveQuestionDescriptionPage(question)}>{question}</button>
				))}
			</div>
		</div>
	);
};

export default QuestionListPage;