import React ,{useState}from 'react'
import { useParams } from "react-router-dom";
import InputForm from '../InputForm/InputForm';
import "./createfolder.css"
import ButtonComponent from "../Button/ButtonComponent";
import axios from "axios";

const CreateFolder = ({HideFolder}) => {

  const { roomId } = useParams(); 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateFolder = async () => {
    try {
      const token = localStorage.getItem("token");
      const language = localStorage.getItem("language");
      const response = await axios.post(
        "http://localhost:8000/createfolder/",
        { title, description, roomId, language }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      HideFolder();
      return response.data;
    }catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='Create-code-folder-wrapper'>
      <div className='sign-in-up-container'>
        <div className="folder-inner-form">
        <h2 className='folder-header'>Create Folder</h2>
            <InputForm
              label="Title"
              name="Title"
              type='text'
              color=' #0F0A36'
              onChange={(e) => setTitle(e.target.value)}
            />
              <InputForm
              label="Description"
              name="Description"
              color=' #0F0A36'
              isTextarea={true}
              height={150}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="folder-buttom">
              <ButtonComponent
                color="yellow"
                size="15px"
                width="100px"
                className="create-folder"
                onClick={handleCreateFolder}
              >
                Create
              </ButtonComponent>
              <ButtonComponent
                color="yellow"
                size="15px"
                width="100px"
                marginLeft={20}
                onClick={HideFolder}
              >
                Close
              </ButtonComponent>
            </div>
        </div>
      </div>  
    </div>
  );
};

export default CreateFolder
