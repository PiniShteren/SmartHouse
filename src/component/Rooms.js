import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function Rooms() {

    const rooms = useSelector(state => state.rooms.rooms)
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
    const checkNameType = (type) => {
        switch (type) {
            case 'Bed Room':
                return 'חדר - שינה';
            case 'Living Room':
                return 'סלון';
            case 'Bath Room':
                return 'שרותים';
            case 'Kitchen':
                return 'מבטח';
            default:
                return;
        }
    }
    return (
        <div className="rooms">
            <div className="rooms-view">
                {rooms ? rooms.map((e, i) => {
                    return (
                        <Link key={i} to={`room${e.name}`} style={{ textDecoration: 'none' }}>
                            <div id="room" style={{ backgroundImage: `url(${checkType(e.type)})` }}>
                                <h1 id="name-room"><span style={{ fontSize: '0.65em' }}>{checkNameType(e.type)}</span><span>{e.name}</span></h1>
                            </div>
                        </Link>
                    )
                }) : ""}
            </div>
            <div>
                <p style={{ display: displayError }}>אי אפשר להוסיף יותר מ-5 חדרים!</p>
                <p id="add-room-p">לחץ להוספת חדר</p>
                <button id="add-button" onClick={() => {
                    if (rooms) {
                        if (rooms.length < 5) {
                            history.push('/addRoom');
                        } else {
                            setDisplayError('');
                        }
                    } else {
                        history.push('/addRoom');
                    }
                }}>+</button>
            </div>
        </div>
    )
}
