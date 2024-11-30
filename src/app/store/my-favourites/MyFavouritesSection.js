'use client';
import ClothsHorizontalCarousel from '@/Components/ClothsHorizontalCarousel';
import ShppingBagMyFavouritesButtons from '@/Components/ShppingBagMyFavouritesButtons';
import StoreShopPepoinNavbar from '@/Components/StoreShopPepoinNavbar';
import { Plus_Jakarta_Sans } from 'next/font/google';

import Image from 'next/image';




const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})
function MyFavouritesSection() {



    return (
        <>
            <section className={"flex justify-center min-h-screen w-full background-custom-grey50    " + plus_jakarta_sans.className}>
                <div className="page-center-parent-container  small-border custom-border-grey600 overflow-y-scroll overflow-scrollbar-hidden ">
                    <StoreShopPepoinNavbar pepcoin={true} />
                    <ShppingBagMyFavouritesButtons/>


                    <div className="grid grid-cols-2 small-border-bottom gap-y-4 custom-border-grey800 ">
                        <ClothsHorizontalCarousel addToCartButton={true} borderClass='small-border-top small-border-right'/>
                        <ClothsHorizontalCarousel addToCartButton={true} borderClass='small-border-top '/>
                        <ClothsHorizontalCarousel addToCartButton={true} borderClass='small-border-top small-border-right'/>
                        <ClothsHorizontalCarousel addToCartButton={true} borderClass='small-border-top '/>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default MyFavouritesSection;

