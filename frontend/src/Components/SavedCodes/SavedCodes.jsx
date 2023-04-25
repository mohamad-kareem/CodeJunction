import React,{useState,useEffect} from 'react'
import "./savedcodes.css"
import axios from 'axios'
const SavedCodes = () => {

    const [codes, setCodes] = useState([]);

    useEffect(() => {
      const fetchCodes = async () => {
        const response = await axios.get('http://localhost:8000/usercodes', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setCodes(response.data.codes);
      };
      fetchCodes();
    }, []);
  return (
    <>
    {codes.map((code) => (
      <div className="flex-box" key={code._id}>
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
