import { createSlice } from '@reduxjs/toolkit'
import {CounterSchema} from "entities/Counter/model/types/CounterSchema";
import {UserSchema} from "entities/User/model/types/userSchema";

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
