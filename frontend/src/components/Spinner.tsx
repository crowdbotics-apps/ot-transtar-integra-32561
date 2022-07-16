import Portal from './Portal';
import { PropagateLoader } from 'react-spinners'

export default function () {
    return <Portal>
        <div style={{ position: 'fixed', left: 0, top: 0, zIndex: 999, width: "100vw", height: '100vh', backgroundColor: 'rgba(0, 0, 0, .2)', display: 'grid', placeItems: 'center' }}>
            <PropagateLoader color={'rgb(14, 41, 75)'} />
        </div>
    </Portal>
}