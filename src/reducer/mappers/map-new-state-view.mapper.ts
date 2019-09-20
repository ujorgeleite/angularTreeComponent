import { StateViewModel } from '../models/state-view.model';
import { PersonViewModel } from 'src/app/models/person-view.model';
import { map as mapPerson } from './map-person-new-state.mapper';


export const map = (state: StateViewModel, person: PersonViewModel) => {
    const { entities } = state;
    const updatedEntities = entities.map(personMap => {
        return mapPerson(personMap, person);
    });
    
    return {
        ...state,
        entities: updatedEntities
    };
};



