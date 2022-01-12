import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import textColors from './Components/textColors.css';
import Translate from './Components/Translate';
import Route from './Components/Route';

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

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
};

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />;
    }
};

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />
    }
};

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />
    }
};

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};