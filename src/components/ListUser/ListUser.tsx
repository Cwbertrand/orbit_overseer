import React from 'react';
import { ListUserBloc, Item, ItemText } from "./ListUser.style";
import {useAppSelector} from "../../app/redux/store/store";
import SwitchInputReady from '../SwitchInputReady/SwitchInputReady';

const ListUser = () => {
    const {players, playerName} = useAppSelector(state => state.game);

    function validateSwitch() {
        return true;
    }
    return (
        <ListUserBloc>
            {players.map((player, index) => (
                <Item key={index} >
                    <ItemText>{player.name}</ItemText>
                    {player?.name === playerName ? (
                        <SwitchInputReady validateSwitch={validateSwitch} disabled={!!player.status} />
                    ) : (
                        <ItemText style={{ fontFamily: 'OuterSpace', color: player.status ? 'green' : 'red' }}>
                            {player.status ? 'ready' : 'not ready'}
                        </ItemText>
                    )}
                    
                </Item>
            ))}
        </ListUserBloc>
    );
};

export default ListUser;