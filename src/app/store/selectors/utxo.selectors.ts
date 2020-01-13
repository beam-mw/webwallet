import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
import * as fromUtxo from './../reducers/utxo.reducers';

export interface State {
    utxos: fromUtxo.UtxoState;
}

export const reducers: ActionReducerMap<State> = {
    utxos: fromUtxo.utxoReducer,
};

export const selectUtxoState = createFeatureSelector<fromUtxo.UtxoState>('utxos');

export const selectUtxoIds = createSelector(
    selectUtxoState,
    fromUtxo.selectUtxoIds // shorthand for usersState => fromUser.selectUserIds(usersState)
);

export const selectUtxoEntities = createSelector(
    selectUtxoState,
    fromUtxo.selectUtxoEntities
);

export const selectAllUtxo = createSelector(
    selectUtxoState,
    fromUtxo.selectAllUtxo
  );

export const selectUtxoTotal = createSelector(
    selectUtxoState,
    fromUtxo.selectUtxoTotal
);