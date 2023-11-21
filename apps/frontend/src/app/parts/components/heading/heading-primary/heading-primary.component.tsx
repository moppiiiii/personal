import React from 'react';

type HeadingPrimaryComponentProps = {
  children: React.ReactNode;
};

export const HeadingPrimaryComponent: React.FC<HeadingPrimaryComponentProps> = ({ children }) => {
  return <h1>{children}</h1>;
};
