import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import PostListFilter from '../post-list-filter';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <div key={id}>
                <PostListItem {...itemProps}/>
            </div>
                
        )
    });

    return (
        <ul className="list-group">
            {elements}
            <PostListFilter/>
        </ul>
    )
};

export default PostList;