import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
            <div className={s.item}>
                <img className={s.postUserImg}
                    src="https://www.logoarena.com/userimg/biglogo/1836_1565166571_biglogo.jpg"
                    alt=""/>
                {props.message}
                <div>
                    <span>like: </span> <span>{props.likesCount}</span>
                </div>
        </div>
    );
};

export default Post;