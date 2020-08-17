import React, {Component} from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = (e) => {
            this.setState({
                text: e.target.value
            })
        };
        this.postInfo = (e) => {

            if (e.keyCode === 13) {
				this.props.onAdd(this.state.text);
                this.setState({
                    text: ''
                }) 
			} 
        } 
    }
    

    render () {
        return (
            <>
                <input 
                    type="text"
                    placeholder="Post something"
                    className="form-control post-form pos"
                    value={this.state.text}
                    onKeyDown={this.postInfo}
                    onChange={this.onValueChange}
                />
            </>
        )
    }
}

