
import "./globals.css"
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 min-h-screen mx-auto">
        <header className="h-16 flex items-center">
            <h1 className="text-2xl ml-8 font-(family-name:--font-bitcount) text-green-900">My Dict</h1>
        </header>
        <div className="flex items-center justify-center p-10">
          <button className="group relative inline-block focus:outline-none">
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-100 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="relative flex items-center justify-between gap-8 border-2 border-green-300 px-8 py-3 transition-transform group-active:translate-x-1 group-active:translate-y-1 opacity-100">
              <span className="text-sm font-bold tracking-widest text-green-400">
                あたらしく追加
              </span>
              <ArrowRight size={20} className="text-green-400" />
            </span>
          </button>
        </div>
        <div className="bg-blue-300/50">
            検索
        </div>
        {children}
      </body>
    </html>
  )
}