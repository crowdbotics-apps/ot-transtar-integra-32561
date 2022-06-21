import { useEffect } from 'react';
import { createContext, Dispatch, SetStateAction, FC, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom'
export interface INotification{ id: number, title: string, message: string, read: boolean, time: string }

interface Notifications {
    notifications: INotification[],
    setNotifications: Dispatch<SetStateAction<INotification[]>>,
    getNotifications: (id: number) => INotification,
    deleteNotification: (id: number) => void,
    markAsRead: (id: number) => void,
    markAllAsRead: () => void,
    readNotifications: INotification[],
    unreadNotifications: INotification[],
}
const dummyNotifications = [
  { time: '09:15 PM', id: 1, message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit', title: "Hello I am a notification", read: true },
  { time: '09:15 PM', id: 2, message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit', title: "Hello I am a notification", read: true },
  { time: '09:15 PM', id: 3, message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit', title: "This is your notification number 1", read: false },
  { time: '09:15 PM', id: 4, message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit', title: "Hello I am a notification", read: true },
  { time: '09:15 PM', id: 5, message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit', title: "Hello I am a notification", read: false },
  { time: '09:15 PM', id: 6, message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit', title: "Hello I am a notification", read: true },
  { time: '09:15 PM', id: 7, message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit', title: "Hello I am a notification", read: true },
  { time: '09:15 PM', id: 8, message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit', title: "Hello I am a notification", read: true },
  { time: '09:15 PM', id: 9, message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit', title: "Hello I am a notification", read: false },
  { time: '09:15 PM', id: 10, message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit', title: "Hello I am a notification", read: false },
]
export const NotificationsContext = createContext({} as Notifications)

const NotificationsProvider: FC<{children: ReactNode}> = ({children}) => {
    const [notifications, setNotifications] = useState(dummyNotifications);
    const [readNotifications, setReadNotifications] = useState([]);
    const [unreadNotifications, setUnreadNotifications] = useState([]);

    useEffect(() => {
setReadNotifications(notifications.filter(n => n.read))
setUnreadNotifications(notifications.filter(n => !n.read))
    }, [notifications])
    const navigate = useNavigate()

    const getNotifications = (id: number) => notifications.find(not => not.id === id)

    const deleteNotification = (id: number) => {
        const newNotifications = notifications.filter(not => not.id !== id);
        setNotifications(newNotifications);
    }
    const markAsRead = (id: number) => {
        const notificationsCopy = [...notifications]
        const index = notificationsCopy.findIndex(not => not.id === id);
        notificationsCopy[index] = { ...notificationsCopy[index], read: true };
        setTimeout(() =>setNotifications(notificationsCopy), 1000)
        console.log('done', id);
    }

    const markAllAsRead = () => {
setTimeout(() =>setNotifications(notifications.map(notification => ({...notification, read: true}))), 1000)
    }

    return <NotificationsContext.Provider value={{notifications, setNotifications, getNotifications, deleteNotification, markAllAsRead, markAsRead, readNotifications, unreadNotifications}}>{ children}</NotificationsContext.Provider>
}

export default NotificationsProvider