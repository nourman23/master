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

const Drivers = () => {
  const [Drivers, setDrivers] = useState()
  const options = ['pending ', 'approved', 'rejected']

  const handleDeleteDriver = (id) => {
    Swal.fire({
      title: 'Do you want to delete this driver ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      // confirmButtonColor: 'red',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        var deleteDriver = {
          method: 'delete',
          url: `http://127.0.0.1:8000/api/delete_driver/${id}`,
          headers: {},
        }

        axios(deleteDriver)
          .then(function (response) {
            console.log(response.data.drivers)
            setDrivers(response.data.drivers)
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
      url: 'http://127.0.0.1:8000/api/showDrivers',
    }
    console.log('renderd')

    axios(config)
      .then(function (response) {
        console.log(response.data.data)
        setDrivers(response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  const handleChangeStatus = (driver, status) => {
    console.log(driver)

    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/changeDriverStatus',
      data: {
        driver: driver,
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
          <CTableHeaderCell>Driver</CTableHeaderCell>
          <CTableHeaderCell>status</CTableHeaderCell>
          <CTableHeaderCell>Delete</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {Drivers?.map((driver, index) => (
          <CTableRow v-for="item in tableItems" key={index}>
            <CTableDataCell className="text-center">
              <CAvatar size="md" src={driver.image} />
            </CTableDataCell>
            <CTableDataCell>
              <div>{driver.first_name + ' ' + driver.last_name}</div>
              {/* <div className="small text-medium-emphasis">
                <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                {item.user.registered}
              </div> */}
            </CTableDataCell>
            <CTableDataCell>
              <CFormSelect
                size="sm"
                onChange={(e) => {
                  handleChangeStatus(driver, e.target.value)
                }}
                className="mb-3"
                aria-label="Small select example"
                value={driver.status}
              >
                {options.map((option, i) => {
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
                  handleDeleteDriver(driver.id)
                }}
              />
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}
export default Drivers
