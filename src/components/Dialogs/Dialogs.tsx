import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/1'}>Parviz</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>Nisso</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Parisa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>Latif</NavLink>

                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messagesItem}>
                    <div className={s.message}>
                        Hello
                    </div>
                    <div className={s.message}>
                        How are u
                    </div>
                    <div className={s.message}>
                        Wonderful
                    </div>
                    <div className={s.message}>
                        Yo im Latif
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;