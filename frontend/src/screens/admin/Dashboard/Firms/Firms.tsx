import React, { useContext } from "react"
import { DashboardWrapper } from "../../Dashboard/Dashboard.style"
import {
  StyledButton,
  StyledInput,
  StyledCustomSelect
} from "../../../../components"
import Header from "../../Header"
import { useStyletron } from "baseui"
import Table from "./Table"
type Props = {}

const Firms = (props: Props) => {
  const [css] = useStyletron()
  return (
    <DashboardWrapper style={{ paddingTop: "120px" }}>
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
        <StyledInput style={{ flex: 2 }} type="text" placeholder="Search" />
        <div style={{ flex: 1.2 }}>
          <StyledCustomSelect
            options={["Billing Information", "Registered Firms", "User Access"]}
            placeholder="Select One"
            onSelect={e => {}}
            name=""
          />
        </div>
        <StyledButton style={{ width: 260 }}>export</StyledButton>
      </div>
      <Table />
    </DashboardWrapper>
  )
}

export default Firms
