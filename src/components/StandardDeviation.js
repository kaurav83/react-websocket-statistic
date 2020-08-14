import React from "react";

const StandardDeviation = ({data}) => {
      return (
        <div className="param-block">
            <p className="param-block__text">Стандартное отклонение:</p>
            <div className="param-block__value">{data}</div>
        </div>
    );
};

export default StandardDeviation;
