import { PersonResponseModel } from '../models/person-response.model';

import { map as mapToPersonViewModel } from './map-person-to-view-model.mapper';


export const map = (result: PersonResponseModel[]) => {
    return  Object.keys(result).map(index => {
        const objectMapped = mapToPersonViewModel({ ...result[index] });
        const { childrens } = objectMapped;
        if (childrens) {
            objectMapped.childrens = map(childrens);
        }

        return objectMapped;
    });
};
