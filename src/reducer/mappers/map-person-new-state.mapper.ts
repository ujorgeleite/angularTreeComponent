import { map as mapChildrens } from './map-childrens.mapper';
import { PersonViewModel } from 'src/app/models/person-view.model';

export const map = (personMap: PersonViewModel, person: PersonViewModel) => {
    if (personMap.id !== person.id) {
        return { ...personMap };
    }

    return {
        ...personMap,
        childrens: mapChildrens(personMap.childrens, person.selected),
        selected: person.selected
    } as PersonViewModel;
};
