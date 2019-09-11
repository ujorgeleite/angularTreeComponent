import { PersonViewModel } from '../models/PersonViewModel';


export const map = (entities: PersonViewModel []) => {
    return { entities, error: null, isLoading: false, isError: false };
};
