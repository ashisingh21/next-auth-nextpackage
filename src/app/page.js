"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return session ? (
    <div>
      <p>Welcome {session.user.name}</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  ) : (
    <button onClick={() => signIn("google")}>Sign in with Google</button>
  );
}
