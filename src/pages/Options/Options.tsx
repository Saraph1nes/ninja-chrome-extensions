import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  // return <div className="OptionsContainer">{title.toUpperCase()} PAGE</div>;
  return <div className="OptionsContainer">别急，新页面在路上了</div>;
};

export default Options;
