
export const getEntitiePersons = () => {
    return [{
        id: '9999',
        name: 'Hi Platformer',
        childrens: null,
        selected: false
    }];
};

export const getInitialStateView = () => {
    return {
        entities: [{
            id: '9999',
            name: 'Hi Platformer',
            childrens: null,
            selected: false
        }],
        error: null,
        isLoading: true,
        isError: false
    };
};




