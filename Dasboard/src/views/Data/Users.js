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

const Users = () => {
  const [users, setUsers] = useState()

  const handleDeleteUsers = (id) => {
    Swal.fire({
      title: 'Do you want to delete this user ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      // confirmButtonColor: 'red',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        var deleteUser = {
          method: 'delete',
          url: `http://127.0.0.1:8000/api/delete_user/${id}`,
          headers: {},
        }

        axios(deleteUser)
          .then(function (response) {
            console.log(response.data.users)
            setUsers(response.data.users)
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
  var config = {
    method: 'get',
    url: 'http://127.0.0.1:8000/api/showUsers',
  }
  useEffect(() => {
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

  return (
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell className="text-center">
            <CIcon icon={cilPeople} />
          </CTableHeaderCell>
          <CTableHeaderCell>User</CTableHeaderCell>
          <CTableHeaderCell>Delete</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {users?.map((user, index) => (
          <CTableRow v-for="item in tableItems" key={index}>
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
            {/* <CTableDataCell className="text-center">
              <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
            </CTableDataCell> */}
            {/* <CTableDataCell>
              <div className="small text-medium-emphasis">Last login</div>
              <strong>{user.activity}</strong>
            </CTableDataCell> */}
            <CTableDataCell>
              <CIcon
                icon={cilTrash}
                style={{ cursor: 'pointer', color: 'red' }}
                onClick={() => {
                  handleDeleteUsers(user.id)
                }}
              />
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}
export default Users
