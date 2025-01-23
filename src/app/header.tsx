import { getUserDetails } from '@/app/actions';
import { stackServerApp } from '@/stack';
import Link from 'next/link';

export async function Header() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  const userProfile = await getUserDetails(user?.id);

  return (
    <header className="w-full flex justify-between items-center px-6 py-4">
      <div className="font-medium text-[15px] tracking-tight">
        Neon Identity | Stack Auth
      </div>
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-[14px] text-gray-600 dark:text-gray-300">
            {userProfile?.email}
          </span>
          <Link
            href={app.signOut}
            className="inline-flex h-8 items-center justify-center rounded-md bg-gray-50 px-4 text-[13px] font-medium text-gray-700 transition-all hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/70"
          >
            Sign Out
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Link
            href={app.signIn}
            className="inline-flex h-8 items-center justify-center rounded-md px-4 text-[13px] font-medium text-gray-700 transition-all hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Sign In
          </Link>
          <Link
            href={app.signUp}
            className="inline-flex h-8 items-center justify-center rounded-md bg-black px-4 text-[13px] font-medium text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
