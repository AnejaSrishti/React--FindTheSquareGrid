
import { useEffect, useState } from 'react';
import DivGrid from './grid';

function App()
{
    const [squareCount,setCount]=useState(0);

    useEffect(()=>{
        console.log('useEffect Called : ' + squareCount);

        setSquareWidth(squareCount);
    },[squareCount]);

    const setSquareWidth=(inputBox)=>{

        console.log('setSquareWidth : ' + inputBox);
        
        // based on inputbox, decide the height and width
        let boxHeight; 
        let boxWidth;  
        

        if(inputBox==2)
        {
                boxWidth=400;
                boxHeight=400/2;
        }
        else
        {
                boxHeight=400/inputBox-2;
                boxWidth=400/inputBox-2;
        }
        console.log('height :'+ boxHeight);

        let totaldivs = document.getElementsByClassName('divBox');
        console.log('totalDivs:' +totaldivs.length);

        Array.from(document.getElementsByClassName('divBox')).
        map((el)=>{
            
                    el.style.height = boxHeight.toString() +'px';
                     el.style.width = boxWidth.toString() +'px';
    
                console.log('height to render:'+ boxHeight+'px')    
        
        })

        
        

    }
    
    return(
        <div>
            <h1>Hi ! Srishti </h1>
            <label> Enter a number to plot a  Grid : </label>
            <input type="text" onChange={(e)=>setCount(e.target.value) }  value={squareCount}></input>
            <DivGrid inputSquare={squareCount} />
        </div>
    )
}


export default App;