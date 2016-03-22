import React, { Component } from 'react';

export default class Sorting extends Component {
    handleClick(e) {
        let value = e.target.value;
        this.props.callback(value);
    }

    render() {
        return(
            <div className="sorting">
                <button onClick={this.handleClick.bind(this)} className="btn btn-default sorting__button" value="name" data-direction="">Sort by name</button>
                <button onClick={this.handleClick.bind(this)} className="btn btn-default sorting__button" value="age">Sort by age</button>
            </div>
        )
    }
}