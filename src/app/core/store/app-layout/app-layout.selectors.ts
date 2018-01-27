import { State } from './app-layout.reducer';

export const getLoading = (state: State) => {
    if (state) {
        return state.loading;
    } else {
        return false;
    }
};
