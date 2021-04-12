import React, { useState } from 'react';
import "./App.css";
import { Switch, Route, useHistory } from 'react-router-dom';
import AddRoom from "./component/AddRoom";
import Rooms from "./component/Rooms";
import Room from './component/Room';

export default function App() {
    const history = useHistory();
    const [rooms, setRooms] = useState([])

    const addRoom = (n, t) => {
        setRooms([...rooms, { name: n, type: t, products: [] }]);
    }
    const addProduct = (index, typeProduct) => {
        let newProduct = { condition: false, type: typeProduct };
        rooms[index].products.push(newProduct);
        setRooms([...rooms]);
        console.log(rooms);
    }
    const trunProduct = (room, product) => {
        rooms[room].products[product].condition = !rooms[room].products[product].condition;
        setRooms([...rooms])
    }

    const deleteRoom = (index) => {
        let filterRooms = rooms.filter((e, i) => i !== index);
        setRooms(filterRooms);
        history.push('/')
    }

    return (
        <div className="App" >
            <div className="top">
                <h1>Smart - Home</h1>
            </div>
            <Switch>
                <Route exact path="/" component={() => {
                    return <Rooms rooms={rooms} />
                }} />
                <Route exact path="/addRoom" component={() => {
                    return <AddRoom add={addRoom} />
                }} />
                {rooms.map((e, index) => {
                    return (
                        <Route key={index} exact path={`/room${e.name}`} component={() => {
                            return <Room name={e.name} type={e.type} addP={addProduct} index={index} products={e.products} trunProduct={trunProduct} deleteRoom={deleteRoom} />
                        }} />
                    )
                })}
            </Switch>
        </div>
    )


}
