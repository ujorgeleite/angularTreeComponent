import { PersonViewModel } from 'src/app/models/person-view.model';

export const map = (entities: PersonViewModel[], selected: boolean) => {
    return entities.map(item => {
        item.selected = selected;

        if (item.childrens.length > 0) {
             map(item.childrens, selected);
        }

        return { ...item };
    }) as PersonViewModel[];
};
