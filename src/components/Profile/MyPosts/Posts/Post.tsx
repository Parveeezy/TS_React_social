import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
            <div className={s.item}>
                <img className={s.postUserImg}
                    src="https://www.logoarena.com/userimg/biglogo/1836_1565166571_biglogo.jpg"
                    alt=""/>
                Post
                <div>
                    <span>like</span>
                </div>
        </div>
    );
};

export default Post;