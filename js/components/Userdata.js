import React, { Component } from 'react';

export default class UserData extends Component {

    handleClick(e) {
        this.props.callback(this.props.id);
    }

    render() {
        return (
            <tr onClick={this.handleClick.bind(this)} key={this.props.key}>
                <td><img className="user-list__user-image" src={"/images/" + this.props.image + ".svg"} alt={ this.props.name } /></td>
                <td>{ this.props.name }</td>
                <td>{ this.props.age }</td>
                <td>{ this.props.phone }</td>
            </tr>
        );
    }
}