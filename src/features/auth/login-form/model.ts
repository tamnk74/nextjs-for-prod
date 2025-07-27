import { createClient } from '@/shared/utils/supabase/server';
import { redirect } from 'next/navigation';

export type LoginFormInputs = {
  email: string;
  password: string;
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect('error', '/sign-in', error.message);
  }

  return redirect('/protected');
};

function encodedRedirect(_type: string, _path: string, _message: string) {
  throw new Error('Function not implemented.');
}
