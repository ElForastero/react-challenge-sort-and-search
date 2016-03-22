import React, { Component } from 'react';

export default class Search extends Component {
    handleChange(e) {
        let value = e.target.value;
        this.props.callback(value);
    }

    render() {
        return (
            <div className="search">
                <form className="form" action="">
                    <div className="form-group">
                        <input onChange={this.handleChange.bind(this)} type="text" className="search__input form-control" placeholder="Type here something..."/>
                    </div>
                </form>
            </div>
        );
    }
}