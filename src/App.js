import React, { Component } from 'react';
import { Todo } from './Todo.js';
import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <div id="app">
        <Todo />
      </div>
    );
  }
}