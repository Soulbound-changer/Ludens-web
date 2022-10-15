import './App.css';
import Home from './routes/home';
import QuestionCreaterPage from './routes/question-creater-page';
import QuestionListPage from './routes/question-list-page';
import QuestionDescriptionPage from './routes/question-description-page';
import AnswerListPage from './routes/answer-list-page';
import AnswerDescriptionPage from './routes/answer-description-page';
import NoMatch from './routes/nomatch';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="Home-header">
                <h1>
                    <Link to="/">Ludens</Link>
                </h1>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/question-creater-page" element={<QuestionCreaterPage />} />
                <Route path="/question-list-page" element={<QuestionListPage />} />
                <Route path="/question-description-page" element={<QuestionDescriptionPage />} />
                <Route path="/answer-list-page" element={<AnswerListPage />} />
                <Route path="/Answer-description-page" element={<AnswerDescriptionPage />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;
