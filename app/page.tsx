import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AuthButtons from "../components/AuthButtons";
import * as React from "react";
import { Link, BarChart2, QrCode, Settings } from "lucide-react";

function Feature({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-black/[.06] bg-white p-6 shadow-sm dark:border-white/[.06] dark:bg-transparent">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-black dark:text-zinc-50">{title}</h3>
        <p className="mt-1 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-6xl px-8 py-20">
        <div className="mx-auto max-w-4xl">
          <header className="mb-12 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/file.svg" alt="Shortly logo" width={36} height={36} />
              <span className="text-xl font-semibold text-black dark:text-zinc-50">Shortly</span>
            </div>
            <nav>
              <AuthButtons />
            </nav>
          </header>

          <section className="mb-16 flex flex-col items-start gap-8">
            <h1 className="text-4xl font-extrabold leading-tight text-black dark:text-zinc-50">Shorten links, share smarter.</h1>
            <p className="max-w-2xl text-lg text-zinc-700 dark:text-zinc-400">
              Create short, memorable links, get actionable analytics, and share with confidence — all in one lightweight app built for teams and creators.
            </p>

            <div className="mt-4 flex w-full max-w-md gap-4">
              <a href="/dashboard" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-95">Get started</a>
              <a href="#features" className="inline-flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 text-sm font-medium hover:bg-black/[.04]">See features</a>
            </div>

            <div className="mt-8 w-full max-w-xl rounded-lg border border-black/[.06] bg-white p-3 shadow-sm dark:bg-transparent">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">Preview</span>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="rounded-md bg-zinc-100 px-3 py-2 text-sm dark:bg-zinc-800">short.ly/abc123</div>
                    <button className="rounded-full border border-black/[.06] px-3 py-1 text-sm hover:bg-black/[.04]">Copy</button>
                  </div>
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">0 clicks • 0 visits</div>
              </div>
            </div>
          </section>

          <section id="features">
            <h2 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">Features</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Feature
                title="One-click shortening"
                description="Paste a long link and generate a short URL instantly — fast and reliable."
                icon={<Link className="h-5 w-5 text-foreground" />}
              />

              <Feature
                title="Custom aliases"
                description="Create branded or custom slugs so your links are easy to remember and share."
                icon={<Settings className="h-5 w-5 text-foreground" />}
              />

              <Feature
                title="Analytics & tracking"
                description="See clicks, referrers, and geo data so you can measure performance."
                icon={<BarChart2 className="h-5 w-5 text-foreground" />}
              />

              <Feature
                title="QR codes"
                description="Instantly generate QR codes for physical or social sharing."
                icon={<QrCode className="h-5 w-5 text-foreground" />}
              />
            </div>
          </section>

          <footer className="mt-16 border-t border-black/[.06] pt-8 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center justify-between">
              <span>© {new Date().getFullYear()} Shortly</span>
              <div className="flex gap-4">
                <a href="/dashboard" className="hover:underline">Dashboard</a>
                <a href="/docs" className="hover:underline">Docs</a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
