import React, { useState, useContext, useEffect } from "react"
import { NotificationsContext, INotification } from '../../../../../context/NotificationsContext'
import Header from "../../../Header"
import { addSpace, StyledButton, StyledDarkParagraphText } from "../../../../../components"
import { DashboardWrapper } from "../../Dashboard.style"
import { useStyletron } from 'baseui'
import { useParams, useNavigate} from 'react-router-dom'
type Props = {
  data: Record<string, any>
}

const Notification = () => {
    const [data, setData] = useState({} as INotification)
    const [css] = useStyletron();
    const navigate = useNavigate()
    const { getNotifications, deleteNotification, markAsRead } = useContext(NotificationsContext);
    const { notificationId } = useParams < { notificationId: string }>()
    useEffect(() => {
        const notification = getNotifications(+notificationId)
      if (!notification) {
        return navigate(-1);
      }
      markAsRead(notification.id)
        setData(notification)
    }, [])


  return (
    <DashboardWrapper>
      <Header showBack> </Header>

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
          </div>
          {addSpace('vert', '50px')}
          <div className={css({
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center'
          })}>
              <div className={css({ display: 'flex', gap: '20px', alignItems: 'center' })}>
                  <StyledDarkParagraphText size="18px" weight={500}>{data.title}</StyledDarkParagraphText>
                  <StyledDarkParagraphText color="#818080" size="12px">{data.time}</StyledDarkParagraphText>
              </div>
              <StyledButton small style={{ width: '160px' }} onClick={() => {
                  deleteNotification(+notificationId);
                  navigate(-1);

              }} >DELETE</StyledButton>
          </div>
          {addSpace('vert', '30px')}
          <StyledDarkParagraphText size="20px">{data.message}</StyledDarkParagraphText>
          

    </DashboardWrapper>
  )
}

export default Notification
