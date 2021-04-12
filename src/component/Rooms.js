import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Rooms(props) {

    const [displayError, setDisplayError] = useState('none');
    const history = useHistory();

    const checkType = (type) => {
        switch (type) {
            case 'Bed Room':
                return require('../images/bed.svg').default;
            case 'Living Room':
                return require('../images/living.svg').default;
            case 'Bath Room':
                return require('../images/bath.svg').default;
            case 'Kitchen':
                return require('../images/kitchen.svg').default;
            default:
                return;
        }
    }
    return (
        <div className="rooms">
            <div className="rooms-view">
                {props.rooms.map((e, i) => {
                    return (
                        <Link key={i} to={`room${e.name}`} style={{ textDecoration: 'none' }}>
                            <div id="room" style={{ backgroundImage: `url(${checkType(e.type)})` }}>
                                <h1 id="name-room">{e.name}</h1>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div>
                <p style={{ display: displayError }}>אי אפשר להוסיף יותר מ-5 חדרים!</p>
                <p id="add-room-p">לחץ להוספת חדר</p>
                <button id="add-button" onClick={() => {
                    if (props.rooms.length < 5) {
                        history.push('/addRoom')
                    } else {
                        setDisplayError('');
                    }
                }}>+</button>
            </div>
        </div>
    )
}
