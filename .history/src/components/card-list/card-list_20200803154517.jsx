import React from 'react';
import {Card} from '../cards/card';
import './card-list.css';

export  const CardList = (props) => {
    return <div className='card-list'>
            {props.users.map(user => {
                return <Card key={user.id} user={user.username} />
            } )}
        </div>
}