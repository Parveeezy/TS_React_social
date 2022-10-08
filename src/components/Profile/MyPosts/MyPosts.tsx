import React from 'react';
import Post from "./Posts/Post";
import s from './MyPosts.module.css'
import {ProfilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    profilePagePosts: ProfilePageType
}

const MyPosts = (props: MyPostsPropsType) => {

    let post = props.profilePagePosts.posts

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
                <Post posts={post}/>
            </div>
        </div>
    );
};

export default MyPosts;