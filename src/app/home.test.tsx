import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  test('renders the Next.js logo', () => {
      render(<Home />);
      const nextLogo = screen.getByAltText('Next.js logo');
      expect(nextLogo).toBeInTheDocument();
  });

  test('renders the "Get started" text', () => {
      render(<Home />);
      const getStartedText = screen.getByText(/Get started by editing/i);
      expect(getStartedText).toBeInTheDocument();
  });

  test('renders the "Deploy now" link', () => {
      render(<Home />);
      const deployLink = screen.getByText(/Deploy now/i);
      expect(deployLink).toBeInTheDocument();
      expect(deployLink.closest('a')).toHaveAttribute('href', 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
  });

  test('renders the "Read our docs" link', () => {
      render(<Home />);
      const docsLink = screen.getByText(/Read our docs/i);
      expect(docsLink).toBeInTheDocument();
      expect(docsLink.closest('a')).toHaveAttribute('href', 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
  });

  test('renders the footer links', () => {
      render(<Home />);
      const learnLink = screen.getByText(/Learn/i);
      const examplesLink = screen.getByText(/Examples/i);
      const nextjsLink = screen.getByText(/Go to nextjs.org/i);

      expect(learnLink).toBeInTheDocument();
      expect(examplesLink).toBeInTheDocument();
      expect(nextjsLink).toBeInTheDocument();

      expect(learnLink.closest('a')).toHaveAttribute('href', 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
      expect(examplesLink.closest('a')).toHaveAttribute('href', 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
      expect(nextjsLink.closest('a')).toHaveAttribute('href', 'https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
  });
});

describe('example', () => {
  test('given a passing test: passes', () => {
    expect(1).toStrictEqual(1);
  });
});