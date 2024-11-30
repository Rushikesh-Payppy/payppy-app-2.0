'use client';
import ClothsHorizontalCarousel from '@/Components/ClothsHorizontalCarousel';
import StoreShopPepoinNavbar from '@/Components/StoreShopPepoinNavbar';
import { Plus_Jakarta_Sans } from 'next/font/google';

import Image from 'next/image';


//images
import BrandBackground from '@/Images/Store/brand-img-page.jpg';
import BrandLogo from '@/Images/Store/brand-logo.svg';


//filter section images
import SingleViewFilter from '@/Images/Store/single-view-toggler.svg';
import MultiViewFilter from '@/Images/Store/multi-view-toggler.svg';
import { useState } from 'react';

//collections images
import StoreImg2 from '@/Images/Store/store-img-2.jpg';
import StoreImg3 from '@/Images/Store/store-img-3.jpg';

const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})
function BrandPageSection() {

    let[gridColums,setGridColumns]=useState(2);

    let[readmoreContent,setReadMoreContent]=useState(false);


    return (
        <>
            <section className={"flex justify-center min-h-screen w-full background-custom-grey50    " + plus_jakarta_sans.className}>
                <div className="page-center-parent-container  small-border custom-border-grey600 overflow-y-scroll overflow-scrollbar-hidden ">
                    <StoreShopPepoinNavbar pepcoin={false} share={true} />
                    
                    {/* brand header details  */}
                    <div className="pb-24 flex flex-col items-center background-custom-white small-border-bottom custom-border-grey800 ">
                        <div className="overflow-hidden h-[219px] w-full">
                            <Image src={BrandBackground} width={400} height={219} quality={100} alt='img' className='w-full h-auto object-cover' />
                        </div>
                        <div className="inline-flex flex-col gap-5 items-center -m-12">
                            <div className="rounded-full w-24 h-24 background-custom-white small-border custom-border-grey800 flex justify-center items-center p-2">
                                <Image src={BrandLogo} width={60} height={40} quality={100} alt='img' className='w-auto h-auto ' />
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <div className="all-caps-14-bold custom-text-grey900">H&M</div>
                                <div className="flex items-center gap-2">
                                    <div className="all-caps-10 custom-text-grey600">1.2K Followers</div>
                                    <div className="w-0.5 h-0.5 rounded-full background-custom-grey900"></div>
                                    <div className="all-caps-10 custom-text-grey600">Joined 2023</div>
                                </div>
                            </div>
                            <button className="py-3 px-6 all-caps-10-bold custom-text-white background-custom-grey900">Follow</button>
                        </div>
                    </div>

                {/* About section  */}
                <section className="py-8 px-4 background-custom-white flex flex-col gap-3 small-border-bottom custom-border-grey800 ">
                    <div className="body-bold custom-text-grey900">About</div>
                    <div className="flex flex-col gap-1">
                        <p className="">
                            <span className="custom-text-grey800  body-sm">Introducing Cyberpunk, a collaboration story between two British heritage luxury brands. The collection encapsulates the best of contemporary and heritage styling, </span>
                            {readmoreContent&&<span className={`custom-text-grey800  body-sm  `}>a collaboration story between two British heritage luxury brands. The collection encapsulates the best of contemporary and heritage styling, a collaboration story between two British heritage luxury brands. The collection encapsulates the best of contemporary and heritage styling, </span> }
                        </p>
                        <div >
                            <span className="custom-text-grey600 border-b custom-border-grey600 body-sm cursor-pointer " onClick={()=>{setReadMoreContent(!readmoreContent)}}>{readmoreContent?'show less':'read more'}</span>
                        </div>
                    </div>
                </section>

                 {/* Collections section  */}
                 <section className="py-8 px-4 background-custom-white flex flex-col gap-3 ">
                    <div className="body-bold custom-text-grey900">Collections</div>
                    <div className="flex w-full ">
                        <div className="flex flex-col gap-3 grow">
                            <Image src={StoreImg3} width={183} height={274} quality={100} alt='img' className='w-full' />
                            <div className="all-caps-10 custom-text-grey900">CyberPUNK</div>
                        </div>
                        <div className="flex flex-col gap-3 grow">
                            <Image src={StoreImg2} width={183} height={274} quality={100} alt='img' className='w-full' />
                            <div className="all-caps-10 custom-text-grey900">MAGMA</div>
                        </div>
                    </div>
                </section>


                {/* filter section  */}

                <section className="p-4  small-border-top  custom-border-grey800 flex justify-between items-cneter  background-custom-white">
                    <div className="all-caps-12 custom-text-grey800">FILTER</div>
                    <div className="flex items-center gap-3 ">
                        <Image src={SingleViewFilter} width={14} height={16} quality={100} alt='img' className='cursor-pointer' onClick={()=>{setGridColumns(1)}}/>
                        <Image src={MultiViewFilter} width={14} height={16} quality={100} alt='img' className='cursor-pointer' onClick={()=>{setGridColumns(2)}}/>
                    </div>
                </section>


                {/* grid view section  */}
                <section className={`grid grid-cols-${gridColums} small-border-bottom `}>
                    <ClothsHorizontalCarousel borderClass={'  small-border-top small-border-right '}/>
                    <ClothsHorizontalCarousel borderClass={'  small-border-top  '}/>
                    <ClothsHorizontalCarousel borderClass={'  small-border-top small-border-right '}/>
                    <ClothsHorizontalCarousel borderClass={'  small-border-top  '}/>
                    <ClothsHorizontalCarousel borderClass={'  small-border-top small-border-right '}/>
                    <ClothsHorizontalCarousel borderClass={'  small-border-top  '}/>
                    <ClothsHorizontalCarousel borderClass={'  small-border-top small-border-right '}/>
                    <ClothsHorizontalCarousel borderClass={'  small-border-top  '}/>

                </section>



                </div>
            </section>
        </>
    )
}

export default BrandPageSection;

