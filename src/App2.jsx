import { useState } from "react"

export default function Team(){
        const [team,finalTeam]=useState(11)

        const handleAdd =() =>{
        const newTeam = team+1;
        finalTeam(newTeam);
        }
        const handleRemove =() =>{
            const removeTeam = team - 1;
            finalTeam(removeTeam);
        }

    const teamStyle ={
        border:'2px solid black',
        margin:'10px',
        padding:'15px',
        borderRadius:'20px'
    }

    return(
        <div style={teamStyle}>
            <h3>Player:{team}  </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}