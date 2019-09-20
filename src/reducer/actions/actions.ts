import { Action } from '@ngrx/store';
import { PersonViewModel } from '../../app/models/person-view.model';
import { ErrorViewModel } from '../models/error-view.model';

export const READ_LIST = '[angularTreeComponent] ReadList';
export const UPDATE_LIST = '[angularTreeComponent] UpdateList';
export const UPDATE_PERSON = '[angularTreeComponent] UpdatePerson';
export const ERROR_HANDLER = '[angularTreeComponent] ErroHandler';


export class ReadListAction implements Action {
    readonly type = READ_LIST;

    constructor() { }
}


export class UpdateListAction implements Action {
    readonly type = UPDATE_LIST;

    constructor(public payload: PersonViewModel[]) { }
}

export class UpdatePersonAction implements Action {
    readonly type = UPDATE_PERSON;

    constructor(public payLoad: PersonViewModel) { }
}


export class ErrorHandlerAction implements Action {
    readonly type = ERROR_HANDLER;

    constructor(public payload: ErrorViewModel) { }
}


export type Actions = ReadListAction | UpdateListAction | ErrorHandlerAction | UpdatePersonAction;
