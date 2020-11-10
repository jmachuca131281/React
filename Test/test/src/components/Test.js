import React from 'react'

export default function Test(props){
    const saludar = ()=>{
        console.log(saludar);
    }
    return (
        <div>
            <button onClick={saludar}> Click </button>
        </div>
    )
}
