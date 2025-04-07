import React, { ReactNode } from 'react';
type ScreenProps = {
    children: ReactNode;
};
declare const Screen: ({ children }: ScreenProps) => React.JSX.Element;
export default Screen;
