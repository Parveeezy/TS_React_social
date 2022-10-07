import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, dialogsDataPropsType} from "./DialogItem/DialogItem";
import {Messages, messagesDataPropsType} from "./Messages/Messages";

let dialogsData: dialogsDataPropsType[] = [
    {id: 1, name: 'Parviz'},
    {id: 2, name: 'Nisso'},
    {id: 3, name: 'Parisa'},
    {id: 4, name: 'Latif'},
]
let messagesData: messagesDataPropsType[] = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are u'},
    {id: 3, message: 'Wonderful'},
    {id: 4, message: 'Yo im Latif'},
]

const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem dialogsData={dialogsData}/>
            </div>

            <div className={s.messages}>
                <div className={s.messagesItem}>
                    <Messages messagesData={messagesData}/>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;