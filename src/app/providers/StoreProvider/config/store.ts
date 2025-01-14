import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {createReducerManager} from "app/providers/StoreProvider/config/ReducerManager";

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        preloadedState: initialState
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
