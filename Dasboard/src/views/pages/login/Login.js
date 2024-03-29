import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilEmail } from '@coreui/icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSignIn } from 'react-auth-kit'
import { Alert, Form } from 'react-bootstrap'
const Login = () => {
  const navigate = useNavigate()
  const SignIn = useSignIn()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const data = new FormData()
  data.append('email', email)
  data.append('password', pass)

  const config = {
    method: 'post',
    url: 'http://127.0.0.1:8000/api/DriverLogin',
    data: data,
  }

  const handleLogin = (e) => {
    console.log(data)
    e.preventDefault()
    setMessage((prev) => ({ ...prev, login: '' }))
    setLoading(true)
    axios(config)
      .then((res) => {
        console.log(res.data.user_info)
        if (
          SignIn({
            token: res.data.access_token,
            expiresIn: 7000,
            tokenType: 'Bearer',
            authState: res.data.user_info,
          })
        ) {
          setLoading(false)
          return navigate('/Data/Users')
        }
      })
      .catch(function (error) {
        console.log(error)
        setLoading(false)
        setMessage((prev) => ({
          ...prev,
          login: error.response.data?.message,
        }))
      })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer className="w-50">
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm
                    onSubmit={(e) => {
                      handleLogin(e)
                    }}
                  >
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    {message.login != undefined ? (
                      <Alert variant="danger"> {message.login} </Alert>
                    ) : (
                      ''
                    )}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        name="email"
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                        autoComplete="email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => {
                          setPass(e.target.value)
                        }}
                        name="password"
                      />
                    </CInputGroup>
                    {/* <CRow> */}
                    <CCol xs={6}>
                      <CButton
                        type="submit"
                        className="px-4 border-0"
                        style={{ backgroundColor: '#ff3e41' }}
                      >
                        Login
                      </CButton>
                    </CCol>
                    {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    {/* </CRow> */}
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
