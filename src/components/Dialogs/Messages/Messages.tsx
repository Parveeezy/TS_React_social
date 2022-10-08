import s from "../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../redux/state";

type MessagesPropsType = {
    message: MessageType[]
}

export const Messages = (props: MessagesPropsType) => {

    const messagesElements = props.message.map(m => {
        return (
            <div key={m.id} className={s.message}>
                {m.message}
            </div>
        )
    })

    return (
        <>
            {messagesElements}
        </>
    )
}
