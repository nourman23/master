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
  let style
  return (
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell className="text-center">
            <CIcon icon={cilPeople} />
          </CTableHeaderCell>
          <CTableHeaderCell>Driver</CTableHeaderCell>
          <CTableHeaderCell className="text-center">status</CTableHeaderCell>
          <CTableHeaderCell className="text-center">Delete</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {Drivers?.map(
          (driver, index) => (
            driver.status == 'rejected'
              ? (style = { borderLeft: '2px red solid' })
              : (style = { borderLeft: 'none' }),
            (
              <CTableRow className="mt-4  " v-for="item in tableItems" key={index} style={style}>
                <CTableDataCell className="text-center">
                  {/* <CAvatar size="md" src={driver.image} /> */}
                  <CAvatar size="md" src={`data:image/jpeg;base64,${driver.image}`} />
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
                    aria-label="Small select example"
                  >
                    {options.map((option, i) => {
                      if (option === driver.status) {
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
                      handleDeleteDriver(driver.id)
                    }}
                  />
                </CTableDataCell>
              </CTableRow>
            )
          ),
        )}
      </CTableBody>
    </CTable>
  )
}
export default Drivers
