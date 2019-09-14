import { ErrorViewModel } from '../models/error-view.model';

export const map = (error: ErrorViewModel) => {
    return { error, entities: null, isLoading: false, isError: true };
};

