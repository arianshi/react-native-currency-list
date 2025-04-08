import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SearchBar } from '../index';

describe('SearchBar', () => {
  it('renders the search icon and input', () => {
    const { getByLabelText } = render(
      <SearchBar value="" onChangeText={() => {}} handleClear={() => {}} />
    );

    expect(getByLabelText('Search Input')).toBeTruthy();
  });

  it('does not show clear icon when value is empty', () => {
    const { queryByLabelText } = render(
      <SearchBar value="" onChangeText={() => {}} handleClear={() => {}} />
    );

    expect(queryByLabelText('Clear Search')).toBeNull();
  });

  it('shows clear icon when value is not empty', () => {
    const { getByLabelText } = render(
      <SearchBar value="test" onChangeText={() => {}} handleClear={() => {}} />
    );

    expect(getByLabelText('Clear Search')).toBeTruthy();
  });

  it('calls onChangeText when typing', () => {
    const onChangeTextMock = jest.fn();

    const { getByLabelText } = render(
      <SearchBar value="" onChangeText={onChangeTextMock} handleClear={() => {}} />
    );

    fireEvent.changeText(getByLabelText('Search Input'), 'hello');

    expect(onChangeTextMock).toHaveBeenCalledWith('hello');
  });

  it('calls handleClear when clear icon is pressed', () => {
    const handleClearMock = jest.fn();

    const { getByLabelText } = render(
      <SearchBar value="text" onChangeText={() => {}} handleClear={handleClearMock} />
    );

    fireEvent.press(getByLabelText('Clear Search'));

    expect(handleClearMock).toHaveBeenCalled();
  });
});
