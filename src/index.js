import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

let curDate = new Date(2024, 2, 2, 15);
curDate = curDate.getHours();
let greeting = '';
let cssStyle = {};

if(curDate >= 1 && curDate <12){
    greeting = 'Good Mornig';
    cssStyle.color = 'Green';
    const heading = {
        color: "#fa9191",
        textTransform: "capitalize",
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "'Josefin Sans', sans-serif",
        margin: "50px"
    }
    } else if(curDate >=12 && curDate <19){
        greeting = 'Good AfterNoon';
        cssStyle.color = 'Orange';
    } else {
        greeting = 'Good Night';
        cssStyle.color = 'Black';
    }

ReactDOM.render(
    <>
    <h1 className='heading'>Hello sir, <span style={cssStyle}> { greeting } </span></h1>
    </>,
    document.getElementById("root")
);