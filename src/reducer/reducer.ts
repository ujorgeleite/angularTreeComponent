import * as PersonActions from './actions/actions';
import { StateViewModel } from './models/StateViewModel';
import { map as mapError } from './mappers/mapErrorState.mapper';
import { map as mapState } from './mappers/mapState.mapper';



export const initialState: StateViewModel = {
    entities: [{
        id: '9999',
        name: 'Hi Platformer',
        childrens: null,
        selected: false
    }],
    error: null,
    isLoading: true,
    isError: false
};

export function reducer(state = initialState, action: PersonActions.Actions) {
    switch (action.type) {
        case PersonActions.UPDATE_LIST:
            return { ...mapState(action.payload) };
        case PersonActions.READ_LIST:
            return state;
        case PersonActions.ERROR_HANDLER:
            return { ...mapError(action.payload) };
        default:
            return state;
    }
}
