import React from 'react';
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import nextId from "react-id-generator";

import './app.css';
import { Component } from 'react';

export default class App extends Component{

    state = {
        data: [{label: 'Hello', id: nextId()}]
    }

    onAddItem = (body) => {
        const newItem = {
            label: body,
            id: nextId()
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        });
    }

    onDeleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        })
    }   

    render () {
        const {data} = this.state;
        
        return (
            <div className="app">
                <PostAddForm onAdd={this.onAddItem}/>
                <PostList 
                    posts={data} 
                    onDeleteItem={this.onDeleteItem}/>
            </div>
        )
    }
};

