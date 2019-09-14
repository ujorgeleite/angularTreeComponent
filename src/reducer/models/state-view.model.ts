import { PersonViewModel } from '../../app/models/person-view.model';
import { ErrorViewModel } from './error-view.model';

export interface StateViewModel {
    entities: PersonViewModel [];
    error: ErrorViewModel;
    isLoading: boolean;
    isError: boolean;
}
