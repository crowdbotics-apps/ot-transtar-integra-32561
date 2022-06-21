import React, { useContext } from "react"
import Header from "../../Header"
import { NotificationsContext } from "../../../../context/NotificationsContext"
import { DashboardWrapper } from "../Dashboard.style"
import {
  StyledHeaderText,
  StyledDarkParagraphText,
  addSpace
} from "../../../../components/index"
import { useStyletron } from "baseui"
import { useNavigate, Outlet } from "react-router"
import Notification from "./Notification/Notification"
type Props = {}

const dummyNotifications = [
  { id: 1, message: "Hello I am a notification", read: true },
  { id: 2, message: "Hello I am a notification", read: true },
  { id: 3, message: "This is your notification number 1", read: false },
  { id: 4, message: "Hello I am a notification", read: true },
  { id: 5, message: "Hello I am a notification", read: false },
  { id: 6, message: "Hello I am a notification", read: true },
  { id: 7, message: "Hello I am a notification", read: true }
]
const NotificationCard = ({
  data,
  onClick
}: {
  data: Record<string, any>,
  onClick: () => void
}) => {
  const [css] = useStyletron()

  const { markAsRead, deleteNotification } = useContext(NotificationsContext)
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "20px 0",
        borderBottom: "1px solid #D1D0D0"
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "30px",
          cursor: "pointer"
        })}
        onClick={() => {
          console.log("clicked")
          onClick()
        }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="50" fill="#EFEFEF" />
          <path
            d="M26.75 19.5781V14H18.9375C18.418 14 18 14.4389 18 14.9844V34.0156C18 34.5611 18.418 35 18.9375 35H32.0625C32.582 35 33 34.5611 33 34.0156V20.5625H27.6875C27.1719 20.5625 26.75 20.1195 26.75 19.5781ZM29.25 29.2578C29.25 29.5285 29.0391 29.75 28.7812 29.75H22.2188C21.9609 29.75 21.75 29.5285 21.75 29.2578V28.9297C21.75 28.659 21.9609 28.4375 22.2188 28.4375H28.7812C29.0391 28.4375 29.25 28.659 29.25 28.9297V29.2578ZM29.25 26.6328C29.25 26.9035 29.0391 27.125 28.7812 27.125H22.2188C21.9609 27.125 21.75 26.9035 21.75 26.6328V26.3047C21.75 26.034 21.9609 25.8125 22.2188 25.8125H28.7812C29.0391 25.8125 29.25 26.034 29.25 26.3047V26.6328ZM29.25 23.6797V24.0078C29.25 24.2785 29.0391 24.5 28.7812 24.5H22.2188C21.9609 24.5 21.75 24.2785 21.75 24.0078V23.6797C21.75 23.409 21.9609 23.1875 22.2188 23.1875H28.7812C29.0391 23.1875 29.25 23.409 29.25 23.6797ZM33 18.9998V19.25H28V14H28.2383C28.4883 14 28.7266 14.1025 28.9023 14.2871L32.7266 18.3066C32.9023 18.4912 33 18.7414 33 18.9998Z"
            fill="black"
          />
        </svg>

        <StyledDarkParagraphText size="14px">
          {data.message}
        </StyledDarkParagraphText>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "10px",
          alignItems: "flex-end"
        }}
      >
        <StyledDarkParagraphText color="#818080" size="12px">
          10:15 PM
        </StyledDarkParagraphText>
        {data.read ? (
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => deleteNotification(data.id)}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M1 3.80005H2.4H13.6"
              stroke="#0E294B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.50039 3.8V2.4C4.50039 2.0287 4.64789 1.6726 4.91044 1.41005C5.17299 1.1475 5.52909 1 5.90039 1H8.70039C9.07169 1 9.42779 1.1475 9.69034 1.41005C9.95289 1.6726 10.1004 2.0287 10.1004 2.4V3.8M12.2004 3.8V13.6C12.2004 13.9713 12.0529 14.3274 11.7903 14.5899C11.5278 14.8525 11.1717 15 10.8004 15H3.80039C3.42909 15 3.07299 14.8525 2.81044 14.5899C2.54789 14.3274 2.40039 13.9713 2.40039 13.6V3.8H12.2004Z"
              stroke="#0E294B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.90039 7.30005V11.5"
              stroke="#0E294B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.7002 7.30005V11.5"
              stroke="#0E294B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <input
            type="checkbox"
            style={{ width: "20px", height: "20px " }}
            onChange={() => markAsRead(data.id)}
            checked={data.read}
          />
        )}
      </div>
    </div>
  )
}

const Notifications = (props: Props) => {
  const [css] = useStyletron()
  const { markAllAsRead, readNotifications, unreadNotifications } =
    useContext(NotificationsContext)
  const navigate = useNavigate()
  return (
    <DashboardWrapper>
      <Header> </Header>

      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        })}
      >
        <StyledDarkParagraphText size="22px" weight={500}>
          Notifications
        </StyledDarkParagraphText>

        {!!unreadNotifications.length && (
          <div
            className={css({
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              textTransform: "uppercase"
            })}
            onClick={markAllAsRead}
          >
            <StyledDarkParagraphText size="14px">
              MARK ALL AS READ
            </StyledDarkParagraphText>
            <input type="checkbox" style={{ width: "20px", height: "20px " }} />
          </div>
        )}
      </div>
      {addSpace("vert", "50px")}
      <div>
        {!!unreadNotifications.length && (
          <div
            className={css({
              display: "flex",
              gap: "20px",
              alignItems: "center"
            })}
          >
            <StyledDarkParagraphText size="18px" weight={500}>
              New
            </StyledDarkParagraphText>
            <span
              style={{
                width: 20,
                height: 20,
                backgroundColor: "red",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                borderRadius: "50%",
                fontSize: "12px"
              }}
            >
              {unreadNotifications.length}
            </span>
          </div>
        )}
        {unreadNotifications.map(notification => (
          <>
            <NotificationCard
              data={notification}
              onClick={() => navigate(`${notification.id}`)}
            />
          </>
        ))}
      </div>
      {addSpace("vert", "50px")}

      {!!readNotifications.length && (
        <div>
          Reviewed
          {readNotifications.map(notification => (
            <>
              <NotificationCard
                data={notification}
                onClick={() => {
                  navigate(`${notification.id}`)
                  console.log("clicked", notification.id)
                }}
              />
            </>
          ))}
        </div>
      )}
      <Outlet />
    </DashboardWrapper>
  )
}

export default Notifications
