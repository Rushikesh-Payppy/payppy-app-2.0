import Lookbook from '@/Images/Store/lookbook.jpg';
import LookbookArrow from '@/Images/Store/lookbook-arrow-icon.svg';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import StoreFooter from '@/Components/StoreFooter';




const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function StoreLookbook()
{
    return(
        <>
         <section className={"flex justify-center h-screen w-full background-custom-grey100   "+plus_jakarta_sans.className}>
            <div className="page-center-parent-container  h-full relative overflow-scrollbar-hidden flex flex-col justify-between">
                <Image src={Lookbook} width={400} height={500} quality={100} alt='img' className='w-full h-full absolute top-0 left-0 object-cover' />
               
                <div className="h-full flex flex-col justify-between">

                    <div className="flex justify-center py-6 relative z-1">
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

                    <div className="flex w-full justify-end relative z-[1] p-6">
                        <div className="flex items-center gap-1 ">
                            <Image src={LookbookArrow} width={22} height={12} quality={100} alt='img' className='' />
                            <Link href='/store/store-lookbook-shop'><div className="all-caps-10-bold custom-text-white">SHOP THE LOOK</div></Link>
                        </div>

                    
                    </div>
                </div>



            <StoreFooter/>
            </div>

         </section>
        </>
    )
}

export default StoreLookbook;