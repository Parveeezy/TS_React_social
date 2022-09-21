import s from './ProfileInfo.module.css'
import React from "react";

type ProfileInfoPropsType = {}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img className={s.contentBgImg}
                     src='https://images.pling.com/img/00/00/49/38/14/1229662/57e4ca636e5d7f286b03497d05f5eed4f67c.jpg'
                     alt='beach'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;