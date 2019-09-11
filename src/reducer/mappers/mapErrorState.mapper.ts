import { ErrorViewModel } from '../models/ErrorViewModel';


export const map = (error: ErrorViewModel) => {
    return { error, entities: null, isLoading: false, isError: true };
};

