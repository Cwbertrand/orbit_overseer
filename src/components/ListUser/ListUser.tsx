import React from 'react';
import { ListUserBloc, Item, ItemText } from "./ListUser.style";

let users = ['User ID 1', 'User ID 2', 'User ID 3'];

interface ListUserProps {
    users: string[];
}

const ListUser = () => {
    return (
        <ListUserBloc>
            {users.map((user, index) => (
                <Item key={index} >
                    <ItemText>{user}</ItemText>
                </Item>
            ))}
        </ListUserBloc>
    );
};

export default ListUser;