import React from 'react';
import Post from "./Posts/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={s.content}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                New posts
            </div>
            <div>
                <Post message='Hello, how it s going?' likesCount={15}/>
                <Post message='Hop Hey La la ley' likesCount={10}/>
            </div>
        </div>
    );
};

export default MyPosts;