import React from "react";

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img
                    src='https://images.pling.com/img/00/00/49/38/14/1229662/57e4ca636e5d7f286b03497d05f5eed4f67c.jpg'
                    alt='beach'/>
            </div>

            <div>
                ava + description
                {/*<img src="https://www.logoarena.com/userimg/biglogo/1836_1565166571_biglogo.jpg" alt=""/>*/}
            </div>

            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;