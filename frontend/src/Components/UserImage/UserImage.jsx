import React from 'react'
import emptyImage from '../../assets/empty-pic.jpg';
import { storage } from '../../firebase';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import {v4 as uuidV4} from "uuid";
import "./userimage.css"
import React, { useState,useEffect } from 'react';
import axios from 'axios';
const UserImage = () => {

    const [url, setUrl] = useState(null);
    const [image, setImage] = useState(emptyImage);
     
    useEffect(() => {

        // Fetch user's imageUrl from the database when the component mounts
        axios.get('http://127.0.0.1:8000/getUserImage', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then(res => {
          setImage(res.data.imageUrl || emptyImage);
          setUrl(res.data.imageUrl);
          
        })
        .catch(err => console.log(err));
      }, []);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            const imageRef = ref(storage, `${uuidV4()}`);
            uploadBytes(imageRef, e.target.files[0])
              .then(() => {
                getDownloadURL(imageRef)
                  .then((url) => {
                    setUrl(url);
                    setImage(url);
                    console.log(url);
                    axios
                    .put(
                      `http://127.0.0.1:8000/updateUserImage`,
                      { imageUrl: url },
                      {headers: {
                          Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                      })
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
              })
              })
            }
    }
  return (
    <>
    <label htmlFor="image-input">
           <img src={url || image} className={`pic ${className}`} alt="empty-pic" />
    </label>
         <input
           id="image-input"
           type="file"
           onChange={handleImageChange}
           style={{ display: 'none' }}
         />
 </>
  )
}

export default UserImage
