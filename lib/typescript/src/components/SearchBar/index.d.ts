import React from 'react';
declare const SearchBar: ({ value, onChangeText, handleClear }: {
    value: string;
    onChangeText: (text: string) => void;
    handleClear: () => void;
}) => React.JSX.Element;
export { SearchBar };
