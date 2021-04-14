import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import AddProduct from "./AddProduct";

import { deleteRoom, trun } from '../action/index';
import { useDispatch, useSelector } from "react-redux";

export default function Room(props) {
    const room = useSelector(state => state.rooms.rooms[props.index]);
    const history = useHistory();
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(false);
    const [local, setLocal] = useState(trun);
    const show = () => {
        if (flag) {
            return (
                <div className="room">
                    <AddProduct index={props.index} changeFlag={change} />
                </div>
            )
        } else {
            return (
                <div>
                    <button id="button-add" style={{ display: "flex", justifyContent: 'center' }} onClick={change}><p>הוסף מוצר</p></button>
                </div>
            )
        }
    }
    const change = () => {
        setFlag(!flag);
    }
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
    const checkImg = (type, condition) => {
        switch (type) {
            case 'air-conditioner':
                if (condition) {
                    return require('../imagesON/air-conditioner.svg').default;
                }
                return require('../imagesOFF/air-conditioner.svg').default;
            case 'hot':
                if (condition) {
                    return require('../imagesON/hot.svg').default;
                }
                return require('../imagesOFF/hot.svg').default;
            case 'stereo':
                if (condition) {
                    return require('../imagesON/stereo.svg').default;
                }
                return require('../imagesOFF/stereo.svg').default;
            case 'lamp':
                if (condition) {
                    return require('../imagesON/lamp.svg').default;
                }
                return require('../imagesOFF/lamp.svg').default;
            default:
                return;
        }
    }

    return (
        <div className="room" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div className="buttons">
                <Link to="/">
                    <button className="back" style={{ backgroundImage: `url(${require('../images/back.svg').default})` }} />
                </Link>
                <div>
                    <h3 id="name"> <span></span><span>{room.name}</span></h3>
                    <div className="room-div-type" style={{ backgroundImage: `url(${checkType(room.type)})` }} />
                </div>
                <button style={{ backgroundImage: `url(${require('../images/delete.svg').default})` }} className="delete" onClick={() => {
                    var con = window.confirm('אתה בטוח שהינך רוצה למחוק את החדר?');
                    if (con) {
                        dispatch(deleteRoom(props.index));
                        history.push('/');
                    }
                }} />
            </div>
            {room.products.length > 0 ? <p>לחץ כדי לכבות/להדליק מוצר</p> : ""}
            <div className="products">
                {room.products.length > 0 ? room.products.map((e, i) => {
                    return (
                        <div className="product" style={{ backgroundImage: `url(${checkImg(e.type, e.condition)})` }} onClick={() => {
                            dispatch(trun(props.index, i));
                            setLocal(!local)
                        }} key={i} value={i}>
                        </div>
                    )
                }) : ''}
            </div>
            {show()}
        </div>
    )
}

