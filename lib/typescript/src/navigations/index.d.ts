import React from 'react';
export declare const TransitionConfig: {
    NONE: () => {
        transitionSpec: {
            duration: number;
            timing: number;
        };
    };
};
export declare const NavigationTransitionOptions: () => {
    animationEnabled: boolean;
    transitionConfig: () => {
        transitionSpec: {
            duration: number;
            timing: number;
        };
    };
};
declare const CurrencyListNavContainer: React.FC;
export default CurrencyListNavContainer;
