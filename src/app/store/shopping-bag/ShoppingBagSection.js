'use client';
import StoreShopPepoinNavbar from '@/Components/StoreShopPepoinNavbar';
import { Plus_Jakarta_Sans } from 'next/font/google';

import Image from 'next/image';
//images
import Whishlist from '@/Images/Store/wishlist-toggle-transparent.svg';
import SingleProduct from '@/Images/Store/single-product.jpg';
import CloseIcon from '@/Images/Store/close-icon.svg';
import Pepcoin from '@/Images/Homepage/pepcoin-icon.svg';
import Plus from '@/Images/Store/plus.svg';
import Minus from '@/Images/Store/minus.svg';
import ChevronUp from '@/Images/Store/chevron-up.svg';
import CheckIcon from '@/Images/Store/check-icon.svg';
import ShppingBagMyFavouritesButtons from '@/Components/ShppingBagMyFavouritesButtons';






const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})
function ShoppingBagSection() {



    return (
        <>
            <section className={"flex justify-center min-h-screen w-full background-custom-grey50    " + plus_jakarta_sans.className}>
                <div className="page-center-parent-container  small-border custom-border-grey600 overflow-y-scroll overflow-scrollbar-hidden flex flex-col justify-between">
                <div>
                    
                    <StoreShopPepoinNavbar pepcoin={true} />

                    {/* shopping bag & my Favourites catagory buttons */}
                   <ShppingBagMyFavouritesButtons/>


                    {/* shoppping bag product info  section */}
                    <div className="grid grid-cols-2 small-border-y custom-border-grey800 ">
                        <Image src={SingleProduct} width={195} height={292} alt="img" quality={100} className=" w-full h-auto object-cover small-border-right custom-border-grey800" />
                        
                        <div className="flex flex-col justify-between p-4 pr-3 ">
                            
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-end w-full ">
                                    <Image src={CloseIcon} width={20} height={20} alt="img" quality={100} className="" />
                                </div>
                                <div className="flex items-center gap-2 5">
                                    <div className="all-caps-10 custom-text-grey600">Cyberpunk</div>
                                    <div className="small-border h-3.5 custom-text-grey500"></div>
                                    <div className="all-caps-10 custom-text-grey600">by Payppy</div>
                                </div>
                                <div className="all-caps-10-bold custom-text-grey900">Polo Tshirt Heavy Black</div>
                                <div className="flex items-center ">
                                    <div className="all-caps-12-bold custom-text-grey800">₹1299</div>
                                    <Image src={Plus} width={18} height={18} alt="img" quality={100} className="" />
                                    <div className="flex items-center gap-0.5">
                                        <Image src={Pepcoin} width={12} height={12} alt="img" quality={100} className="" />
                                        <div className="all-caps-12-bold custom-text-grey800"> 60 </div>
                                    </div>
                                </div>

                            </div>

                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="custom-text-grey900 body-sm">M</div>
                                    <div className="custom-text-grey900 body-sm">Black</div>
                                </div>
                                <Image src={Whishlist} width={20} height={20} alt="img" quality={100} className="" />
                            </div>
                        </div>
                    </div>
                </div>    


                {/* checkout section  */}
                    <div className="">
                        <div className="flex justify-end ">
                            <button className="py-[5px] px-2 flex items-center gap-1 small-border-x small-border-top custom-border-grey800">
                                <div className="all-caps-10 custom-text-grey900">Details</div>
                                <Image src={ChevronUp} width={16} height={16} alt="img" quality={100} className="" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-4  small-border-top custom-border-grey800">
                            <div className="flex flex-col gap-2 py-4 px-6">
                                <div className="flex justify-between">
                                    <div className="all-caps-10 custom-text-grey900">Subtotal:</div>
                                    <div className="flex items-center ">
                                        <div className="all-caps-12-bold custom-text-grey800">₹1299</div>
                                        <Image src={Plus} width={18} height={18} alt="img" quality={100} className="" />
                                        <div className="flex items-center gap-0.5">
                                            <Image src={Pepcoin} width={12} height={12} alt="img" quality={100} className="" />
                                            <div className="all-caps-12-bold custom-text-grey800"> 60 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="all-caps-10 custom-text-grey900">Shipping:</div>
                                    <div className="all-caps-10-bold custom-text-grey900">FREE</div>                                   
                                </div>
                            </div>
                            <div className="px-6">
                                <div className="custom-text-grey900 small-border custom-border-grey800 border-dashed  "></div>
                            </div>
                                

                            <div className="flex gap-2 justify-between  px-6">
                                <div className="flex gap-2">
                                    <div className="w-4 h-4 small-border custom-border-grey800 background-custom-green relative">
                                        <Image src={CheckIcon} width={12} height={12} alt="img" quality={100} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                    </div>
                                    <div className="all-caps-10 custom-text-grey900">Use pepcoins</div>
                                </div>
                                <div className="flex items-center">
                                    <Image src={Minus} width={18} height={18} alt="img" quality={100} className="" />
                                    <div className="all-caps-12-bold custom-text-grey900">100</div>
                                </div>
                            </div>

                            <div className="px-6">
                                <div className="custom-text-grey900 small-border custom-border-grey800 border-dashed  "></div>
                            </div>

                            <div className="flex justify-between  px-6">
                                <div className="all-caps-12 custom-text-grey900">Total</div>
                                <div className="flex flex-col items-end gap-1.5">
                                    <div className="flex items-center ">
                                        <div className="all-caps-12-bold custom-text-grey800">₹1299</div>
                                        <Image src={Plus} width={18} height={18} alt="img" quality={100} className="" />
                                        <div className="flex items-center gap-0.5">
                                            <Image src={Pepcoin} width={12} height={12} alt="img" quality={100} className="" />
                                            <div className="all-caps-12-bold custom-text-grey800"> 60 </div>
                                        </div>
                                    </div>   
                                    <div className="all-caps-10 custom-text-grey900">GST INCLUDED</div>
                                </div>                                   
                            </div>

                            <div className="flex flex-col">
                                <div className="py-1 background-custom-green all-caps-10-bold custom-border-grey900 text-center">Saved ₹100 with pepcoins</div>
                                <button className="text-center all-caps-12-bold background-custom-grey900 custom-text-white px-5 py-4">Secure Checkout</button>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default ShoppingBagSection;

