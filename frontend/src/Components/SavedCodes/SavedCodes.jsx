import React,{useState,useEffect} from 'react'
import "./savedcodes.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs ,faPhp,faPython} from '@fortawesome/free-brands-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
const SavedCodes = () => {

    const [codes, setCodes] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
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
      setIsUpdated(false);
    }, [isUpdated]);
    
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
      setIsUpdated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const languageIcons = {
    'python': {
      icon: faPython,
      className: 'python-icon',
    },
    'php': {
      icon: faPhp,
      className: 'php-icon',
    },
    'ruby': {
      icon: faGem,
      className: 'ruby-icon',
    },
    'javascript': {
      icon: faJs,
      className: 'javascript-icon',
    },
  };
  
  const getIconForLanguage = (language) => {
    return languageIcons[language] || {icon: faJs} ; 
  };
  return (
    <>
    {codes?.user?.codes.map((code) => (
      <div className="flex-box"key={code._id} onClick={() => handleCodeClick(code.roomId, codes.user.username, code.code)} >
        <div className="inner-box">
          <div className='top-flex-box'>
            <div className="code-title">
              {code.title}
            </div>
            <div className="code-delete" onClick={(e) => {
            e.stopPropagation()
            handleRemoveCode(code._id)}}>< ClearIcon fontSize='10px' />
            </div>
          </div>
          <div className="code-description">
            {code.description}
          </div>
        </div>
        <div className="buttom-flex-container">
            <FontAwesomeIcon icon={getIconForLanguage(code.language).icon} className={getIconForLanguage(code.language).className} />
        </div>
      </div>
        
    ))}
    </>
  )
}

export default SavedCodes
