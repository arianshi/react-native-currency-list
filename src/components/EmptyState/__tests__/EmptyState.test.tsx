import React from 'react';
import { render } from '@testing-library/react-native';
import { EmptyState } from '../index';

jest.mock('react-native-vector-icons/Ionicons', () => 'MockIcon'); // Mock the Ionicons component

describe('EmptyState', () => {
  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(<EmptyState />);

    // Check if the default title and subtitle are rendered
    expect(getByText('No results found')).toBeTruthy();
    expect(getByText('Check the spelling or try other keywords')).toBeTruthy();

    // Check if the icon is rendered (it should be mocked as "MockIcon")
    const icon = getByTestId('icon');
    expect(icon).toBeTruthy();
    expect(icon.props.name).toBe('search-outline'); // Ensure the default icon name is 'search-outline'
  });

  it('renders custom title and subtitle when provided', () => {
    const { getByText } = render(
      <EmptyState title="Custom Title" subtitle="Custom Subtitle" />
    );

    // Check if the custom title and subtitle are rendered
    expect(getByText('Custom Title')).toBeTruthy();
    expect(getByText('Custom Subtitle')).toBeTruthy();
  });

  it('renders custom icon when provided', () => {
    const { getByTestId } = render(<EmptyState iconName="star-outline" />);

    // Check if the custom icon name is rendered
    const icon = getByTestId('icon');
    expect(icon.props.name).toBe('star-outline');  // Ensure the custom icon name is 'star-outline'
  });

  it('renders default icon when no iconName is passed', () => {
    const { getByTestId } = render(<EmptyState />);

    // Check if the default icon is rendered
    const icon = getByTestId('icon');
    expect(icon.props.name).toBe('search-outline'); // Ensure the default icon name is 'search-outline'
  });
});
