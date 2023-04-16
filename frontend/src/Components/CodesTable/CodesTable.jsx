import React,{useState} from 'react'
import "./CodesTable.css"
import ButtonComponent from '../Button/ButtonComponent'
const CodesTable = ({code}) => {
    const [codes, setcodes] = useState([]);
  return (
<div className='table-wrapper'style={{display:code ? 'block' : 'none'}}>
      <div className="all-users">
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Language</td>
                </tr>
            </thead>
            <tbody>
            {codes.map(code => (
              <tr key={code.id}>
                <td>#{code.id}</td>
                <td>{code.title}</td>
                <td>{code.description}</td>
                <td>{code.language}</td>
                <td><ButtonComponent width='100px'>Download</ButtonComponent></td>
              </tr>
            ))}
            </tbody>
        </table>
      </div>
      <div></div>
    </div>
  )
}

export default CodesTable
