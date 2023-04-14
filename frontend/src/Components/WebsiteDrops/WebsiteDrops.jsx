import React from 'react'
import "./websitedrops.css"
import InnerDrop from './InnerDrop';
const WebsiteDrops = () => {

 

  return (
     <div className="drop-wrapper ">
   <InnerDrop  Heading="01" content="Collaborate and improve code in real-time with live sharing and pair programming."/>
   <InnerDrop  Heading="02" content="Automatically analyze code quality, performance, and security with integrated tools."/>
   <InnerDrop  Heading="03" content="Add fun and motivation to coding with gamification elements leaderboards."/>
   <InnerDrop  Heading="04" content="Enhance your coding skills and learn from other developers with our code review platform."/>
     </div>
  )
}

export default WebsiteDrops
