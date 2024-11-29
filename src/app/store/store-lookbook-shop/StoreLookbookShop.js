import Lookbook from '@/Images/Store/lookbook.jpg';
import LookbookArrow from '@/Images/Store/lookbook-arrow-icon.svg';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import StoreImgAndClothsCompo from '@/Components/StoreImgAndClothsCompo';
import ClothsHorizontalCarousel from '@/Components/ClothsHorizontalCarousel';




const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function StoreLookbookShop()
{
    return(
        <>
         <section className={"flex justify-center h-screen w-full background-custom-grey100   "+plus_jakarta_sans.className}>
            <div className="page-center-parent-container  h-full relative overflow-scrollbar-hidden flex flex-col justify-between small-border-x custom-border-grey800">
                <Image src={Lookbook} width={400} height={500} quality={100} alt='img' className='w-full h-full absolute top-0 left-0 object-cover' />
                
                <div className="flex justify-center py-6 relative z-[1]">
                        <Link href='/store/store-collection'>
                            <div className="py-1.5 px-2 flex flex-col items-center gap-1">
                                <div className='body-bold custom-text-white '>Collection</div>
                                {/* <div className="w-4 h-[1px] custom-border-white border"></div> */}
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className="py-1.5 px-2 flex flex-col items-center gap-1">
                                <div className='body-bold custom-text-white '>Lookbook</div>
                                <div className="w-4 h-[1px] custom-border-white border"></div>
                            </div>
                        </Link>
                </div>
 
                <div className="flex flex-col  h-[50%] background-custom-white relative z-[1]">
                    <div className="background-custom-white p-6 flex items-center gap-2">
                        <div className="all-caps-12-bold custom-text-grey900">look</div>
                        <div className="body-sm custom-text-grey700">3 items</div>
                    </div>

                    <div className="flex overflow-scroll overflow-scrollbar-hidden small-border-y custom-border-grey800">
                        <ClothsHorizontalCarousel />
                        <ClothsHorizontalCarousel />
                        <ClothsHorizontalCarousel />
                        <ClothsHorizontalCarousel />
                        <ClothsHorizontalCarousel />
                        <ClothsHorizontalCarousel />
                        <ClothsHorizontalCarousel />

                    </div>
                </div>

            </div>
         </section>
        </>
    )
}

export default StoreLookbookShop;