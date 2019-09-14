import * as fromPerson from './reducer';
import {
    UpdateListAction,
    ErrorHandlerAction,
    ReadListAction
} from './actions/actions';


describe('PersonReducer', () => {
    const { initialState } = fromPerson;
    let action;
    let state;
    const entities = [{
        id: '656565',
        name: 'Hi man',
        childrens: null,
        selected: true
    }];


    describe('update action', () => {
        beforeAll(() => {
            action = new UpdateListAction(entities);
            state = fromPerson.reducer(undefined, action);
        });

        it('should return an updated state with different entities', () => {
            expect(state.entities).not.toEqual(initialState.entities);
        });

        it('should return an updated state without error', () => {
            expect(state.error).toBeNull();
            expect(state.isError).toBeFalsy();
        });

        it('should return an updated state without loader', () => {
            expect(state.isLoading).toBeFalsy();
        });
    });
    describe('error handler action', () => {
        let error;
        beforeAll(() => {
            error = {
                title: 'Error',
                message: 'Error in the application'
            };

            action = new ErrorHandlerAction(error);
            state = fromPerson.reducer(undefined, action);
        });

        it('should return an updated state without entities', () => {
            expect(state.entities).toBeNull();
        });

        it('should return an updated state with error', () => {
            expect(state.error).toEqual(error);
            expect(state.isError).toBeTruthy();
        });

        it('should return an updated state without loader', () => {
            expect(state.isLoading).toBeFalsy();
        });
    });

    describe('read list action', () => {
        beforeAll(() => {
            state = fromPerson.reducer(undefined, new UpdateListAction(entities));
            action = new ReadListAction();
            state = fromPerson.reducer(state, action);
        });

        it('should return an updated state without entities', () => {
            expect(state.entities).toEqual(entities);
        });

        it('should return an updated state without error', () => {
            expect(state.error).toBeNull();
            expect(state.isError).toBeFalsy();
        });

        it('should return an updated state without loader', () => {
            expect(state.isLoading).toBeFalsy();
        });
    });
});
