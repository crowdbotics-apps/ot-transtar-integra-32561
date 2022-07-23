import React, { ChangeEvent, useState, useContext, useEffect } from "react"
import { Outlet, useNavigate } from 'react-router-dom'
import { DashboardWrapper } from "../../Dashboard/Dashboard.style"
import {
  StyledButton,
  StyledInput,
  StyledCustomSelect
} from "components"
import { RegInfoReview, RunCSVModal } from "components/Modals/Modals"
import Header from "../../Header"
import { useStyletron } from "baseui"
import Table from "./Table"
import { AdminContext } from 'context/AdminContext'
import Api from 'Api'
import { FirmData } from "types"
import { Data } from "components/Forms/broker/Registration/Registration.form"
type Props = {}

const Firms = (props: Props) => {
  const navigate = useNavigate()
  const [css] = useStyletron()
  const [selectedFirmId, setSelectedFirmId] = useState<number | null>(null)
  const [openCSVModal, setopenCSVModal] = useState(false)
  const [openRegForm, setOpenRegForm] = useState(false)
  const { setFirms, setFilteredFirms, filteredFirms, firms } = useContext(AdminContext)
  const selectedFirm = firms.find(d => d.id === selectedFirmId)!
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await Api.get('company/');
      if (data && data.length) {
        const firmData: (Data & { id: number })[] = data?.map((d: FirmData) => ({
          firmDetails: { name: d.name, account_number: d.account_number },
          billingInfo: { country: d.country, state: d.state, city: d.city, postal: d.postal, street_address: d.street_address, street_address_two: d.street_address_two },
          accessCoordinatorInfo: d.accesscoordinator_set,
          authorizedUserInfo: d.authorizedusers_set,
          id: d.id
        })).reverse()
        setFirms(firmData);
        setFilteredFirms(firmData);
      }
      setLoading(false)
    })()
  }, [])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const result = firms.filter(d => d.firmDetails.name.toLowerCase().split(" ").some(n => n.startsWith(value)));

    setFilteredFirms(result)
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
        loading={loading}
        data={filteredFirms.map(d => ({
          name: d.firmDetails.name,
          account: d.firmDetails.account_number,
          id: d.id
        }))}
        onClick={id => setSelectedFirmId(id)}
      />
      <Outlet />
    </DashboardWrapper>
  )
}

export default Firms
