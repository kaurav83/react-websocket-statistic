// Получение значение котировок
export const sortData = (data) => data.map(v => v.value).sort((a, b) => a - b);