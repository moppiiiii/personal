import React from 'react';

type HeadingSecondaryComponentProps = {
  children: React.ReactNode;
};

export const HeadingSecondaryComponent: React.FC<HeadingSecondaryComponentProps> = ({ children }) => {
  return <h2>{children}</h2>;
};
