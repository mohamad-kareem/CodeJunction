import React from 'react'

const ForgetPassword = () => {


    const HandleSubmit=(e)=>{
        e.preventDefault();
        axios
          .post("http://127.0.0.1:8000/forgot-password",{ email: email }, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    };
    
  return (
    <>
        <Navbar/>
        <div className='wrapper'>
        <div className='image-container'>
            <img src={loginImage} alt='registration' />
        </div>
        <div className='sign-in-up-container'>
            <form className='inner-form'>
                <h2 className='header'>Sign In</h2>
                <InputForm
                    label="email address"
                    name="email"
                    value={email}
                    onChange={HandleEmailChange}
                    icon={faEnvelope}
                />
                <ButtonComponent color="yellow"size="15px" onClick={HandleSubmit}>Reset Password</ButtonComponent> 
            </form>
        </div>
        </div>
    </>
  )
}

export default ForgetPassword
