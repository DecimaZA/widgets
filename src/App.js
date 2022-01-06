import React from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';

const items = [
    {
        title: 'What is REACT?',
        content: 'REACT is a front-end framework'
    }
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    }
];

export default () => {
    return (
        <div>
            <Dropdown options={options} />
            <div>
                Some new stuff here!
            </div>
            <div>
                Div change 2.
            </div>
        </div>
    );
};