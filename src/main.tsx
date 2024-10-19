import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App.tsx';
import './index.css';
import store from '../src/app/store.ts';
import '../src/page/home/App.module.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);


root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
