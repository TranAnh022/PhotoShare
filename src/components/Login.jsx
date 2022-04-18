import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import shareVideo from '../asset/share.mp4'
import logo from '../asset/logowhite.png'
const Login = () => {

  const responseGoogle = (response) => {
    
  }
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />

        <div className='absolute flex flex-col justify-center items-center bottom-0 top-0 left-0 right-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="">
            <GoogleLogin
              clientId=''
              render={(renderProps) => (
                <button
                  type='button'
                  className='bg-mainColor flex justify-center items-center rounded-lg p-3 cursor-pointer outline-none'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className='mr-4'/> Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Login