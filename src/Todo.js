import React, { Component } from 'react';
import { AddItem } from './AddItem.js';
import { List } from './List.js';
import './Todo.css';

export class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nextID: 0,
            items: [
                // object format: { id: 0, content: 'go to dentist' }
            ]
        };
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    handleAddItem(value) {
        const nextID = this.state.nextID + 1;
        const items = this.state.items;
        const item = {
            id: nextID,
            content: value
        };

        items.push(item);

        this.setState({
            nextID,
            items
        });
    }

    handleRemoveItem(value) {
        let itemIndex = -1;
        const items = Array.from(this.state.items);

        items.forEach((item, index) => {
            if (Number(item.id) === Number(value)) {
                itemIndex = index;
                return;
            }
        });

        items.splice(itemIndex, 1);

        this.setState({
            items
        });
    }

    render() {
        return (
            <div id="todoList">
                <div className="todo-header">
                    <h1>My To-do List</h1>
                    <AddItem
                        onClick={this.handleAddItem}/>
                </div>
                <div className="todo-body">
                    <List
                        items={this.state.items}
                        onClick={this.handleRemoveItem}/>
                </div>
            </div>
        );
    }
}