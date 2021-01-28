import { CombinedState, combineReducers, Reducer } from 'redux';
import { userReducer } from './UserReducer';
import { loadingReducer } from './LoadingReducer';
import { Store } from '../../types';

export const rootReducer: Reducer<CombinedState<Store>> = combineReducers<Store>({
    auth: userReducer,
    loading: loadingReducer
});