import React, { useState } from 'react';
import Form from './Form'
import './App.css';

function App() {
  const [addedMember, setAddedMember]=useState([]);
  
  return (
    <div className="App">
    

        <h1>Team Member List!</h1>
       
        <Form 
        addedMember={addedMember} setAddedMember={setAddedMember}
        />
        <h4>Members</h4>
        <div>
            {addedMember.map(member=>(
                <div key={member.id}>
                    <p>Name: {member.name}</p>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            ))}
        </div>
      
    </div>
  );
}

export default App;
