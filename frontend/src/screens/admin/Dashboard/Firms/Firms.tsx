import React, { ChangeEvent, useState } from "react"
import { Outlet, useNavigate } from 'react-router-dom'
import { DashboardWrapper } from "../../Dashboard/Dashboard.style"
import {
  StyledButton,
  StyledInput,
  StyledCustomSelect
} from "../../../../components"
import { RegInfoReview, RunCSVModal } from "../../../../components/Modals/Modals"
import Header from "../../Header"
import { useStyletron } from "baseui"
import Table from "./Table"
import RegistrationForm from "../../../../components/Forms/broker/Registration/Registration.form"

type Props = {}
const sampleData = [
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 1
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: 'Canada', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 2
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: 'Canada', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 3
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: 'Canada', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 4
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 5
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 6
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 7
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 8
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 9
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 10
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 11
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 12
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 13
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 14
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 15
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 16
  },
  {
    firmDetails: { name: 'Company Name', account_no: '123456789' },
    billingInfo: {
      country: '', street_1: '', street_2: '', province_or_state: '', city: '', zip_code: '',
    }, accessCoordinatorInfo: [{
      name: 'Coordinator Name',
      email: 'coordinator@example.com',
      send_verification: true
    }], authorizedUserInfo: [{
      name: 'authorized User Name',
      email: 'authorized@example.com',
      send_verification: true
    }], id: 17
  },
]
const Firms = (props: Props) => {
  const navigate = useNavigate()
  const [css] = useStyletron()
  const [data, setData] = useState(sampleData);
  const [filteredData, setFilteredData] = useState(sampleData);
  const [selectedFirmId, setSelectedFirmId] = useState<number | null>(null)
  const [openCSVModal, setopenCSVModal] = useState(false)
  const [openRegForm, setOpenRegForm] = useState(false)
  const selectedFirm = data.find(d => d.id === selectedFirmId)!

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const result = data.filter(d => d.firmDetails.name.toLowerCase().startsWith(value));
    setFilteredData(result)
  }
  return (
    <DashboardWrapper style={{ paddingTop: "120px" }}>
      <RunCSVModal open={openCSVModal} closeModal={() => setopenCSVModal(false)} />
      <RegInfoReview
        data={selectedFirm}
        open={!!selectedFirmId}
        showButton={false}
        showCloseIcon
        onSubmit={() => { }}
        closeModal={() => setSelectedFirmId(null)}
      />
      <Header>
        <span />
        <StyledButton
          small
          style={{
            backgroundColor: "#fff",
            color: "#B4873F",
            border: "1px solid #B4873F",
            width: "260px"
          }}
          onClick={() => navigate('new')}
        >
          register new firm
        </StyledButton>
      </Header>

      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px"
        })}
      >
        <StyledInput style={{ flex: 2 }} type="text" placeholder="Search" onChange={handleSearch} />
        <div style={{ flex: 1.2 }}>
          <StyledCustomSelect
            options={[{ name: "Billing Information", value: 'billing' }, { name: "Registered Firms", value: 'firms' }, { name: "User Access", value: 'user' }]}
            placeholder="Select One"
            onSelect={e => { }}
            value=""
            name=""
          />
        </div>
        <StyledButton style={{ width: 260 }} onClick={() => setopenCSVModal(true)}>export</StyledButton>
      </div>
      <Table
        data={filteredData.map(d => ({
          name: d.firmDetails.name,
          account: d.firmDetails.account_no,
          id: d.id
        }))}
        onClick={id => setSelectedFirmId(id)}
      />
      <Outlet />
    </DashboardWrapper>
  )
}

export default Firms
