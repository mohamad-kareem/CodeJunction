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
        console.log("here is the code",response.data.user)
      };
      fetchCodes();
    }, []);
    
    const handleCodeClick = (roomId, username, code) => {
      navigate(`/editor/${roomId}`, {
        state: {
          username,
          code,
        },
      });
    };
    const handleRemoveCode = async (codeId) => {
    try {
      await axios.delete(`http://localhost:8000/code/${codeId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Remove the code from the state
      setCodes((prevCodes) => {
        if (Array.isArray(prevCodes)) {
          return prevCodes.filter((code) => code._id !== codeId);
        }
        return [];
      });
      console.log("success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    {codes?.user?.codes.map((code) => (
      <div className="flex-box" >
        <div className="inner-box"key={code._id} onClick={() => handleCodeClick(code.roomId, codes.user.username, code.code)}>
          <div className="code-title">{code.title}</div>
          <div className="code-description">{code.description}</div>
        </div>
        <div className="code-delete" onClick={() => handleRemoveCode(code._id)}>remove</div>
      </div>
    ))}
    </>
  )
}

export default SavedCodes
