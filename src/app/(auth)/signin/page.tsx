"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", { email, password, redirect: true, callbackUrl: "/dashboard" });
    if ((res as any)?.error) setError("Invalid credentials");
  }

  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6">Sign in</h1>
      <form className="space-y-3" onSubmit={onSubmit}>
        <input className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button className="bg-black text-white px-4 py-2 rounded" type="submit">Sign in</button>
      </form>
      <div className="mt-4">
        <button className="border px-4 py-2 rounded" onClick={()=>signIn("google", { callbackUrl: "/dashboard" })}>Sign in with Google</button>
      </div>
    </div>
  );
}


