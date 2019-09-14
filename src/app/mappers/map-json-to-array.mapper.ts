import { PersonResponseModel } from '../models/person-response.model';
import { isFulfilled } from 'q';

export const map = async (result: PersonResponseModel[]) => {
    return await Object.keys(result).map(index => {
        const objectMapped = {...result[index]};
        const { children } = objectMapped;

        if (children) {
            objectMapped.children = map(children);
        }

        return { ...objectMapped };
    });
};
