import React from "react";

const Middle = ({data}) => {
      return (
        <div className="param-block">
            <p className="param-block__text">Среднее:</p>
            <div className="param-block__value">{data}</div>
        </div>
    );
};

export default Middle;
