import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: number
    name: string
}

const DialogItem =(props: DialogsItemPropsType) => {
    return(
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return(
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem id={1} name={'Parviz'}/>
                <DialogItem id={2} name={'Nisso'}/>
                <DialogItem id={3} name={'Parisa'}/>
                <DialogItem id={4} name={'Latif'}/>

            </div>
            <div className={s.messages}>
                <div className={s.messagesItem}>
                    <Message message={'Hello'}/>
                    <Message message={'How are u'}/>
                    <Message message={'Wonderful'}/>
                    <Message message={'Yo im Latif'}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;