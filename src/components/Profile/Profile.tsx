import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.contentBgImg}
                    src='https://images.pling.com/img/00/00/49/38/14/1229662/57e4ca636e5d7f286b03497d05f5eed4f67c.jpg'
                    alt='beach'/>
            </div>

            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;