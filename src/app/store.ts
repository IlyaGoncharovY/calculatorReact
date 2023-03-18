import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import calculatorReducer from "../bll/calculatorSlice"


const rootReducer = combineReducers({
  calculatorReducer
})

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
