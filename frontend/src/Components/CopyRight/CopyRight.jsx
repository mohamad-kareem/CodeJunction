import React, {useContext} from 'react'
import "./copyright.css"
import { UserContext } from '../../Context/Context';
import { CopyRightsTranslation } from '../Languages/Lang';
const CopyRights = ({marginTop,paddingBottom}) => {

  const userlang=useContext(UserContext)
  const lan = CopyRightsTranslation[userlang.language]
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyrights" style={{marginTop,paddingBottom}}>
      <p>© {currentYear} {lan.text}</p>
    </div>  )
}

export default CopyRights
