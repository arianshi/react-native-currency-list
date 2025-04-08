import React from 'react';
type SearchBarProps = {
    value: string;
    onChangeText: (text: string) => void;
    handleClear: () => void;
};
declare const SearchBar: React.FC<SearchBarProps>;
export { SearchBar };
