import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../../redux/state";

type DialogItemPropsType = {
    dialog: DialogType[]
};

export const DialogItem = (props: DialogItemPropsType) => {
    const dialogsElements = props.dialog.map(d => {
        return (
            <div key={d.id} className={s.dialog}>
                <NavLink to={`/dialogs/${d.id}`}>{d.name}</NavLink>
            </div>
        )
    });
    return (
        <>
            {dialogsElements}
        </>
    );
};