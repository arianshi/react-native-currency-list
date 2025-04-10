import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import useCurrencyListContext from '../useCurrencyListContext';
import { CurrencyListContext } from '../../contexts';
import { PROVIDER_NOT_ADDED } from '../../utils/constants';
import type { ICurrencyListContextProps } from '../../type';

const TestComponent = () => {
  const { metadata } = useCurrencyListContext();
  return (
    <Text testID="currency-name">
      {metadata?.data[0]?.name}
    </Text>
  );
};

describe('useCurrencyListContext', () => {
  it('throws an error if used without provider', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {}); // 防止 error 输出污染测试报告

    expect(() => render(<TestComponent />)).toThrow(PROVIDER_NOT_ADDED);

    errorSpy.mockRestore();
  });

  it('returns context value correctly when provider is used', () => {
    const mockContextValue: ICurrencyListContextProps = {
      metadata: {
        data: [
          {
            id: '1',
            name: 'US Dollar',
            symbol: '$',
            code: 'USD',
          },
        ],
      },
    };

    render(
      <CurrencyListContext.Provider value={mockContextValue}>
        <TestComponent />
      </CurrencyListContext.Provider>
    );

    expect(screen.getByTestId('currency-name').props.children).toBe('US Dollar');
  });
});
