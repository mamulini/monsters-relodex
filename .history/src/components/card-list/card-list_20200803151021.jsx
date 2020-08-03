import React from 'react';
import './card-list.css';

export  const CardList = (props) => {
return <div><h1>{props.users.map(user => <h1 key={user.id}>{user.name}</h1>)}</h1></div>
}