import React from "react"
import { AdminSidebar } from "../../../components/Sidebar/Sidebar"
import { useStyletron } from "baseui"
import { StyledDarkParagraphText, StyledHeaderText } from "../../../components"
import { useRoutes, Routes, Route, Outlet } from "react-router-dom"
type Props = {
  showBack: boolean
}

const Dashboard = () => {
  const [css] = useStyletron()
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <AdminSidebar />
      <Outlet />
    </div>
  )
}
export default Dashboard
