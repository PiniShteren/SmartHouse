import React, { useState } from 'react'

export default function AddProduct(props) {
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
                {props.type === "Bad Room" ? <option value='hot'>דוד שמש</option> : ''}
            </select>

            <button id="button-add-product" onClick={() => {
                if (props.products.length === 5) {
                    setDisplayMax('');
                    return;
                }
                if (product) {
                    var flag = false;
                    props.products.forEach((e) => {
                        if (e.type === product && e.type === 'hot') {
                            debugger
                            flag = true;
                        }
                    })
                    if (!flag) {
                        props.addP(props.index, product)
                    } else {
                        setDispalyNot('');
                    }
                }
            }} >הוסף</button>

        </div >
    )
}
