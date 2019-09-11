import { Action } from '@ngrx/store';
import { PersonViewModel } from '../models/PersonViewModel';
import { ErrorViewModel } from '../models/ErrorViewModel';

export const READ_LIST = '[angularTreeComponent] ReadList';
export const UPDATE_LIST = '[angularTreeComponent] UpdateList';
export const ERROR_HANDLER = '[angularTreeComponent] ErroHandler';


export class ReadListAction implements Action {
    readonly type = READ_LIST;

    constructor() { }
}


export class UpdateListAction implements Action {
    readonly type = UPDATE_LIST;

    constructor(public payload: PersonViewModel[]) { }
}


export class ErrorHandlerAction implements Action {
    readonly type = ERROR_HANDLER;

    constructor(public payload: ErrorViewModel) { }
}


export type Actions = ReadListAction | UpdateListAction | ErrorHandlerAction;
