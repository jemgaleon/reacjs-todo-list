import React, { Component } from 'react';
import { Item } from './Item.js';
import './List.css';

export class List extends Component {
    render() {
        const items = this.props.items;
        const itemList = items.map((item) =>
            <Item
                key={item.id}
                value={item.id}
                content={item.content}
                onClick={this.props.onClick}/>
        );

        return (
            <ul>
                {itemList}
            </ul>
        );
    }
}