import React, { Component } from 'react';

export default class ActiveUser extends Component {

    render() {
        if ("undefined" === typeof this.props.user) {
            return(
                <h2>Nothing found :(</h2>
            );
        }

        return (
            <div className="h-bordered text-center">
                <img className="user-info__user-image" src={"images/" + this.props.user.image + ".svg"} alt={this.props.user.name} />
                <h2>{this.props.user.name}</h2>
                <table className="table table-condensed text-center">
                    <tbody>
                        <tr>
                            <td>Age:</td>
                            <td>{this.props.user.age}</td>
                        </tr>
                        <tr>
                            <td>Favorite Animal:</td>
                            <td>{this.props.user.image}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{this.props.user.phone}</td>
                        </tr>
                    </tbody>
                </table>
                <p><b>Коронная фраза: </b>{this.props.user.phrase}</p>
            </div>
        );
    }
}