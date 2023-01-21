import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { AuthProvider } from 'react-auth-kit'
import { RequireAuth } from 'react-auth-kit'
// routes config
import routes from '../routes'
import Logout from './../views/Data/Logout'
const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        {/* <AuthProvider authType={'localstorage'} authName={'_auth'}> */}
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={
                    <RequireAuth loginPath={'/admin/login'}>
                      <route.element />
                    </RequireAuth>
                  }
                />
              )
            )
          })}
          <Route
            path="/"
            element={
              <RequireAuth loginPath={'/admin/login'}>
                <Navigate to="dashboard" replace />
              </RequireAuth>
            }
          />
          <Route
            path="/logout"
            element={
              <RequireAuth loginPath={'/admin/login'}>
                <Logout />
              </RequireAuth>
            }
          />
        </Routes>
        {/* </AuthProvider> */}
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
