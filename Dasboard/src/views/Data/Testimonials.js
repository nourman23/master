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

const Testimonials = () => {
  const [Testimonials, setTestimonials] = useState()
  const [delTestimonial, setDelTestimonial] = useState()
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

  const handleDeleteTestimonial = (id) => {
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
        setDelTestimonial(id)
        var deleteTestimonial = {
          method: 'delete',
          url: `http://127.0.0.1:8000/api/delete_testmonial/${id}`,
          headers: {},
        }

        axios(deleteTestimonial)
          .then(function (response) {
            console.log(response.data.Testimonials)
            setTestimonials(response.data.testimonials)
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
      url: 'http://127.0.0.1:8000/api/AdminShowTesimonials',
    }
    axios(config)
      .then(function (response) {
        console.log(response.data.data)
        setTestimonials(response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  const handleChangeStatus = (testimonial, status) => {
    console.log(testimonial)

    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/changeTestimonialStatus',
      data: {
        testimonial: testimonial,
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
  let style
  return (
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell className="text-center">
            <CIcon icon={cilPeople} />
          </CTableHeaderCell>
          <CTableHeaderCell>User name</CTableHeaderCell>
          <CTableHeaderCell style={{ width: '400px' }}>Testimonial</CTableHeaderCell>
          <CTableHeaderCell className="text-center">status</CTableHeaderCell>
          <CTableHeaderCell className="text-center">Delete</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {Testimonials?.map((testimonial, index) => {
          user = users.find((usr) => usr.id === testimonial.user_id)
          testimonial.status == 'rejected'
            ? (style = { borderLeft: '2px red solid' })
            : (style = { borderLeft: 'none' })
          return (
            <CTableRow v-for="item in tableItems" key={index} style={style}>
              <CTableDataCell className="text-center">
                {/* <CAvatar size="md" src={user.image} /> */}
                <CAvatar size="md" src={`data:image/jpeg;base64,${user.image}`} />
              </CTableDataCell>
              <CTableDataCell>
                <div>{user.first_name + ' ' + user.last_name}</div>
                {/* <div className="small text-medium-emphasis">
                <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                {item.user.registered}
              </div> */}
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <p className="w-50">{testimonial.testimonial}</p>
              </CTableDataCell>
              <CTableDataCell>
                <CFormSelect
                  size="sm"
                  onChange={(e) => {
                    handleChangeStatus(testimonial, e.target.value)
                  }}
                  className="mb-3"
                  aria-label="Small select example"
                >
                  {options.map((option, i) => {
                    if (option === testimonial.status) {
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
              <CTableDataCell className="text-center">
                <CIcon
                  icon={cilTrash}
                  style={{ cursor: 'pointer', color: 'red' }}
                  onClick={() => {
                    handleDeleteTestimonial(testimonial.id)
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
export default Testimonials
