import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './page';

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      title: 'Welcome to Our Application'
    };
    return translations[key] || key;
  }
}));

// Mock useRouter
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn()
  })
}));

// Mock Image component
vi.mock('next/image', () => ({
  default: ({ alt, ...props }: { alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  )
}));

// Mock ReactFlow component
vi.mock('@xyflow/react', () => ({
  ReactFlow: ({ nodes, edges }: { nodes: unknown[]; edges: unknown[] }) => (
    <div data-testid="react-flow-mock">
      ReactFlow with {nodes.length} nodes and {edges.length} edges
    </div>
  )
}));

describe('HomePage', () => {
  test('renders the internationalized title', () => {
    render(<HomePage />);
    const title = screen.getByText('Welcome to Our Application');
    expect(title).toBeInTheDocument();
  });

  test('renders the ReactFlow component', () => {
    render(<HomePage />);
    const reactFlow = screen.getByTestId('react-flow-mock');
    expect(reactFlow).toBeInTheDocument();
    // Updated to match current roadmap structure - check for the actual count
    expect(reactFlow).toHaveTextContent('ReactFlow with 31 nodes and 35 edges');
  });

  test('renders footer links', () => {
    render(<HomePage />);
    
    const learnLink = screen.getByText('Learn').closest('a');
    const examplesLink = screen.getByText('Examples').closest('a');
    const nextjsLink = screen.getByText('Go to nextjs.org →').closest('a');

    expect(learnLink).toHaveAttribute('href', 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
    expect(examplesLink).toHaveAttribute('href', 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
    expect(nextjsLink).toHaveAttribute('href', 'https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
  });

  test('renders footer icons', () => {
    render(<HomePage />);
    
    const fileIcon = screen.getByAltText('File icon');
    const windowIcon = screen.getByAltText('Window icon');
    const globeIcon = screen.getByAltText('Globe icon');

    expect(fileIcon).toBeInTheDocument();
    expect(windowIcon).toBeInTheDocument();
    expect(globeIcon).toBeInTheDocument();
  });

  test('has correct layout structure', () => {
    render(<HomePage />);
    const title = screen.getByText('Welcome to Our Application');
    const container = title.closest('div');
    
    // Updated to match current layout structure
    expect(container).toHaveClass('min-h-screen', 'flex', 'flex-col');
  });
});

describe('example', () => {
  test('given a passing test: passes', () => {
    expect(1).toStrictEqual(1);
  });
});
