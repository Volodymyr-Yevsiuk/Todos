import React from 'react';
import './post-list-filter.css';
const PostListFilter = () => {
    return (
        <div className="post-filter-item">
            <div className="mt-two-px">
                <span>0</span> item left
            </div>
            <div> 
                <button className="btn-filter mr-right">All</button>
                <button className="btn-filter mr-right">Active</button>
                <button className="btn-filter mr-right">Completed</button>
            </div>
            <span className="clear mt-two-px">Clear completed</span>
        </div>
    )
};

export default PostListFilter;