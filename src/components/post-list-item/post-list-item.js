import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component{

    render () {
        const {label, onDeleteItem} = this.props;
        return (
            <li className="post-item list-group-item">
                <input id="check" type="checkbox" className="radio"/>
                <label htmlFor="check"></label>
                <div className=" styled-div d-flex">
                    <span>{label}</span>
                    <i 
                        className="fa fa-times" 
                        aria-hidden="true" 
                        onClick={onDeleteItem}></i>
                </div>
            </li>
        )   
    }
};

