import {sum, findMiddle} from './findMiddle';
import {sortData} from './sortData';

// Находим стандартное отклонение
export const findStandardDeviation = (data) => {
    const deviations = sortData(data).map(x => x - findMiddle(data));

   return parseInt(Math.sqrt(deviations.map(square).reduce(sum) / (sortData(data).length - 1)));
};

const square = (x) => x * x;