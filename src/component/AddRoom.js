import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class AddRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: "",
            name: "",
        }
    }
    validType = (e) => {
        this.setState({ type: e.target.value })
    }
    validName = (e) => {

        this.setState({ name: e.target.value })

    }
    render() {
        return (
            <div className="add-room">
                <div className="form-add-room">
                    <h3>Add Room</h3>
                    <select id="select-room" onChange={this.validType}>
                        <option>בחר סוג חדר</option>
                        <option value="Bath Room">שירותים</option>
                        <option value="Living Room">סלון</option>
                        <option value="Bed Room">חדר שינה</option>
                        <option value="Kitchen">מטבח</option>
                    </select>
                    <input id="input-name" onChange={this.validName} placeholder="שם החדר..." />
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <button id="button-add-room" onClick={() => {
                            let type = this.state.type;
                            let name = this.state.name;
                            if (type && name) {
                                this.props.add(name, type);
                            } else {
                                alert('שגיאה')
                            }

                        }}><p>הוסף</p></button></Link>
                </div>
            </div>
        )
    }
}
