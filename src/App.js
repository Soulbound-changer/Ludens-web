import './App.css';
import Home from './routes/home';
import QuestionCreaterPage from './routes/question-creater-page';
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
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;
