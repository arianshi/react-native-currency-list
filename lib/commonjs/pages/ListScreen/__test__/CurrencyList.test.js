"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _index = _interopRequireDefault(require("../index"));
var _contexts = require("../../../contexts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
  return (0, _reactNative.render)(/*#__PURE__*/_react.default.createElement(_contexts.CurrencyListContext.Provider, {
    value: {
      metadata: {
        data
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, null)));
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
    _reactNative.fireEvent.changeText(searchInput, 'bit');
    expect(queryByText('Bitcoin')).toBeTruthy();
    expect(queryByText('US Dollar')).toBeNull();
  });
  it('shows empty state when no result matches search', () => {
    const {
      getByPlaceholderText,
      getByText
    } = renderWithProvider();
    const searchInput = getByPlaceholderText('Search');
    _reactNative.fireEvent.changeText(searchInput, 'xxx');
    expect(getByText('No results found')).toBeTruthy();
  });
  it('clears search when clear button is pressed', () => {
    const {
      getByPlaceholderText,
      getByTestId,
      queryByText
    } = renderWithProvider();
    const searchInput = getByPlaceholderText('Search');
    _reactNative.fireEvent.changeText(searchInput, 'bit');
    expect(queryByText('Bitcoin')).toBeTruthy();
    expect(queryByText('US Dollar')).toBeNull();
    const clearButton = getByTestId('clear-button');
    _reactNative.fireEvent.press(clearButton);
    expect(searchInput.props.value).toBe('');
    expect(queryByText('US Dollar')).toBeTruthy();
    expect(queryByText('Bitcoin')).toBeTruthy();
  });
});
//# sourceMappingURL=CurrencyList.test.js.map