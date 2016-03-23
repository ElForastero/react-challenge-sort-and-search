import React, { Component } from 'react';

export default class Sorting extends Component {
    toggleDirection(elem) {
        switch (elem.dataset.direction) {
            case "forward":
                elem.dataset.direction = "backward";
                break;
            case "backward":
                elem.dataset.direction = "forward";
                break;
        }
    }

    handleClick(e) {
        let value = e.target.value,
            direction = e.target.dataset.direction;

        this.props.callback(value, direction);

        this.toggleDirection(e.target);
    }

    render() {
        return(
            <div className="sorting">
                <button onClick={this.handleClick.bind(this)} className="btn btn-default sorting__button" data-direction="forward" value="name" >Sort by name</button>
                <button onClick={this.handleClick.bind(this)} className="btn btn-default sorting__button" data-direction="forward" value="age" >Sort by age</button>
            </div>
        )
    }
}