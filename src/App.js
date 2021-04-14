import React from 'react';
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import AddRoom from "./component/AddRoom";
import Rooms from "./component/Rooms";
import Room from './component/Room';
import { useSelector } from 'react-redux';

export default function App() {
    const rooms = useSelector(state => state.rooms.rooms);
    console.log(rooms);
    return (
        <div className="App" >
            <div className="top">
                <h1>Smart - Home</h1>
            </div>
            <Switch>
                <Route exact path="/" component={() => {
                    return <Rooms />
                }} />
                <Route exact path="/addRoom" component={() => {
                    return <AddRoom />
                }} />
                {rooms ? rooms.map((e, index) => {
                    return (
                        <Route key={index} exact path={`/room${e.name}`} component={() => {
                            return <Room index={index} />
                        }} />
                    )
                }) : ""}
            </Switch>
        </div>
    )


}
