import React, { useState } from 'react';

import { addProduct } from "../action/index";
import { useDispatch, useSelector } from 'react-redux';

export default function AddProduct(props) {
    const dispatch = useDispatch();
    const room = useSelector(state => state.rooms.rooms[props.index]);
    const products = room.products;
    const [displayNot, setDispalyNot] = useState('none');
    const [dispalyMax, setDisplayMax] = useState('none');
    const [product, setProduct] = useState('');
    return (
        <div className="add-product">
            <p style={{ display: displayNot }}>יש לך כבר דוד שמש!</p>
            <p style={{ display: dispalyMax }}>אפשר להוסיף עד 5 מוצרים</p>
            <select id="select-room" onChange={(e) => {
                setProduct(e.target.value);
            }}>
                <option>בחר מוצר</option>
                <option value='stereo'>סטריאו</option>
                <option value='air-conditioner'>מזגן</option>
                <option value='lamp'>מנורה</option>
                {room.type === "Bath Room" ? <option value='hot'>דוד שמש</option> : ''}
            </select>

            <button id="button-add-product" onClick={() => {
                if (product) {
                    if (!products) {
                        dispatch(addProduct(props.index, product));
                        props.changeFlag();
                        return;
                    }
                    if (products.length === 5) {
                        setDisplayMax('');
                        return;
                    }

                    var flag = false;
                    products.forEach((e) => {
                        if (e.type === product && e.type === 'hot') {
                            flag = true;
                        }
                    })
                    if (flag) {
                        setDispalyNot('');
                    } else {
                        dispatch(addProduct(props.index, product));
                        props.changeFlag();
                    }
                }
            }
            } >הוסף</button>

        </div >
    )
}
