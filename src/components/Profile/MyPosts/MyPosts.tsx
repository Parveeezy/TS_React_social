import React from 'react';
import Post from "./Posts/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hello, how it s going?', likesCount: 15},
        {id: 2, message: 'Hop Hey La la ley', likesCount: 2},

    ]
    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div>
                New posts
            </div>
            <div>
                <Post postsData={postsData}/>
            </div>
        </div>
    );
};

export default MyPosts;