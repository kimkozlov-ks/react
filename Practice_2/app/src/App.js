// Add three more buttons.When a specific button is clicked,
// the counter value must be changed by the amount specific for this button. For instance,
// when the first button is clicked, the value is increased by 10, when the second one is clicked,
// the value is increased by 100, when the third one is clicked, the value is increased by 25, and so on.
//
// Every button must have the value of increment. For example, +10, -100, +25, etc.

// Use functional components and hooks.


import React, { useReducer } from 'react';
import CounterLabel from './Components/CounterLabel';
import IncrementCounterButton from './Components/IncrementCounterButton';
import reducer from './Components/CounterReducer'

function App() {
    const initialState = 0;
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>

            <IncrementCounterButton action={'+10'} func={() => dispatch('+10')}/>
            <IncrementCounterButton action={'+25'}func={() => dispatch('+25')}/>
            <IncrementCounterButton action={'+100'}func={() => dispatch('+100')}/>
            <IncrementCounterButton action={'-25'}func={() => dispatch('-25')}/>
            <IncrementCounterButton action={'reset'}func={() => dispatch('reset')}/>
            <CounterLabel count={count}/>
        </div>
    );
}

export default App;
