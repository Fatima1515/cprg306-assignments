"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: "#FFD1DC",
        minHeight: "100vh",
      }}
    >
      {!user && (
        <>
          <h1>Week 10 – Login</h1>
          <button
            onClick={async () => await gitHubSignIn()}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#333",
              color: "white",
              borderRadius: "6px",
            }}
          >
            Login with GitHub
          </button>
        </>
      )}

      {user && (
        <>
          <h2>
            Welcome, {user.displayName} ({user.email})
          </h2>

          <button
            onClick={async () => await firebaseSignOut()}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#333",
              color: "white",
              borderRadius: "6px",
              marginBottom: "20px",
            }}
          >
            Logout
          </button>

          <p>
            <Link
              href="/week-10/shopping-list"
              style={{ fontSize: "18px", color: "blue" }}
            >
              Go to Shopping List →
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
