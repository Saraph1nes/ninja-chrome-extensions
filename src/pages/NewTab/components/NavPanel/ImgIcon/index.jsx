import React, { useState } from 'react';

import './index.less';

const ImgIcon = (props) => {
  const [isError, setIsError] = useState(false);
  const { src, alt, onClick, height, width, className } = props;
  return (
    <div onClick={onClick} draggable className={`img-icon ${className}`} style={{ width: width, height: height }}>
      {isError ? (
        <div className="img-icon-img-error">{alt[0]}</div>
      ) : (
        <img
          height={height}
          width={width}
          className="img-icon-img"
          src={src}
          alt={alt}
          onError={(e) => {
            setIsError(true);
          }}
        />
      )}
    </div>
  );
};

export default ImgIcon;
