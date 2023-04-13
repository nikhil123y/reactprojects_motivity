import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../App'
import ComponentF from './ComponentF'

const ComponentE = () => {

    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
  return (
    <>
   {user} -{channel}
    </>
  )
}

export default ComponentE