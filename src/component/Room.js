import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";

export default function Room(props) {
    const [flag, setFlag] = useState(false);
    const show = () => {
        if (flag) {
            return (
                <div className="room">
                    <AddProduct addP={props.addP} index={props.index} type={props.type} products={props.products} />
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
                    <button className="back">
                        חזרה
                        <img src={require('../images/back.svg').default} alt="back" width="15em" style={{ paddingRight: '0.5em' }} />
                    </button>
                </Link>
                <button style={{ backgroundImage: `url(${require('../images/delete.svg').default})` }} className="delete" onClick={() => {
                    var con = window.confirm('אתה בטוח שהינך רוצה למחוק את החדר?');
                    if (con) {
                        props.deleteRoom(props.index)
                    }
                }} />
            </div>
            <h3 id="name"> {props.name}</h3>
            <div className="room-div-type" style={{ backgroundImage: `url(${checkType(props.type)})` }} />
            <div className="products">
                {props.products.length > 0 ? props.products.map((e, i) => {
                    return (
                        <div className="product" style={{ backgroundImage: `url(${checkImg(e.type, e.condition)})` }} onClick={() => {
                            props.trunProduct(props.index, i)
                        }} key={i} value={i}>
                        </div>
                    )
                }) : ''}
            </div>
            {show()}
        </div>
    )
}
