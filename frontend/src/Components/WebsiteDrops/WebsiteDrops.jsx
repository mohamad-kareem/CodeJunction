import React , {useContext}from 'react'
import { UserContext } from '../../Context/Context';
import { WaterDrops } from '../Languages/Lang';
import "./websitedrops.css"
import InnerDrop from './InnerDrop';

const WebsiteDrops = () => {

  const userlang=useContext(UserContext)
  const lan = WaterDrops[userlang.language]

  return (
     <div className="drop-wrapper ">
      <InnerDrop  Heading="01" content={lan.drop1}/>
      <InnerDrop  Heading="02" content={lan.drop2}/>
      <InnerDrop  Heading="03" content={lan.drop3}/>
      <InnerDrop  Heading="04" content={lan.drop4}/>
     </div>
  )
}

export default WebsiteDrops
