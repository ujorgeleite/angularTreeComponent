import { PersonViewModel } from '../../app/models/person-view.model';

export const map = (entities: PersonViewModel []) => {
    return { entities, error: null, isLoading: false, isError: false };
};
