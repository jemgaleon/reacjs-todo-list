import React, { Component } from 'react';
import './Item.css';

export class Item extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        if (typeof this.props.onClick === 'function')
            this.props.onClick(this.props.value);
    }

    render() {
        return (
            <li className="item">
                <div className="item-content">
                    <span>
                        {this.props.content}
                    </span>
                </div>
                <button
                    onClick={this.handleClick}>
                    Delete
                </button>
            </li>
        );
    }
}