import React, { Component } from 'react';
import './AddItem.css';

export class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        const input = document.getElementById('txtAddItem');
        const value = input.value;

        if (value === '')
            return;

        this.setState({
            item: value
        });

        if (typeof this.props.onClick === 'function')
            this.props.onClick(value);

        input.value = '';
    }

    render() {
        return (
            <div className="add-item-list">
                <input
                    id="txtAddItem"
                    type="text"
                    placeholder="Add something here..."/>
                <button
                    onClick={this.handleClick}>
                    Add to List
                </button>
            </div>
        );
    }
}