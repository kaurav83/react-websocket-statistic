import {sortData} from './sortData';

// рассчет моды
export const findMode = (data) => {
    return sortData(data).reduce((accumulator, currentValue) => {
        const repeat = (currentValue in accumulator.numMap) ?
            ++accumulator.numMap[currentValue] 
            : 
            accumulator.numMap[currentValue] = 1;

        if (repeat > accumulator.modeRepeat && repeat > 1) {
            accumulator.modeRepeat = repeat;
            accumulator.mode = currentValue;
        }

        return accumulator;
    }, {mode: null, modeRepeat: 0, numMap: {} }).mode
};