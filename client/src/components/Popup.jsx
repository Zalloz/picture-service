/* eslint-disable react/prop-types */
import React from 'react';

const Popup = (props) => {
  const {
    check, curr, photos, change, close,
  } = props;
  if (check) {
    const prev = '<';
    const next = '>';
    return (
      <div className="popMainContainer">
        <button className="prev" type="submit" onClick={change}>{prev}</button>
        <img className="popImageStyle" src={photos[curr].url} alt="house" />
        <button className="closeStyle" type="submit" onClick={close}>X</button>
        <button className="next" type="submit" onClick={change}>{next}</button>
      </div>
    );
  }
  return null;
};

export default Popup;
