"use client";

import * as React from "react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/Button";

export default function AuthButtons(): React.ReactElement {
  return (
    <div className="flex gap-4 sm:flex-row">
      <SignInButton mode="modal">
        <Button aria-label="Sign in" variant="primary">
          Sign in
        </Button>
      </SignInButton>

      <SignUpButton mode="modal">
        <Button aria-label="Sign up" variant="outline">
          Sign up
        </Button>
      </SignUpButton>
    </div>
  );
}
