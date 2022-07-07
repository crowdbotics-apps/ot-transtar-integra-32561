import React, { useState, ChangeEvent } from "react"
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
const sampleData = [
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 1
  },
  {
    full_name: "John Doe",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 2
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 3
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 4
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 5
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 6
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 7
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 8
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 9
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 10
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 11
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 12
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 1
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 2
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 3
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 4
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 5
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 6
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 7
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 8
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 9
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 10
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 11
  },
  {
    full_name: "John Dawanson",
    title: "Mr",
    sector: "N/A",
    phone: "+123456789",
    email: "johndoe@gmail.com",
    id: 12
  }
]
const Users = (props: Props) => {
  const [css] = useStyletron()
  const [data, setData] = useState(sampleData);
  const [filteredData, setFilteredData] = useState(sampleData);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const result = data.filter(d => d.full_name.toLowerCase().split(" ").some(n => n.startsWith(value)));
    setFilteredData(result)
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
        >
          Add new user
        </StyledButton>
      </Header>
      <StyledInput style={{ width: "50%" }} type="text" placeholder="Search" onChange={handleSearch} />
      {addSpace("vert", "30px")}
      <Table data={filteredData} />
    </DashboardWrapper>
  )
}

export default Users
