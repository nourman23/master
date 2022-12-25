import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { AuthProvider } from 'react-auth-kit'
import { RequireAuth } from 'react-auth-kit'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Logout = React.lazy(() => import('./views/Data/logout'))

function App() {
  return (
    <AuthProvider authType={'localstorage'} authName={'_auth'}>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/admin/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            {/* <Route path="*" name="Home" element={<DefaultLayout />} /> */}
            <Route
              path="*"
              element={
                <RequireAuth loginPath={'/admin/login'}>
                  <DefaultLayout />
                </RequireAuth>
              }
            />
          </Routes>
        </Suspense>
      </HashRouter>
    </AuthProvider>
  )
}

export default App
