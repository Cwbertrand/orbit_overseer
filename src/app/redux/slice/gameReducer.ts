import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../api/endpoints";
import { Player } from "../../../models/player";

interface GameState{
    gameId: string | null;
    webSocket: null,
    players: Player[],
    player: string | null;
}

const initialState: GameState = {
    gameId: null,
    webSocket: null,
    players: [],
    player: null
}

export const createGame = createAsyncThunk(
    'game/createGame',
    async (_, {dispatch}) => {
        try {
            const gameData = await agent.CreateGame.createGame();
            const gameId = gameData.id;
            dispatch(setGameId(gameId));

        } catch (error) {
            throw error;
            console.error('Failed to create game', error);
        }
    }
)

export const changePlayerStatus = createAsyncThunk(
    'game/changePlayerStatus',
    async (userId: string, {dispatch}) => {
        try {
            const playerStatus = await agent.PlayerReady.playerReady(userId);
            //dispatch(setPlayers(playerStatus))
            console.log(playerStatus);
        } catch (error) {
            throw error;
            console.log('Failed to change player status', error);
        }
    }
)


const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGameId(state, action: PayloadAction<string>) {
            state.gameId = action.payload;
        },
        setPlayers(state, action: PayloadAction<Player[]>) {
            state.players = action.payload;
        },
        setUserId(state, action:PayloadAction<string>) {
            state.player = action.payload;
        }
    }
})

export const {setGameId, setPlayers, setUserId} = gameSlice.actions;
export default gameSlice.reducer;