/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
import React from 'react';
// function to parse incoming photo data into image elements
const listParser = (data, fn) => {
  const newData = [...data];
  const first = newData.shift();
  let index = 0;
  const list = newData.reduce((acc, curr, idx) => {
    acc.push((
      <img onClick={fn} key={idx} id={index += 1} src={curr.url} alt="house" className="smallImages" />
    ));
    return acc;
  }, []);
  list.unshift((
    <img onClick={fn} key={Math.floor(Math.random() * 50000 + 100)} id={0} src={first.url} className="firstImage" alt="house" />
  ));
  return list;
};

export default listParser;
