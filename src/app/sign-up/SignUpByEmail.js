'use client';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import Arrow from '@/Images/Otp/arrow-icon.svg';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import ResendEmail from '@/apis/ResendEmail';


const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
    

function SignUpByEmail({email,setScreenView,alreadyRegistered})
{

    let[timer,setTimer]=useState(60);
    let[emailRegistered,setEmailRegistered]=useState(true);

    useEffect(()=>{
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1); // Update based on previous value
            }, 1000);
    
            return () => clearInterval(interval); // Cleanup on unmount or timer reset
        }
    },[timer])

    useEffect(()=>{
        if(alreadyRegistered==true)
        {
            handleResendEmail();
        }
    },[alreadyRegistered])

    //handleing resend email
    function handleResendEmail()
    {
        let payloadObj={
            "email":email
        }
        setEmailRegistered(false);
        ResendEmail(payloadObj)
        .then((response)=>{
            setEmailRegistered(true);
        })
    }
    function handleBackBtn()
    {
        setScreenView('section');
    }
    return(
        <>
        <section className={"flex justify-center h-screen w-full background-custom-grey100  overflow-hidden "+plus_jakarta_sans.className}>
            
            <div className="page-center-parent-container small-border custom-border-grey600 background-custom-white">
                
                <div className="flex flex-col px-6 pt-2 pb-10 background-custom-grey100 gap-8 h-screen ">
                    
                        <div className="flex flex-col gap-10 ">
                            <Image src={Arrow} width={36} height={36} alt='img' quality={100} onClick={handleBackBtn} />

                            <div className="flex flex-col gap-8">

                                <div className="flex flex-col gap-2">
                                    <h3 className="heading-h3 custom-text-grey900 ">We’ve sent a verification link to {email} </h3>
                                    <div className="body-sm custom-text-grey700">This helps us keep your account secure</div>
                                </div>

                               {emailRegistered&& <h5 className="heading-h5 custom-text-grey900">Check your mail and click on the link  to complete verification</h5>}

                                {timer > 0 ? <div className="custom-text-grey500 body-sm">Resend code in 00:{timer}sec</div> :
                                    <div className="custom-text-grey800 body-sm-bold cursor-pointer" onClick={handleResendEmail}>Resend code</div>}

                            </div>
                        </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default SignUpByEmail;