import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import App from './App'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>
, document.querySelector('#root'));

        
    
    



