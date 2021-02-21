import { FC } from 'react';

export const Main: FC = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1
      }}
    >
      {children}
    </div>
  );
};