import React from 'react';
import {Card} from '../cards/card.component';
import './card-list.css';

export  const CardList = (props) => {
    return <div className='card-list'>
            {props.monsters.map(user => (
            <Card key={user.id} monsters={user.name} />))}
        </div>
}