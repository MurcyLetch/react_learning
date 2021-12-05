import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './Heading';
import Orderlist from './Orderlist';


let currdate=new Date();
currdate=currdate.getHours();
let greeting='';
let cssStyle={};
if (currdate>=1 && currdate<12){
   greeting='Good Morning';
   cssStyle.color="green";
}
else if(currdate>=12 && currdate<19){
   greeting='Good Afternoon';
   cssStyle.color="orange";
}
else{
   greeting='Good Night';
   cssStyle.color="black";
}


function App(){
    return(
        <>
            <Heading/>
            <Orderlist></Orderlist>
            <h1>hello sir , <span style={cssStyle}> {greeting}</span></h1>
        </>
    );
}
export default App;