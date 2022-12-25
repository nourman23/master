import React, { useState, useEffect } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilTrash,
} from '@coreui/icons'
import axios from 'axios'
import Swal from 'sweetalert2'

const Requests = () => {
  const [Requests, setRequests] = useState()
  const [delRequest, setDelRequest] = useState()
  const [users, setUsers] = useState()
  var user
  const options = ['pending ', 'approved', 'rejected']

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/api/showUsers',
    }
    console.log('renderd')

    axios(config)
      .then(function (response) {
        console.log(response.data.data)
        setUsers(response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const handleDeleteRequest = (id) => {
    console.log(id)
    Swal.fire({
      title: 'Do you want to delete this testimonial ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      // confirmButtonColor: 'red',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setDelRequest(id)
        var deleteTestimonial = {
          method: 'delete',
          url: `http://127.0.0.1:8000/api/delete_request/${id}`,
          headers: {},
        }

        axios(deleteTestimonial)
          .then(function (response) {
            console.log(response.data.requests)
            setRequests(response.data.requests)
            Swal.fire(response.data.message, '', 'success')
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/api/AdminShowRequests',
    }
    axios(config)
      .then(function (response) {
        console.log(response.data.data)
        setRequests(response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  const handleChangeStatus = (request, status) => {
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/changeRequestStatus',
      data: {
        TheRequest: request,
        status: status,
      },
    }

    axios(config)
      .then(function (response) {
        console.log(response.data)
        Swal.fire({
          icon: 'success',
          title: response.data.message,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell className="text-center">
            <CIcon icon={cilPeople} />
          </CTableHeaderCell>
          <CTableHeaderCell>User name</CTableHeaderCell>
          {/* <CTableHeaderCell style={{ width: '400px' }}>Testimonial</CTableHeaderCell> */}
          <CTableHeaderCell>status</CTableHeaderCell>
          <CTableHeaderCell>Delete</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {Requests?.map((request, index) => {
          user = users.find((usr) => usr.id === request.user_id)
          return (
            <CTableRow v-for="item in tableItems" key={index}>
              <CTableDataCell className="text-center">
                <CAvatar size="md" src={user.image} />
              </CTableDataCell>
              <CTableDataCell>
                <div>{user.first_name + ' ' + user.last_name}</div>
                {/* <div className="small text-medium-emphasis">
                <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                {item.user.registered}
              </div> */}
              </CTableDataCell>
              {/* <CTableDataCell className="text-center">
                <p className="w-50">{request.request}</p>
              </CTableDataCell> */}
              <CTableDataCell>
                <CFormSelect
                  size="sm"
                  onChange={(e) => {
                    handleChangeStatus(request, e.target.value)
                  }}
                  className="mb-3"
                  aria-label="Small select example"
                >
                  {options.map((option, i) => {
                    if (option === request.status) {
                      return (
                        <option key={i} value={option} selected>
                          {option}
                        </option>
                      )
                    } else
                      return (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      )
                  })}
                </CFormSelect>
              </CTableDataCell>
              <CTableDataCell>
                <CIcon
                  icon={cilTrash}
                  style={{ cursor: 'pointer', color: 'red' }}
                  onClick={() => {
                    handleDeleteRequest(request.id)
                  }}
                />
              </CTableDataCell>
            </CTableRow>
          )
        })}
      </CTableBody>
    </CTable>
  )
}
export default Requests
