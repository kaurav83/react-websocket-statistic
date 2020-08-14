import {sortData} from './sortData';

// Находим медиану
export const findMediana = (data) => {

    const middle = Math.floor((sortData(data).length - 1) / 2);

    return sortData(data).length % 2 ? 
                sortData(data)[middle] 
                : 
                (sortData(data)[middle] + sortData(data)[middle + 1]) / 2.0;
  };