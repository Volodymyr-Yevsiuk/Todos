import React from 'react';
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import nextId from "react-id-generator";

import './app.css';
import { Component } from 'react';

export default class App extends Component{

    state = {
        data: [],
        filter: 'all'
    }


    onAddItem = (body) => {
        const newItem = {
            label: body,
            active: true,
            completed: false,
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

    filterSelect = (filter) => {
        this.setState({filter});
    }

    filterPost = (items, filter) => {
        if (filter === 'active') {
            return items.filter(item => item.active);
        } else if (filter === 'completed'){
            return items.filter(item => item.completed);
        } else {
            return items; 
        }
    }

    onCompleted = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, completed: !old.completed};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    render () {
        const {data, filter} = this.state;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(data, filter);

        return (
            <div className="app">
                <PostAddForm onAdd={this.onAddItem}/>
                <PostList 
                    posts={visiblePosts} 
                    onDeleteItem={this.onDeleteItem}
                    number={allPosts}
                    filter={filter}
                    filterSelect={this.filterSelect}
                    onCompleted={this.onCompleted}/>
            </div>
        )
    }
};

