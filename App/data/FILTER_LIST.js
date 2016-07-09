import TABLE_LIST from './TABLE_LIST';

const
    FILTER_KEYS = ['designation', 'project', 'team'],

    FILTER_LIST = FILTER_KEYS.map((key)=> {
        return {key, values: []}
    });

TABLE_LIST.forEach(({members})=> {
    members.forEach((member) => {
        FILTER_LIST.forEach(({key, values})=> {
            const value = member[key];

            if (value && values.indexOf(value) < 0) {
                values.push(value);
            }
        });
    });
});

FILTER_LIST.forEach(({values})=> {
    values.sort();
});

export default FILTER_LIST;
