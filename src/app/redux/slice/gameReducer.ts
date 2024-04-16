import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../api/endpoints";
import { Player } from "../../../models/player";

interface GameState{
    gameId: string | null;
    webSocket: null,
    players: Player[],
}

const initialState: GameState = {
    gameId: null,
    webSocket: null,
    players: [],
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
    }
})

export const {setGameId, setPlayers} = gameSlice.actions;
export default gameSlice.reducer;