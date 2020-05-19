//import react and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';



//Create a react component
const App = () => {                 // const App = function(){}
const btnText = {text: 'click me!'};
const labelText = 'Enter name :';
    return (
    <div>
        <label className='label' htmlFor='name'>{labelText}</label>
        <input id='name' type='text'/>
    <button style={{ backgroundColor:'blue', color:'white' }}>{btnText.text}</button>
    </div>
    )
}


//Take the react component and show it on the screen
ReactDOM.render(
    <App/>, document.querySelector('#root')
);