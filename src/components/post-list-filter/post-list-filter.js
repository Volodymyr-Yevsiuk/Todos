import React, {Component} from 'react';
import './post-list-filter.css';

export default class PostListFilter extends Component{
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'completed', label: 'Completed'}
        ]
    }

    render() {
        const {number, filterSelect, filter} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;
            const clas = active ? 'btn-active' : '';
            return (
                <button key={name}
                        className={"btn-filter mr-right " + clas}
                        type="button"
                        onClick={ () => filterSelect(name)}>
                            {label}
                        </button>
            );
        });

        return (
            <div className="post-filter-item">
                <div className="mt-two-px">
                    <span>{number}</span> item left
                </div>
                <div> 
                    {buttons}
                </div>
            </div>
        )
    }
};
