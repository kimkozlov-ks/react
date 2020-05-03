import React from 'react'

function IncrementCounterButton(props) {
    return (
        <span>
            <button onClick={props.func}>
                {props.action}
            </button>
        </span>
    )
}

export default IncrementCounterButton;