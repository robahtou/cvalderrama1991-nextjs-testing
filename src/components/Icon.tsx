// https://www.youtube.com/watch?v=_Xrz7FeOtC0
import React from 'react';
// import icon from '../assets/icon.svg';

type Props = {
  name: string;
};

export default function Icon({ name }: Props) {
  return (
    <svg>
      <use href={`../assets/icon.svg#${name}`} />
    </svg>
  );
}

// name, childClassName, className, children, ...props
