import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component{

    render () {
        const {label} = this.props;
        return (
            <li className="post-item list-group-item">
                <label htmlFor="check">
                    <input id="check" type="checkbox" className="radio"/>
                    <span className="fake"></span>
                </label>
                <div className=" styled-div d-flex">
                    <span>{label}</span>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
            </li>
        )   
    }
};

