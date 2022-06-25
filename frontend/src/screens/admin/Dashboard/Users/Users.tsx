import React, { useContext } from "react"
import { DashboardWrapper } from "../../Dashboard/Dashboard.style"
import {
  StyledButton,
  StyledInput,
  addSpace
} from "../../../../components"
import Header from "../../Header"
import { useStyletron } from "baseui"
import Table from "./Table"
type Props = {}

const Users = (props: Props) => {
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
      <StyledInput style={{ width: "50%" }} type="text" placeholder="Search" />
      {addSpace("vert", "30px")}
      <Table />
    </DashboardWrapper>
  )
}

export default Users
