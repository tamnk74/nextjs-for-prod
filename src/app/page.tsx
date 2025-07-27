import { redirect } from 'next/navigation';

// This page only renders when the user is at the root path
export default function RootPage() {
  // Redirect to the default locale
  redirect('/en');
}
