import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component{
    state = {
        x: false,
        newLabel: this.props.label
    }
    
    onTransformLabel = (x) => {
        this.setState({
            x: !x
        })
    };

    addingClass = (e) => {
        const {target} = e;
        if (target && target.classList.contains('post-item')) {
            target.classList.add('editing');
        } 
    }

    removingClass = (e) => {
        const target = document.querySelectorAll('.post-item');
        target.forEach(item => {
            if (e.keyCode === 13) {
                item.classList.remove('editing');
            }
        })     
    }

    onLabelChange = (e) => {
        this.setState({
            newLabel: e.target.value
        })
    }

    render () {
        const {onDeleteItem, onCompleted} = this.props;
        const {x, newLabel} = this.state;
        const checkedLabel = x === true ? 'checked-label' : '';

        return (
            <li 
                className="post-item list-group-item "
                onDoubleClick={this.addingClass}>
                <input 
                    id="check"
                    type="checkbox" 
                    className="radio"
                    onChange={() => this.onTransformLabel(x)}
                    onClick={onCompleted}
                    checked={x}/>
                <label htmlFor="check"></label>
                <div className="styled-div">
                    <span className={checkedLabel}>{newLabel}</span>
                    <i 
                        className="fa fa-times" 
                        aria-hidden="true" 
                        onClick={onDeleteItem}></i>
                </div>
                <input 
                    className="edit"
                    type="text" 
                    value={newLabel}
                    onChange={this.onLabelChange}
                    onKeyDown={this.removingClass}
                    />
            </li>
        )   
    }
};

