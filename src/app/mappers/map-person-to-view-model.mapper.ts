import { PersonResponseModel } from '../models/person-response.model';
import { PersonViewModel } from '../models/person-view.model';


export const map = (person: PersonResponseModel): PersonViewModel => {
    return {
        id: person.id,
        name: person.name,
        childrens: person.children,
        selected: false
    } as PersonViewModel;
};
