'use client';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

// top section images 
import Homepage from '@/Images/Homepage/homepage-img.jpg';
import Logo from '@/Images/Homepage/Logo.svg';

// bottom section images 
import ProfilImage from '@/Images/Homepage/Profile Image.svg';
import Pepcoin from '@/Images/Homepage/pepcoin-icon.svg';
import Voucher from '@/Images/Homepage/vouchers-icon.svg';
import Store from '@/Images/Homepage/store-icon.svg';
import Flix from '@/Images/Homepage/flix-icon.svg';
import BillPay from '@/Images/Homepage/billpay-icon.svg';
import MenuIcon from '@/Images/Homepage/menu-icon.svg';







import OtpSection from '../otp/OtpSection';
import { useState } from 'react';
import { useRouter } from 'next/router';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function HomepageSection()
{


    return(
        <>
        <section className={"flex justify-center  background-custom-grey50  h-screen "+plus_jakarta_sans.className}>
            <div className="page-center-parent-container ">
                <div className="flex flex-col h-[60%] items-center justify-between py-10 px-10 relative homepage-image-div">
                    <Image src={Logo} width={33} height={32} quality={100} alt='img' className='' />
                    <div className="flex flex-col gap-8 items-center">
                        <div className="flex flex-col gap-2">
                            <div className="all-caps-10 custom-text-white">new collection</div>
                            <div className="all-caps-14-bold custom-text-white">CyberPunk</div>
                        </div>
                    </div>
                </div>
                <div className="background-custom-grey50 grid grid-cols-2 h-[40%]  small-border custom-border-grey800 homepage-bottom-grid-box">
                    <div className="small-border-bottom custom-border-grey800 flex justify-center items-center  gap-2">
                        <Image src={ProfilImage} width={44} height={44} quality={100} alt='img' className='' />
                        <div className="flex flex-col gap-0.5">
                            <div className="all-caps-10 custom-text-grey900">Welcome back,</div>
                            <div className="body-bold custom-text-grey800">Priyadarshini</div>
                        </div>
                    </div>
                    <div className="small-border-bottom custom-border-grey800 grid grid-cols-2 small-border-left ">
                        <div className="flex items-center justify-center  py-4 px-2 gap-1 grow">
                            <Image src={Pepcoin} width={24} height={24} quality={100} alt='img' className='' />
                            <div className="all-caps-12-bold">230</div>
                        </div>
                        <div className="flex  justify-center items-center py-4 px-2 custom-border-grey800 gap-1 grow small-border-left ">
                            <Image src={Voucher} width={24} height={24} quality={100} alt='img' className='' />
                            <div className="all-caps-12-bold">1</div>
                        </div>
                    </div>

                    <div className="small-border-bottom custom-border-grey800 flex flex-col  justify-center items-center  gap-2">
                        <Image src={Store} width={40} height={40} quality={100} alt='img' className='' />
                        <div className="all-caps-12-bold">Store</div>
                    </div>
                    <div className="small-border-bottom custom-border-grey800 flex flex-col justify-center items-center gap-2 small-border-left ">
                        <Image src={Flix} width={40} height={40} quality={100} alt='img' className='' />
                        <div className="all-caps-12-bold">Flix</div>
                    </div>

                    <div className="small-border-bottom custom-border-grey800 flex flex-col  justify-center items-center  gap-2">
                        <Image src={BillPay} width={40} height={40} quality={100} alt='img' className='' />
                        <div className="all-caps-12-bold">Bill Pay</div>
                    </div>
                    <div className="small-border-bottom custom-border-grey800 flex flex-col justify-center items-center gap-2 small-border-left ">
                        <Image src={MenuIcon} width={40} height={40} quality={100} alt='img' className='' />
                        <div className="all-caps-12-bold">More</div>
                    </div>

                        

                </div>
            </div>
        </section>
      
        </>
    )
}

export default HomepageSection;