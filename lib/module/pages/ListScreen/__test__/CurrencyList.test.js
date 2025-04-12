import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CurrencyList from '../index';
import { CurrencyListContext } from '../../../contexts';
const mockData = [{
  id: '1',
  name: 'US Dollar',
  symbol: 'USD'
}, {
  id: '2',
  name: 'Bitcoin',
  symbol: 'BTC'
}];
const renderWithProvider = (data = mockData) => {
  return render(/*#__PURE__*/React.createElement(CurrencyListContext.Provider, {
    value: {
      metadata: {
        data
      }
    }
  }, /*#__PURE__*/React.createElement(CurrencyList, null)));
};
describe('CurrencyList', () => {
  it('renders currency list correctly', () => {
    const {
      getByText
    } = renderWithProvider();
    expect(getByText('List Cryptocurrency')).toBeTruthy();
    expect(getByText('US Dollar')).toBeTruthy();
    expect(getByText('Bitcoin')).toBeTruthy();
  });
  it('filters results when searching', () => {
    const {
      getByPlaceholderText,
      queryByText
    } = renderWithProvider();
    const searchInput = getByPlaceholderText('Search');
    fireEvent.changeText(searchInput, 'bit');
    expect(queryByText('Bitcoin')).toBeTruthy();
    expect(queryByText('US Dollar')).toBeNull();
  });
  it('shows empty state when no result matches search', () => {
    const {
      getByPlaceholderText,
      getByText
    } = renderWithProvider();
    const searchInput = getByPlaceholderText('Search');
    fireEvent.changeText(searchInput, 'xxx');
    expect(getByText('No results found')).toBeTruthy();
  });
  it('clears search when clear button is pressed', () => {
    const {
      getByPlaceholderText,
      getByTestId,
      queryByText
    } = renderWithProvider();
    const searchInput = getByPlaceholderText('Search');
    fireEvent.changeText(searchInput, 'bit');
    expect(queryByText('Bitcoin')).toBeTruthy();
    expect(queryByText('US Dollar')).toBeNull();
    const clearButton = getByTestId('clear-button');
    fireEvent.press(clearButton);
    expect(searchInput.props.value).toBe('');
    expect(queryByText('US Dollar')).toBeTruthy();
    expect(queryByText('Bitcoin')).toBeTruthy();
  });
});
//# sourceMappingURL=CurrencyList.test.js.map