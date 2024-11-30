'use client';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import Google from '@/Images/SignUp/google-icon.svg';
import Facebook from '@/Images/SignUp/facebook-icon.svg';
import { useEffect, useState } from 'react';
import OtpSection from '../otp/OtpSection';
import OtpInputs from '@/Components/OtpInputs';
import SignUpByEmail from './SignUpByEmail';
import PasswordValidationBoxes, { verifyPasswordIsMatchingToCriteriaWhileTyping } from '@/Components/PasswordValidation';
import SanitizeInputs from '@/SanitizingInputs/SanitizeInputs';
import UserRegisterApi from '@/apis/UserRegistrationApi';
import { useRouter } from 'next/navigation';
import signInWithGoogle from '@/apis/SIgnInWithGoogle';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function SignUpSection()
{

    let[numberOrEmail,setNumberEmail]=useState('');
    let[password,setPassword]=useState('');
    let[sessionid,setSessionId]=useState('');
    let[screenView,setScreenView]=useState('section');

    let[alreadyRegistered,setAlreadyRegistered]=useState(false);

    //if input number or empty is empty then
    let[emailOrNumberInvalid,setEmailOrNumberInvalid]=useState(false);
    let[invalidPassword,setInvalidPassword]=useState(false);

    //if mobile input number is wrong
    let[invalidMobileNumber,setInvalidMobileNumber]=useState(false);
    //if email input is wrong
    let[invalidEmail,setInvalidEmail]=useState(false);


    let router=useRouter();

    useEffect(()=>{
        ValidateNumberOrEmailInputWhileTyping();  //to show errors of field when user input this field
    },[numberOrEmail])

    useEffect(()=>{
        let isPasswordValid=verifyPasswordIsMatchingToCriteriaWhileTyping(password)
        setInvalidPassword(isPasswordValid);
    },[password])

    //handle email or phone input
    function handleEmailOrPhoneInput(e)
    {
        let value=e.target.value;
        let sanitizedValue=SanitizeInputs(value);       //sanitize value to prevent before use
        setNumberEmail(sanitizedValue);
        setEmailOrNumberInvalid(false);                 //to reset the emailOrNumberInvalid which is validate after submit button
    }

    //handle password input
    function handlePasswordInput(e)
    {
        let value=e.target.value;
        let sanitizedValue=SanitizeInputs(value);      //sanitize value to prevent before use
        setPassword(sanitizedValue);
    }

    function signUp()
    {
        // setOtpView(true);
        console.log('email or number ',numberOrEmail);
        console.log('password ',password);

        setEmailOrNumberInvalid(numberOrEmail.length<10);

        if(numberOrEmail.length<10 ||  invalidPassword)
        {

            setInvalidEmail(false);                 //if user try to proceed without filling inputs show only EmailOrNumberInvalid error 
            setInvalidMobileNumber(false);          //if user try to proceed without filling inputs show only EmailOrNumberInvalid error
            return;
        }

        let payloadLoginValue=numberOrEmail;
        //if user input a number then we have to add +91 at the start of that number so that why below statement is used
        let inputValueIsNumber=ValidateNumberOrEmailInput(numberOrEmail);
        if(inputValueIsNumber=='phonenumber')
        {
            payloadLoginValue='+91'+payloadLoginValue;
        }


        let payloadObj={
            'login_value':payloadLoginValue,
            "password":password
        }

        //user register api
        UserRegisterApi(payloadObj)
        .then((response)=>{
            console.log('api response :',response);

            //if user already excisted then it directly goes to the directly otp verification page
            if(response&&response.status==400&&response.message=="User already exists."&&inputValueIsNumber=='phonenumber')
            {
                setAlreadyRegistered(true);
                setScreenView('otp');
            }
             if(response&&response.status==400&&response.message=="User already exists."&&inputValueIsNumber=='email')
            {
                setAlreadyRegistered(true);
                setScreenView('email');
            }
            if (response&&response.status==400&&response.message=='User already verified.')
            {
                router.push('/already-verified')
            }

            if(response&&"otp_response" in response)
            {
               setSessionId(response.otp_response[0].session_id);
               setScreenView('otp');
            }

            if(response&&"mail_response" in response&& response.mail_response.message==="Verification mail send successfully!")
            {
                setAlreadyRegistered(true);
                setScreenView('email');
            }
            
        })
        .catch((error)=>{
            console.error(error);
        })
        
        // setEmailSignUp(true);
    }


    //checking input is number or email while typing
    function ValidateNumberOrEmailInputWhileTyping()
    {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  //email validation
        const numberRegex = /^\d+$/; // Only digits

        setInvalidMobileNumber(numberRegex.test(numberOrEmail));
        setInvalidEmail(!numberRegex.test(numberOrEmail));

    }

    function handleSignInWithGoogle()
    {
        router.push('https://payppy.in/auth/google-login');
    }
   
    return(
        <>
         {screenView==='section'&&  <section className={"flex justify-center min-h-screen w-full background-custom-grey50    "+plus_jakarta_sans.className}>
            <div className="page-center-parent-container  small-border custom-border-grey600 overflow-y-scroll overflow-scrollbar-hidden ">
                <div className="flex flex-col px-6 pt-2 pb-10 background-custom-grey50 gap-8 h-full ">
                    <div className="flex justify-center  ">
                        <div className="w-[49px] border-2 border-custom-grey100 "></div>
                    </div>
                    <div className="flex flex-col gap-6 pb-20">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <h3 className="heading-h3 custom-text-grey900 font-semibold ">Let’s get started!</h3>
                                <p className="custom-text-grey700 body">Enter your phone number or email. We will send you a confirmation code there</p>
                            </div>
                            <div className="flex flex-col gap-6  ">
                                <div className="flex flex-col gap-4 ">
                                    <div className="flex flex-col gap-1.5">
                                        <div className="body-sm-bold custom-text-grey900">Email / Phone Number</div>
                                        <input type="text" name="email" value={numberOrEmail} className='w-full border border-custom-grey300 outline-none py-3.5 px-5 ' onChange={handleEmailOrPhoneInput}/>
                                        {!invalidEmail&&!invalidMobileNumber&&emailOrNumberInvalid&&<span className="custom-text-alert body-sm">Please Enter Valid Email Or Phone Number</span>}
                                        {invalidEmail&&numberOrEmail.length>1&&numberOrEmail.length<10&&!emailOrNumberInvalid&&<span className="custom-text-alert body-sm">Please Enter Valid Email like abc@gmail.com</span>}
                                        {invalidMobileNumber&&numberOrEmail.length>1&&numberOrEmail.length<10&&!emailOrNumberInvalid&&<span className="custom-text-alert body-sm">Please Enter Phone Number like 98xxxxxxxx</span>}
                                        
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <div className="body-sm-bold custom-text-grey900">Password</div>
                                        <input type="password" name="password" value={password} className='w-full border border-custom-grey300 outline-none py-3.5 px-5 ' onChange={handlePasswordInput}/>
                                        {invalidPassword&&password.length>0&&<span className="custom-text-alert body-sm">password must match with below criteria</span>}
                                    </div>
                                   <PasswordValidationBoxes password={password} />
                                </div>
                                <div className="flex flex-col gap-3 items-center">
                                    <div className="py-4 px-7 w-full bg-black shadow-sm custom-text-white all-caps-12 text-center cursor-pointer" onClick={signUp}>Proceed</div>
                                    <div className="flex gap-2 justify-center ">
                                        <div className="custom-text-grey700 body">Already have an account? </div>
                                        <Link href='/sign-in' className='body-bold custom-text-grey800 underline pb-2.5'>Log in</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-2 items-center">
                                    <div className="border border-custom-grey200 grow"></div>
                                    <div className="custom-text-grey900 body">or</div>
                                    <div className="border border-custom-grey200 grow"></div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-center background-custom-white items-center gap-2 py-3 px-5 border rounded-sm cursor-pointer hover:shadow-xl" onClick={handleSignInWithGoogle}>
                                        <Image src={Google} width={20} height={20} alt='img' quality={100} />
                                        <div className="body-sm custom-text-grey900">Continue with Google</div>
                                    </div>
                                    <div className="flex justify-center background-custom-white items-center gap-2 py-3 px-5 border rounded-sm">
                                        <Image src={Facebook} width={20} height={20} alt='img' quality={100} />
                                        <div className="body-sm custom-text-grey900">Continue with Facebook</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>}
        { screenView==='otp'&& <OtpInputs phone_number={numberOrEmail} sessionId={sessionid} setScreenView={setScreenView} alreadyRegistered={alreadyRegistered}/>}
        {screenView==='email'&&<SignUpByEmail email={numberOrEmail} setScreenView={setScreenView} alreadyRegistered={alreadyRegistered}/>}  
    
        </>
    )
}

export default SignUpSection;


 //checking input is number or email when submiting for attaching +91 for mobile number scenario
 function ValidateNumberOrEmailInput(value)
 {
     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  //email validation
     const numberRegex = /^\d+$/; // Only digits

    if(emailRegex.test(value))
    {
        return 'email';
    }
    else{
        return 'phonenumber';
    }

 }
export {ValidateNumberOrEmailInput};