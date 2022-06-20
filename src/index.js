import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accordion from './components/Accordion';

ReactDOM.render(
    <React.StrictMode>
        <Accordion
            title='What is your return policy?'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, repellat?'
        />
        <Accordion
            title='What is your return policy?'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, repellat?'
        />
        <Accordion
            title='What is your return policy?'
            content='<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, repellat?</p><br><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, repellat?</p><br><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, repellat?</p>'
        />
    </React.StrictMode>,
    document.getElementById('root')
);
