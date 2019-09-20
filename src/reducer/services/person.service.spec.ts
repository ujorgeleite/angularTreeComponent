import { PersonService } from './person.service';
import { PersonMock as mock } from './person.mock';
import { StateViewModel } from '../models/state-view.model';
import { PersonViewModel } from 'src/app/models/person-view.model';


fdescribe('PersonService', () => {

    describe('UpdateSelectedEntities', () => {
        let state: StateViewModel;
        describe('When the method is called and person param is selected', () => {
            const person: PersonViewModel = mock.getPersonWithChildrens(true);
            const service = new PersonService();
            const stateViewModel: StateViewModel = mock.getStateWithEntities();

            beforeEach(async () => {
                state = await service.updateSelected(stateViewModel, person);
                console.log(state);
            });

            it('Then update entities in stateviewmodel', () => {
                expect(stateViewModel).not.toEqual(state);
            });

            it('Then the childrens for person in entities will be selected', () => {
                const result = state.entities
                    .filter(personMap => personMap.id === person.id && personMap.selected === true)
                    .map(personMap => personMap.childrens.every(child => child.selected))
                    .every(item => item === true);

                expect(result).toBeTruthy();
            });

            it('Then the childrens for person in entities will be selected', () => {
                const result = state.entities
                    .filter(personMap => personMap.id === person.id && personMap.selected === true);
                expect(result.length).toEqual(1);
            });

            it('Then the stateviewmodel is returned without errors', () => {
                expect(state.isError).toBeFalsy();
            });

        });
    });
});

