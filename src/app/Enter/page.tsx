import Link from "next/link";
import { signIn } from "next-auth/react";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-6">Join The DevPulse Community</h1>
      <p>DevPulse is a community of 100 amazing developers</p>
      <button
        onClick={() => signIn("google")}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Login with Google
      </button>
      <Link href="/create-account">
        <a className="text-blue-500">Create Account</a>
      </Link>
    </div>
  );
}
