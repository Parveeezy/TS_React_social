import s from "../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    messagesData: messagesDataPropsType[]
}
export type messagesDataPropsType = {
    id: number
    message: string
}


export const Messages = (props: MessagePropsType) => {

    const messagesElements = props.messagesData.map(m => {
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
