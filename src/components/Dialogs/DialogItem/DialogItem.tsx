import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemPropsType = {
    dialogsData: dialogsDataPropsType[]
}
export type dialogsDataPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogsItemPropsType) => {
    const dialogsElements = props.dialogsData.map(d => {
        return (
            <div key={d.id} className={s.dialog}>
                <NavLink to={`/dialogs/${d.id}`}>{d.name}</NavLink>
            </div>
        )
    })
    return (
        <>
            {dialogsElements}
        </>
    )
}