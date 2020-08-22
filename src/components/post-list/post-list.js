import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import PostListFilter from '../post-list-filter';
import './post-list.css';

const PostList = ({posts, onDeleteItem, number, filter, filterSelect, onCompleted}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <div key={id}>
                <PostListItem 
                    {...itemProps}
                    onDeleteItem={ () => onDeleteItem(id)}                    onCompleted={ () => onCompleted(id)}/>
            </div>
                
        )
    });

    return (
        <ul className="list-group">
            {elements}
            <PostListFilter 
                number={number}
                filter={filter}
                filterSelect={filterSelect}/>
        </ul>
    )
};

export default PostList;


