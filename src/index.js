import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from './webui/pages/HomePage.jsx';
import { ProductPage } from './webui/pages/ProductPage.jsx';

ReactDom.render(
    <Router>
        <>
            <Route path="/" exact component={HomePage}/>
            <Route path="/product" component={ProductPage}/>
        </>    
    </Router>,
    document.querySelector('#root')
);