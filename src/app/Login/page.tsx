"use client"

import { useWixClient } from "@/hooks/useWixClient"
import { LoginState } from "@wix/sdk"
import { Cookie } from "next/font/google"
import Cookies from "js-cookie"
import { useState } from "react"
import { useRouter } from "next/navigation"

enum MODE {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION"
}
function LoginPage() {
  
  const wixClient =useWixClient()

  const isLoggedIn = wixClient.auth.loggedIn()
  console.log(isLoggedIn);
  
  const [mode, setMode] = useState(MODE.LOGIN)
  const [username, setUsername] = useState('')
  const [email, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [emailCode, setEmailCode] = useState("")
  const [isloading, setIsloading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  // const pathname = usePathname()
  const router =useRouter()
  const formtitle = mode===MODE.LOGIN ? "Log In" : mode===MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Reset " : "Verify Your Email"
  const buttonTitle = mode===MODE.LOGIN ? "Log In" : mode===MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Reset" : "Verify "

  const handleSubmit = async (e:React.FormEvent)=>{

      e.preventDefault();
      setIsloading(true)
      setError('')
      try {
        

    

        let response;
        switch(mode){
          case MODE.LOGIN:
            response = await wixClient.auth.login({
              email,
              password,
            });
            break;
          case MODE.REGISTER:
            response = await wixClient.auth.register({
              email,
              password,
              profile: { nickname: username },
            });
            break;
          case MODE.RESET_PASSWORD:
            response = await wixClient.auth.sendPasswordResetEmail(
              email,
              window.location.href
            );
            setMessage("Password reset email sent. Please check your e-mail.");
            break;
          case MODE.EMAIL_VERIFICATION:
            response = await wixClient.auth.processVerification({
              verificationCode: emailCode,
            });
            break;
          default:
            break;
        }
  
        switch (response?.loginState) {
          case LoginState.SUCCESS:
            setMessage("Successful! You are being redirected.");
            const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
              response.data.sessionToken!
            );
            Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
              expires: 2,
            });
            wixClient.auth.setTokens(tokens);
            router.push("/");
            break;
          case LoginState.FAILURE:
            if (
              response.errorCode === "invalidEmail" ||
              response.errorCode === "invalidPassword"
            ) {
              setError("Invalid email or password!");
            } else if (response.errorCode === "emailAlreadyExists") {
              setError("Email already exists!");
            } else if (response.errorCode === "resetPassword") {
              setError("You need to reset your password!");
            } else {
              setError("Something went wrong!");
            }
          case LoginState.EMAIL_VERIFICATION_REQUIRED:
            setMode(MODE.EMAIL_VERIFICATION);
          case LoginState.OWNER_APPROVAL_REQUIRED:
            setMessage("Your account is pending approval");
          default:
            break;
        }
      } catch (err) {
        console.log(err);
        setError("Something went wrong!");
      } finally {
        setIsloading(false);
      }
    };

  return (
    <div className="h-[calc(100vh-80px)] px-4  md:px-8 lg:px-16 vl:px-32 2xl:px-64 flex items-center justify-center ">
      <form action="" className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formtitle}</h1>
        {mode===MODE.REGISTER ?(
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700" >User Name</label>
            <input type="text" name="username" id="" placeholder="Shadha" onChange={e=>setUsername(e.target.value)} className="ring-2 ring-gray-300 rounded-md p-4  "/>
          </div>  
        ):null}
        {
          mode !==MODE.EMAIL_VERIFICATION ? (
            <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700">Email</label>
            <input type="email" name="email" id="" placeholder="Shadha@gmail.com"  className="ring-2 ring-gray-300 rounded-md p-4  "onChange={e=>setMail(e.target.value)}/>
          </div>  
          ) : 
         (
          <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-sm text-gray-700">Verification Code</label>
          <input type="text" name="emailcode" id="" placeholder="Code" onChange={e=>setEmailCode(e.target.value)} className="ring-2 ring-gray-300 rounded-md p-4  "/>
        </div>  
         )
        }
        {mode==MODE.LOGIN || mode==MODE.REGISTER ?(
           <div className="flex flex-col gap-2">
           <label htmlFor="" className="text-sm text-gray-700">Password</label>
           <input type="password" name="password" onChange={e=>setPassword(e.target.value)} id="" placeholder="Enter Your Password"  className="ring-2 ring-gray-300 rounded-md p-4  "/>
         </div> 
        ):null }
        {mode==MODE.LOGIN ? (
          <div className="text-sm underline cursor-pointer" onClick={()=>{setMode(MODE.RESET_PASSWORD)}}>Forgot Password?</div>
        ):null}
      <button className="bg-shadha text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed" disabled={isloading}>{isloading ? "Loading" : buttonTitle}</button>
      {error && (<div className="text-red-500">{error}</div>)}
      {mode==MODE.REGISTER ? (
        <div className="text-sm underline cursor-pointer" onClick={()=>{setMode(MODE.LOGIN)}}>Have an account? Login</div>
      ) : mode==MODE.LOGIN ? (
        <div className="text-sm underline cursor-pointer" onClick={()=>{setMode(MODE.REGISTER)}}>Don't have an account?  Register</div>
      ) : mode==MODE.RESET_PASSWORD ? (
        <div className="text-sm underline cursor-pointer" onClick={()=>{setMode(MODE.LOGIN)}}> Go Backto Login</div>
      ):null}
      </form>
     
    </div>
  )
}

export default LoginPage