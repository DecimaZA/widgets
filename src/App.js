import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';

const items = [
    {
        title: 'What is REACT?',
        content: 'REACT is a front-end framework'
    },
    {
        title: 'Why use REACT',
        content: 'REACT is a favorite JS library among engineers'
    },
    {
        title: 'How do you use REACT?',
        content: 'We use REACT by creating components'
    },
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown 
                selected={selected}
                onSelectedChange={setSelected}
                options={options} 
            />
        </div>
    );
};