import Friends from '../Friends'
import './Friend.css'
import { useEffect, useState } from "react"
export default function Friend(){
    const [friend,setFriend]=useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])

    return(
        <div className='box'>
            <h2>Friend:{friend.length}</h2>
            {
                friend.map(friend =><Friends friend={friend}></Friends>)
            }
        </div>

    )

}