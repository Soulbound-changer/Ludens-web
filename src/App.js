import './App.css';
import Home from './routes/home';
import QuestionCreaterPage from './routes/question-creater-page';
import QuestionListPage from './routes/question-list-page';
import QuestionDescriptionPage from './routes/question-description-page';
import AnswerListPage from './routes/answer-list-page';
import AnswerDescriptionPage from './routes/answer-description-page';
import AnswerJudgementPage from './routes/answer-judgement-page';
import SbtListPage from './routes/sbt-list-page';
import SbtListPage2 from './routes/sbt-list-page2';
import SbtDescriptionPage from './routes/sbt-description-page';
import NoMatch from './routes/nomatch';
import { Routes, Route, Link} from 'react-router-dom';

const App = () => {
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
                <Route path="/answer-description-page" element={<AnswerDescriptionPage />} />
                <Route path="/answer-judgement-page" element={<AnswerJudgementPage />} />
                <Route path="/sbt-list-page" element={<SbtListPage />} />
                <Route path="/sbt-list-page2" element={<SbtListPage2 />} />
                <Route path="/sbt-description-page" element={<SbtDescriptionPage />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;
