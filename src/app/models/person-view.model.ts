export interface PersonViewModel {
    id: string;
    name: string;
    childrens: PersonViewModel[];
    selected: boolean;
}
