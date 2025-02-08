'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import { SubmitHandler, useForm } from 'react-hook-form';

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = data => {
    console.log('Form Data:', data);
    // Add your login logic here
  };
  
  return (
    <Container>
      <div className="3xl:w-1/3 3xl:p-14 mx-auto flex w-full flex-col rounded-2xl bg-[#ffffff] p-8 shadow-xl md:w-1/2 md:p-10 xl:w-2/5 2xl:w-2/5 2xl:p-12">
        <div className="flex flex-row gap-3 pb-4">
          <div>
            <Image
              src="https://avatars.githubusercontent.com/u/16433834"
              alt="Logo"
              width="50"
              height="50"
            />
          </div>
          <h1 className="my-auto text-3xl font-bold text-[#4B5563]">
            Your Company
          </h1>
        </div>
        <div className="pb-8 text-sm font-light text-[#6B7280]">
          Login to your account on Your Company.
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="pb-2">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#111827]"
            >
              Email
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                type="email"
                id="email"
                className={`mb-2 block w-full rounded-lg rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 px-4 py-3 pl-12 text-gray-600 ring-3 ring-transparent focus:border-transparent focus:ring-1 focus:ring-gray-400 focus:outline-hidden sm:text-sm ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                placeholder="name@company.com"
                autoComplete="off"
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="pb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#111827]"
            >
              Password
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-asterisk"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8.5 14 7-4"></path>
                  <path d="m8.5 10 7 4"></path>
                </svg>
              </span>
              <input
                type="password"
                id="password"
                placeholder="••••••••••"
                className={`mb-2 block w-full rounded-lg rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 px-4 py-3 pl-12 text-gray-600 ring-3 ring-transparent focus:border-transparent focus:ring-1 focus:ring-gray-400 focus:outline-hidden sm:text-sm ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                autoComplete="new-password"
                {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                })}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="focus:ring-primary-300 mb-6 w-full rounded-lg bg-[#4F46E5] px-5 py-2.5 text-center text-sm font-medium text-[#FFFFFF] focus:ring-4 focus:outline-hidden"
          >
            Login
          </button>
          <div className="text-sm font-light text-[#6B7280]">
            Don&apos;t have an accout yet?{' '}
            <a href="#" className="font-medium text-[#4F46E5] hover:underline">
              Sign Up
            </a>
          </div>
        </form>
        <div className="relative flex items-center py-8">
          <div className="grow border-[1px] border-t border-gray-200"></div>{' '}
          <span className="mx-4 shrink font-medium text-gray-500">OR</span>
          <div className="grow border-[1px] border-t border-gray-200"></div>
        </div>
        <form>
          <div className="flex flex-row justify-center gap-2">
            <a
              href="https://github.com/tamnk74/nextjs-for-prod"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-32 flex-row gap-2 rounded-md bg-gray-600 p-2 text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>{' '}
              <span className="mx-auto font-medium">Github</span>
            </a>
            <button className="flex w-32 flex-row gap-2 rounded-md bg-gray-600 p-2 text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>{' '}
              <span className="mx-auto font-medium">Twitter</span>
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
