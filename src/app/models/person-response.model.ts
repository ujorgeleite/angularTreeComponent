export class PersonResponseModel {
    constructor(public id: string,
                public name: string,
                public children?: PersonResponseModel[]) { }

}
