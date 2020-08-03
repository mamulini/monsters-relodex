import React from 'react';
import './card-list.css';

export  const CardList = (props) => {
return <div><h1>{props.users.map(user => <h2 key={user.id}>{user.name}</h2>)}</h1></div>
}