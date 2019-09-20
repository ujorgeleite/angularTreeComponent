import { PersonViewModel } from 'src/app/models/person-view.model';
import { StateViewModel } from '../models/state-view.model';
import { map as mapStateViewModel } from '../mappers/map-new-state-view.mapper';

export class PersonService {


    updateSelected(stateViewModel: StateViewModel, person: PersonViewModel): StateViewModel {
        return { ...mapStateViewModel(stateViewModel, person) };
    }
}
