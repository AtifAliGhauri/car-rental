import React,{Fragment} from 'react'
import { EmiratesHeader } from '../Header/EmiratesHeader'
import EmiratesFooter from '../Footer/EmiratesFooter'
import Routers from '../../routers/Routers'
import { Outlet } from 'react-router-dom';
// import App from '../../App'


const EmiratesLayout = () => {
  return (
  <Fragment>
    <EmiratesHeader />
    <div>
      <Outlet />
    </div>
    <EmiratesFooter />
  </Fragment>
  )
}

export default EmiratesLayout