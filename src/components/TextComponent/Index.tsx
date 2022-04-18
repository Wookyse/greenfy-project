import React from 'react';
import './style.scss';

type TextProps = {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  mainText: React.ReactNode;
  autor: React.ReactNode;
  date: React.ReactNode;
};

export const TextContainer = (props: TextProps) => {
  return (
    <div className="textConatiner">
      <div className="textBackground">
        <div className="textTitle">
          <h1>{props.title}</h1>
        </div>
        <div className="textSubTitle">
          <h2>{props.subTitle}</h2>
        </div>
        <div className="textMain">
          <p>{props.mainText}</p>
        </div>
        <div className="textAuthor">
          <p>{props.autor}</p>
        </div>
        <div className="textDate">
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};
