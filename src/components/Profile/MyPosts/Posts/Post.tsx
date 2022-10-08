import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../redux/state";

type PostPropsType = {
    posts: PostType[]
}

const Post = (props: PostPropsType) => {

    const postsElements = props.posts.map(p => {
        return (
            <div key={p.id} className={s.item}>
                <img className={s.postUserImg}
                     src="https://www.logoarena.com/userimg/biglogo/1836_1565166571_biglogo.jpg"
                     alt=""/>
                {p.message}
                <div>
                    <span>like: </span> <span>{p.likesCount}</span>
                </div>
            </div>
        )
    })

    return (
        <>
            {postsElements}
        </>
    );
};

export default Post;