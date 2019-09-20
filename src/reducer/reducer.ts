import * as PersonActions from './actions/actions';
import { StateViewModel } from './models/state-view.model';
import { PersonService } from './services/person.service';
import { map as mapError } from './mappers/map-error-state.mapper';
import { map as mapState } from './mappers/map-state.mapper';



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
    const personService = new PersonService();
    switch (action.type) {
        case PersonActions.UPDATE_LIST:
            return { ...mapState(action.payload) };
        case PersonActions.READ_LIST:
            return state;
        case PersonActions.ERROR_HANDLER:
            return { ...mapError(action.payload) };
        case PersonActions.UPDATE_PERSON:
            const newState = { ...personService.updateSelected(state, action.payLoad) };
            return newState;
        default:
            return state;
    }
}
