import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './base_components/App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #221;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
