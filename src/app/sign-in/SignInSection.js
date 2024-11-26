'use client';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import Google from '@/Images/SignUp/google-icon.svg';
import Facebook from '@/Images/SignUp/facebook-icon.svg';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SanitizeInputs from '@/SanitizingInputs/SanitizeInputs';
import { ValidateNumberOrEmailInput } from '../sign-up/SignUpSection';
import SignInApi from '@/apis/SignInApi';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function SignInSection()
{
    let[numberOrEmail,setNumberEmail]=useState('');
    let[password,setpassword]=useState('');
    let[invalidEmailOrPhonenumber,setInvalidEmailOrPhonenumber]=useState(false);


    let router=useRouter();


    function handleEmailOrNumber(e)
    {
        let value=e.target.value;
        let sanitizedValue=SanitizeInputs(value);
        setNumberEmail(sanitizedValue);

    }

    function handlePassword(e)
    {
        let value=e.target.value;
        let sanitizedValue=SanitizeInputs(value);
        setpassword(sanitizedValue);

    }
    function handleProceed()
    {
        let number=ValidateNumberOrEmailInput(numberOrEmail);

        //if someone wants to submit without filling values
        setInvalidEmailOrPhonenumber(numberOrEmail.length<1 || password.length<8);

        if(numberOrEmail.length<1 || password.length<8)
        {
            return;
        }
        let payloadEmailOrNumber=numberOrEmail
        if(number=='phonenumber')
        {
            payloadEmailOrNumber='+91'+numberOrEmail;
        }

        let payloadObj={
            "login_value":payloadEmailOrNumber,
            "password":password         
        }
        SignInApi(payloadObj)
        .then((response)=>{
            if('access_token' in response)
            {
                router.push('/homepage');
            }
        })
    }


    return(
        <>
        <section className={"flex justify-center h-screen w-full background-custom-grey100   "+plus_jakarta_sans.className}>
            <div className="page-center-parent-container  small-border custom-border-grey600 relative">
                <div className="flex flex-col px-6 pt-2 pb-10 background-custom-grey100 gap-8 h-full pb-20">
                    <div className="flex justify-center  ">
                        <div className="w-[49px] border-2 border-custom-grey100 "></div>
                    </div>
                    <div className="flex flex-col gap-6 ">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <h3 className="heading-h3 custom-text-grey900 font-semibold ">Let’s get started!</h3>
                                <p className="custom-text-grey700 body">Enter your phone number or email. We will send you a confirmation code there</p>
                            </div>
                            <div className="flex flex-col gap-6  ">
                                <div className="flex flex-col gap-4 ">
                                     <div className="flex flex-col gap-1.5">
                                        <div className="body-sm-bold custom-text-grey900">Email / Phone Number</div>
                                        <input type="text" name="email" value={numberOrEmail} className='w-full border border-custom-grey300 outline-none py-3.5 px-5 ' onChange={handleEmailOrNumber}/>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <div className="body-sm-bold custom-text-grey900">Password</div>
                                        <input type="password" name="password" value={password} className='w-full border border-custom-grey300 outline-none py-3.5 px-5 ' onChange={handlePassword}/>
                                    </div>
                                    <Link href='/reset-password' className='body-bold custom-text-grey800 underline pb-2.5'>Forgot Password?</Link>

                                </div>
                                <div className="flex flex-col gap-3 items-center">
                                    {invalidEmailOrPhonenumber&&<span className='body-sm custom-text-alert'>Please Enter Valid Inputs</span>}
                                    <div className="py-4 px-7 w-full bg-black shadow-sm custom-text-white all-caps-12 text-center cursor-pointer " onClick={handleProceed}>Proceed</div>
                                    <div className="flex gap-2 justify-center ">
                                        <div className="custom-text-grey700 body">New user?</div>
                                        <Link href='/' className='body-bold custom-text-grey800 underline pb-2.5'>Sign up</Link>
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
                                    <div className="flex justify-center background-custom-white items-center gap-2 py-3 px-5 border rounded-sm cursor-pointer hover:shadow-xl duration-200" >
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
        </section>
        </>
    )
}

export default SignInSection;