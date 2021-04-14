import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { addRoom } from '../action/index';
import { useDispatch } from 'react-redux';
export default function AddRoom(props) {
    const dispatch = useDispatch();
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const validType = (e) => {
        setType(e.target.value)
    }
    const validName = (e) => {
        let name = e.target.value;
        if (name.match('[a-zA-Zא-ת]') && name.length >= 3) {
            setName(name);
        }
        else {
            setName('');
        }
    }
    return (
        <div className="add-room">
            <div className="form-add-room">
                <h3>הוסף חדר</h3>
                <select id="select-room" onChange={validType}>
                    <option defaultValue>בחר סוג חדר:</option>
                    <option value="Bath Room">שירותים</option>
                    <option value="Living Room">סלון</option>
                    <option value="Bed Room">חדר שינה</option>
                    <option value="Kitchen">מטבח</option>
                </select>
                <input id="input-name" onChange={validName} placeholder="שם החדר:" autoComplete='off' />
                <Link style={{ textDecoration: 'none' }} to="/">
                    <button id="button-add-room" onClick={() => {
                        if (type && name) {
                            dispatch(addRoom({ name: name, type: type, products: [] }))
                        } else {
                            alert('שגיאה')
                        }

                    }}><p>הוסף</p></button></Link>
            </div>
        </div>
    )
}
