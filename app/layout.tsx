import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {ClerkProvider, UserButton, SignedIn, SignedOut, SignInButton} from "@clerk/nextjs";
 
const IBMplex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ 
      variables: {colorPrimary: '#624cf5'}
     }}>
    <html lang="en">
      <body>
        <header>
      
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  </ClerkProvider>
  );
}
