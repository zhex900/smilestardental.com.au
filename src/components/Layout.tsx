import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}