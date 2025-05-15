import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import MainLayout from './components/layout/MainLayout'
import AuthLayout from './components/layout/AuthLayout'

export default function App() {
  return (
    <Routes>
      {/* Main Layout for app routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* Aquí pueden ir más rutas como /dashboard, /settings, etc */}
      </Route>

      {/* Auth Layout for auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        {/* Luego agregaremos /register, /forgot-password, etc */}
      </Route>
    </Routes>
  )
}
