import React from 'react';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                New posts
            </div>
            <div>
                <Post />
                <Post />
            </div>
        </>
    );
};

export default MyPosts;