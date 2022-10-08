import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {

    let profilePosts = props.state.profilePage;
    let dialogsPageProps = props.state.dialogsPage;

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Route path='/profile' render={() => <Profile profilePosts={profilePosts}/>}/>
                <Route exact path='/dialogs' render={() => <Dialogs dialogsPage={dialogsPageProps}/>}/>
            </div>
        </div>
    );
}

export default App;