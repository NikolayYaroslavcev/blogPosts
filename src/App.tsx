import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/reset.css';
import styles from './styles/App.module.scss';
import {Home} from "../src/page/Home.tsx";
import {PostDetail} from "../src/page/PostDetail.tsx";





const App = () => {
    return (
        <Router>
            <div className={styles.app}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/posts/:id" element={<PostDetail/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
