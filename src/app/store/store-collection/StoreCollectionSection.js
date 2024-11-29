'use client';
import StoreFooter from '@/Components/StoreFooter';
import Image from 'next/image';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { useState } from 'react';

//hero section images
import Homepage from '@/Images/Homepage/homepage-img.jpg';


//filter section images
import SingleViewFilter from '@/Images/Store/single-view-toggler.svg';
import MultiViewFilter from '@/Images/Store/multi-view-toggler.svg';
import StoreImgAndClothsCompo from '@/Components/StoreImgAndClothsCompo';
import ClothsHorizontalCarousel from '@/Components/ClothsHorizontalCarousel';


const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function StoreCollectionSection()
{

    let[gridColums,setGridColumns]=useState(2);

    let[readmoreContent,setReadMoreContent]=useState(false);
    return(
        <>
        <main className={"w-full h-screen flex justify-center background-custom-grey50 overflow-hidden "+plus_jakarta_sans.className}>
            <div className="page-center-parent-container  overflow-y-scroll relative overflow-scrollbar-hidden">
            
            {/* hero section  */}
            <section className="h-[60%] relative flex justify-center ">
                <Image src={Homepage} width={400} height={675} alt='img' quality={100} className='w-full h-full absolute z-0 object-cover top-0 left-0' />
                <div className="flex py-6 relative z-1">
                    <Link href='/'>
                        <div className="py-1.5 px-2 flex flex-col items-center gap-1">
                            <div className='body-bold custom-text-white '>Collection</div>
                            <div className="w-4 h-[1px] custom-border-white border"></div>
                        </div>
                    </Link>
                    <Link href='/store/store-lookbook'>
                        <div className="py-1.5 px-2 flex flex-col items-center gap-1">
                            <div className='body-bold custom-text-white '>Lookbook</div>
                            {/* <div className="w-4 h-[1px] custom-border-white border"></div> */}
                        </div>
                    </Link>
                </div>
            </section>


            {/* catagory info section  */}
            <section className="py-8 px-6 background-custom-white flex flex-col gap-3 small-border-left small-border-right custom-border-grey600">
                    <div className="body-bold custom-text-grey900">CyberPUNK</div>
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


            {/* filter section  */}

            <section className="py-4 px-5 small-border-x small-border-top  custom-border-grey800 flex justify-between items-cneter  background-custom-white">
                <div className="all-caps-12 custom-text-grey800">FILTER</div>
                <div className="flex items-center gap-3 ">
                    <Image src={SingleViewFilter} width={14} height={16} quality={100} alt='img' className='cursor-pointer' onClick={()=>{setGridColumns(1)}}/>
                    <Image src={MultiViewFilter} width={14} height={16} quality={100} alt='img' className='cursor-pointer' onClick={()=>{setGridColumns(2)}}/>
                </div>
            </section>


            {/* grid view section  */}
            <section className={`grid grid-cols-${gridColums} small-border-bottom small-border-left  custom-border-grey800`}>
                <ClothsHorizontalCarousel borderClass={'  small-border-top '}/>
                <ClothsHorizontalCarousel borderClass={'  small-border-top '}/>
                <ClothsHorizontalCarousel borderClass={'  small-border-top '}/>
                <ClothsHorizontalCarousel borderClass={'  small-border-top '}/>
                <ClothsHorizontalCarousel borderClass={'  small-border-top '}/>
                <ClothsHorizontalCarousel borderClass={'  small-border-top '}/>
                <ClothsHorizontalCarousel borderClass={'  small-border-top '}/>
                <ClothsHorizontalCarousel borderClass={'  small-border-top '}/>

            </section>


                <StoreFooter/>
            </div>
        </main>
        </>
    )
}

export default StoreCollectionSection;
