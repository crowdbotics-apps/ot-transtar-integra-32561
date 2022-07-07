import React, { useState, ChangeEvent, useContext } from "react"
import { DashboardWrapper } from "../../Dashboard/Dashboard.style"
import {
  StyledButton,
  StyledInput,
  addSpace
} from "@components"
import Header from "../../Header"
import { useStyletron } from "baseui"
import Table from "./Table"
import { Outlet, useNavigate } from 'react-router-dom'
import { AdminContext } from '../../../../context/AdminContext'
type Props = {}

const Users = (props: Props) => {
  const navigate = useNavigate()
  const [css] = useStyletron()
  const { users, setFilteredUsers } = useContext(AdminContext)
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const result = users.filter(d => d.full_name.toLowerCase().split(" ").some(n => n.startsWith(value)));
    setFilteredUsers(result)
  }
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
          onClick={() => navigate('new')}
        >
          Add new user
        </StyledButton>
      </Header>
      <StyledInput style={{ width: "50%" }} type="text" placeholder="Search" onChange={handleSearch} />
      {addSpace("vert", "30px")}
      <Table />
      <Outlet />
    </DashboardWrapper>
  )
}

export default Users
