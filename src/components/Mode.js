import React from "react";

const Mode = ({data}) => {
      return (
        <div className="param-block">
            <p className="param-block__text">Mode</p>
            <div className="param-block__value">{data}</div>
        </div>
    );
};

export default Mode;
