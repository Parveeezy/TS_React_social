import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePosts: ProfilePageType
}

const Profile = (props: ProfilePropsType) => {

    let post = props.profilePosts;

    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePagePosts={post}/>
        </div>
    );
};

export default Profile;