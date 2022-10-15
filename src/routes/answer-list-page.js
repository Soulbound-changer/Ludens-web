import { useNavigate } from "react-router-dom"

const AnswerListPage = () => {
	const navigate = useNavigate();
	const answers = ["解答1", "解答2", "解答3"];

	const moveAnswerDescriptionPage = (answer) => {
		navigate('/answer-description-page', { state: { answer: answer } });
	}

	return (
		<div className="AnswerListPage">
			<div>
				{answers.map((answer) => (
					<button onClick={() => moveAnswerDescriptionPage(answer)}>{answer}</button>
				))}
			</div>
		</div>
	);
};

export default AnswerListPage;