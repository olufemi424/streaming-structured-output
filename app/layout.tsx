import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Generator",
  description:
    "AI-powered recipe generator with multiple implementation approaches",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { cookies } = await import("next/headers");

  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border h-14 px-4">
          <div className="h-full max-w-screen-xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity"
            >
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                niniwise.ai
              </span>
            </Link>
          </div>
        </nav>

        <SidebarLayout
          defaultOpen={cookies().get("sidebar:state")?.value === "true"}
        >
          <AppSidebar />
          <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out mt-14">
            <div className="h-full rounded-md border-2 border-dashed p-2">
              <SidebarTrigger />
              {children}
            </div>
          </main>
        </SidebarLayout>
      </body>
    </html>
  );
}
