import { PersonViewModel } from 'src/app/models/person-view.model';
import { StateViewModel } from '../models/state-view.model';

export class PersonMock {

    public static getStateWithEntities = () => {

        return {
            error: {},
            isLoading: false,
            isError: false,
            entities:
                [
                    {
                        id: '465abc',
                        name: 'Mark',
                        selected: false,
                        childrens: [{
                            id: '466abc',
                            name: 'Zack',
                            childrens: {},
                            selected: false
                        },
                        {
                            id: '477abc',
                            name: 'Jeff',
                            childrens: {},
                            selected: false
                        }]
                    }
                ]

        } as StateViewModel;
    }

    public static getPersonWithChildrens = (isSelected: boolean =  false) => {

        return {
            id: '465abc',
            name: 'Mark',
            selected: isSelected,
            childrens: [{
                id: '466abc',
                name: 'Zack',
                childrens: {},
                selected: false
            }]
        } as PersonViewModel;
    }
}

