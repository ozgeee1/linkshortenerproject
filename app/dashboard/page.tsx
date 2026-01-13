import * as React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// JSX.Element yerine React.ReactElement yazıyoruz
export default async function DashboardPage(): Promise<React.ReactElement> {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
    </main>
  );
}