import React from "react"
import Sidebar from "../../../components/Sidebar/Sidebar"
import { useStyletron } from "baseui"
import { StyledHeaderText } from "../../../components"
import { useRoutes, Routes, Route, Outlet } from "react-router-dom"
type Props = {}

export const Home = (props: Props) => {
  const [css] = useStyletron()
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Sidebar />
      <div
        className={css({
          width: "calc(100vw - 300px)",
          borderBottom: "1px solid #0E294B",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
          position: "fixed",
          top: 0,
          left: "300px",
          padding: "0 50px"
        })}
      >
        <StyledHeaderText color="#0E294B" weight={600} size="28px">
          BROKER GATEWAY
        </StyledHeaderText>
        <div
          className={css({
            display: "flex",
            flexFlow: "column",
            gap: "15px"
          })}
        >
          <StyledHeaderText size="14px" weight={600} color="#0E294B">
            Haywood Securities Inc{" "}
          </StyledHeaderText>
          <StyledHeaderText size="14px" weight={400} color="#0E294B">
            lscotland@haywood.com
          </StyledHeaderText>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
