import Homepage from '@/Images/Homepage/homepage-img.jpg';
import Cloth from '@/Images/Store/cloth.png';
import Wishlist from '@/Images/Store/wishlist-toggle.svg';

import Image from 'next/image';

function ClothsHorizontalCarousel({containerWidth,borderClass})
{
    return(
        <>
                <div className={` inline-flex flex-col small-border-right custom-border-grey800 flex-shrink-0 scroll-smooth relative ${containerWidth} ${borderClass}`}>
                    <Image src={Wishlist} width={16} height={16} alt="img" quality={100} className='absolute top-3 right-3 '  />

                    <div className="flex justify-center items-center px-4 py-6  small-border-bottom custom-border-grey800 h-[75%] bg-[#F1F2F7]">
                        <Image src={Cloth} width={147} height={219} alt="img" quality={100} className='w-auto h-auto object-contain' />
                    </div>
                    <div className="p-2.5 pb-5 background-custom-white flex flex-col gap-2 h-[25%] justify-center">
                        <div className="all-caps-10 custom-text-grey900 max-w-[160px] w-full text-ellipsis whitespace-nowrap overflow-hidden ">Soft blue hoodie with texture</div>
                        <div className="all-caps-10 custom-text-grey900">₹1899</div>
                    </div>
                </div>

        </>
    )
}

export default ClothsHorizontalCarousel;