import React from "react";

const Mediana = ({data}) => {
      return (
        <div className="param-block">
            <p className="param-block__text">Медиана:</p>
            <div className="param-block__value">{data}</div>
        </div>
    );
};

export default Mediana;
