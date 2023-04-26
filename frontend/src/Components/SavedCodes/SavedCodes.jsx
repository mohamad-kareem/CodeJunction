import React,{useState,useEffect} from 'react'
import "./savedcodes.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const SavedCodes = () => {

    const [codes, setCodes] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
      const fetchCodes = async () => {
        const response = await axios.get('http://localhost:8000/usercodes', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setCodes(response.data);
        console.log(response.data.user)
      };
      fetchCodes();
    }, []);
  return (
    <>
    {codes?.user?.codes.map((code) => (
      <div className="flex-box" key={code._id}onClick={()=>{ 
        navigate(`/editor/${code.roomId}`,{
        state:{
            username:codes.user.username,
            code:code.code
        },
    }
    )}}>
        <div className="inner-box">
          <div className="code-title">{code.title}</div>
          <div className="code-description">{code.description}</div>
          <div className="code-delete">remove</div>
        </div>
      </div>
    ))}
    </>
  )
}

export default SavedCodes
