import { Link} from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <h2>
                A Brand-New Learnfi is HERE!!!!!!
            </h2>
            <ul>
                <li>
                    <Link to="/question-creater-page">問題を作る</Link>
                </li>
                <li>
                    <Link to="/question-list-page">問題を解く</Link>
                </li>
                <li>
                    <Link to="/question-creater-page">採点する</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;