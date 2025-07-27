import { describe, expect, test, vi } from 'vitest';

// Mock the redirect function to throw like the real one does
vi.mock('next/navigation', () => ({
  redirect: vi.fn().mockImplementation((url: string) => {
    throw new Error(`NEXT_REDIRECT: ${url}`);
  })
}));

describe('RootPage', () => {
  test('redirects to /en locale', async () => {
    // Import the component
    const { default: RootPage } = await import('./page');
    
    // The component should throw when called (due to redirect)
    expect(() => RootPage()).toThrow('NEXT_REDIRECT: /en');
  });
});