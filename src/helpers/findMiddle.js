import {sortData} from './sortData';

// Находим среднее значение
export const findMiddle = (data) => {
    const middle = sortData(data).reduce(sum) / sortData(data).length;
    return parseInt(middle);
}

export const sum = (x, y) => (x + y);