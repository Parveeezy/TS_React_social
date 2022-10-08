import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem,} from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/state";
import {Messages} from "./Messages/Messages";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
};

const Dialogs = (props: DialogsPropsType) => {

    let dialog = props.dialogsPage.dialogs;
    let message = props.dialogsPage.messages;

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem dialog={dialog}/>
            </div>

            <div className={s.messages}>
                <div className={s.messagesItem}>
                    <Messages message={message}/>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;