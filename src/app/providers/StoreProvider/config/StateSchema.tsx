import {CounterSchema} from "entities/Counter";
import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUserName";
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    //Асинхронные редюсоры
    loginForm?: LoginSchema,
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWitchManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
