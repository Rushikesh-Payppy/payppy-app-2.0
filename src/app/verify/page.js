'use client';
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})

function Page() {
    let searchParams=useSearchParams();
    let accessToken=searchParams.get('url');
    let router=useRouter();
    useEffect(()=>{
        fetch('https://payppy.in/auth/generate-new-access-token',{
            method:'POST',
            headers:{
                'Authorization':'Bearer '+accessToken
            },
            credentials:'include'
        })
        .then((data)=>{
            return data.json();
        })
        .then((response)=>{
            // console.log('response :',response);
            if(response&&'message' in response&&response.message=='New access token generated successfully.')
            {
                router.push('/homepage');
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
    return(
        <>
            <section className={"flex justify-center h-screen w-full background-custom-grey100   " + plus_jakarta_sans.className}>
                <div className="page-center-parent-container  h-full  overflow-scrollbar-hidden small-border-x custom-border-grey800 overflow-scroll flex flex-col items-center justify-center gap-7" >
                    <div className="w-6 h-6 border-[1.5px] border-b-0 border-r-0 custom-border-grey900 rounded-full animate-spin"></div>
                    <h2 className="heading-h2 custom-text-grey900 text-center">Verifying your email..</h2>
                </div>
            </section>
        </>
    )
}
export default Page;
