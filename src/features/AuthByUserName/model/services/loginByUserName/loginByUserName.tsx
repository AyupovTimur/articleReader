import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User, userActions} from 'entities/User';
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage/localstorage";

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, {rejectValue: string}>(
    'login/loginByUserName',
    async ({username, password}, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {username, password})
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("error")
        }
    },
)

