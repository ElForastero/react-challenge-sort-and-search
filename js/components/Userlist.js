import React, { Component } from 'react';
import UserData from './Userdata';

class UserList extends Component {

    handleClick(id) {
        this.props.callback(id);
    }

    render() {
        return (
            <table className="table table-striped table-hover user-list">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map(function (user) {
                    return <UserData id={user.id} callback={this.handleClick.bind(this)} key={user.id} name={user.name} image={user.image} phone={user.phone} age={user.age} />
                }.bind(this))}
                </tbody>
            </table>
        )
    }
}

export default UserList;