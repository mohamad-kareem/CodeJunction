import React from 'react'

const UserImage = () => {
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
