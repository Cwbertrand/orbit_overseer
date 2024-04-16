import {Text, View} from "react-native";
import * as React from "react";
import {useAppSelector} from "../../app/redux/store/store";

const GameID = ()=> {
    const { gameId, players } = useAppSelector(state => state.game);
    return (
      <>
          <View style={{ alignItems: 'center', marginTop: 10}}>
              <Text style={{ color: 'white' }}>GAME ID: {gameId}</Text>
          </View>
      </>  
    );
}

export default GameID;