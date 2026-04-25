
import "./globals.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 min-h-screen mx-auto">
        <header className="bg-green-200/50 h-16 flex items-center">
            <h1 className="text-2xl ml-8 font-(family-name:--font-bitcount) text-green-900">My Dict</h1>
        </header>
        <div className="bg-yellow-300/50">
            登録
        </div>
        <div className="bg-blue-300/50">
            検索
        </div>
        {children}
      </body>
    </html>
  )
}