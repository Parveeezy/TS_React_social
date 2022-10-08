export type MessageType = {
    id: number
    message: string
};
export type DialogType = {
    id: number
    name: string
};
export type PostType = {
    id: number
    message: string
    likesCount: number
};
export type ProfilePageType = {
    posts: PostType[]
};
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
};
export type SidebarType = {};
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
};

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, how it s going?', likesCount: 15},
            {id: 2, message: 'Hop Hey La la ley', likesCount: 2},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Parviz'},
            {id: 2, name: 'Nisso'},
            {id: 3, name: 'Parisa'},
            {id: 4, name: 'Latif'},
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are u'},
            {id: 3, message: 'Wonderful'},
            {id: 4, message: 'Yo im Latif'},
        ]
    },
    sidebar: {}
};

export default state;
