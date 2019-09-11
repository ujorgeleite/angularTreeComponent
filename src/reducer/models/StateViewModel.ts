import { PersonViewModel } from './PersonViewModel';
import { ErrorViewModel } from './ErrorViewModel';

export interface StateViewModel {
    entities: PersonViewModel [];
    error: ErrorViewModel;
    isLoading: boolean;
    isError: boolean;
}
