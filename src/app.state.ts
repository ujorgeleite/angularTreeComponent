import { PersonViewModel } from './reducer/models/PersonViewModel';
import { StateViewModel } from './reducer/models/StateViewModel';

export interface AppState {
  readonly personState: StateViewModel;
}
