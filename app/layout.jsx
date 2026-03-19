import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import TransitionProvider from "@/components/TransitionProvider";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono' 
});

export const metadata = {
  title: "Oscar Medrano",
  description: "Oscar Medrano's Portfolio",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <SmoothScroll>
          <Header />  
          <main className="min-h-screen flex flex-col items-center justify-start">
            <div className="w-full max-w-[95vw] sm:max-w-[90vw] xl:max-w-7xl 2xl:max-w-[90vw] pb-4 sm:pb-6">
              <TransitionProvider>
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden min-h-[85vh] p-2 sm:p-4 xl:p-6 2xl:p-8">
                  {children}
                </div>
              </TransitionProvider>
            </div>
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
