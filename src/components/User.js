import { useState } from "react";

const User=(props)=>{
    const {name, location} =props;
    const [count] =useState(0);
    return (
        <div className="user-card">
        <h2>Username: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>count: {count}</h3>
        <h4>Contact: abc</h4>
        </div>
    )
}

export default User;