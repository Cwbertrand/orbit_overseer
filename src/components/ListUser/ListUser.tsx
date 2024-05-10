import React, { useEffect } from 'react';
import { ListUserBloc, Item, ItemText } from "./ListUser.style";
import {useAppSelector} from "../../app/redux/store/store";
import SwitchInputSimple from '../SwitchInput/SwitchInputSimple';


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
                        <SwitchInputSimple validateSwitch={validateSwitch} disabled={player.status ? true : false} />
                    ) : (
                        <ItemText style={{color:'#fff'}}>{player.status ? 'ready' : 'not ready'}</ItemText>
                    )}
                    
                </Item>
            ))}
        </ListUserBloc>
    );
};

export default ListUser;