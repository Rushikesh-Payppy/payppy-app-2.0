'use client';
import Image from "next/image";
//header images
import CloseIcon from '@/Images/Store/close-icon.svg';
import Pepcoin from '@/Images/Homepage/pepcoin-icon.svg';
import Share from '@/Images/Store/share-icon.svg';
import Store from '@/Images/Homepage/store-icon.svg';
import Plus from '@/Images/Store/plus.svg';

import { Plus_Jakarta_Sans } from "next/font/google";

//single product images
import SingleProduct from '@/Images/Store/single-product.jpg';
import Whishlist from '@/Images/Store/wishlist-toggle-transparent.svg';
import InStock from '@/Images/Store/instock-green-circle.svg';



//product images
import Shirt1 from '@/Images/Store/shirt1.jpg';
import Shirt2 from '@/Images/Store/shirt2.jpg';
import Shirt3 from '@/Images/Store/shirt3.jpg';
import Shirt4 from '@/Images/Store/shirt4.jpg';
import Shirt5 from '@/Images/Store/shirt5.jpg';
import Minus from '@/Images/Store/minus.svg';
import { useEffect, useRef, useState } from "react";

//offers images
import YesBank from '@/Images/Store/yes-bank.svg';

//feature images
import Feature1 from '@/Images/Store/feature1.jpg';
import Feature2 from '@/Images/Store/feature2.jpg';
import ClothsHorizontalCarousel from "@/Components/ClothsHorizontalCarousel";




const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function SingleProductSection()
{
    let[firstSelectSizeBtnSivible,setFirstSelectSizeBtnVisible]=useState(true);

    let parentContainer=useRef();
    
    useEffect(()=>{
        function handleFirstSelectSizeBtnVisibility()
        {
            setFirstSelectSizeBtnVisible(parentContainer.current.scrollTop<20)

        }
        if(parentContainer)
        {
            parentContainer.current.addEventListener('scroll',handleFirstSelectSizeBtnVisibility);
        }

        return ()=> parentContainer.current.removeEventListener('scroll',handleFirstSelectSizeBtnVisibility);
    },[])
    return(
        <>
            <section className={"flex justify-center h-screen w-full background-custom-grey100   " + plus_jakarta_sans.className}>
                <div className="page-center-parent-container  h-full  overflow-scrollbar-hidden small-border-x custom-border-grey800 overflow-scroll " ref={parentContainer}>
                    
                    <div className="h-[83%]  overflow-hidden">
                        
                        <div className="flex items-center justify-between py-3 px-4 background-custom-white">
                            <Image src={CloseIcon} width={20} height={20} alt="img" quality={100} className="" />
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-0.5 small-border rounded-full py-1 px-2 custom-border-grey400">
                                    <Image src={Pepcoin} width={20} height={20} alt="img" quality={100} className="" />
                                    <div className="all-caps-12-bold custom-text-grey800"> 230 </div>
                                </div>
                                <Image src={Share} width={20} height={20} alt="img" quality={100} className="" />
                                <Image src={Store} width={20} height={20} alt="img" quality={100} className="" />
                            </div>
                        </div>

                        <Image src={SingleProduct} width={390} height={620} alt="img" quality={100} className="w-full h-auto object-cover " />

                    </div>

                    <div className="background-custom-white">
                            
                            
                            {/* product price  */}
                        <div className="flex justify-between gap-2 p-4 pt-5 ">
                            
                            <div className="flex flex-col gap-2.5">
                                <div className="all-caps-12 custom-text-grey900">Polo Tshirt Heavy Black</div>
                                <div className="flex gap-2 5 items-center">
                                    <div className="all-caps-10 custom-text-grey600">Cyberpunk</div>
                                    <div className="w-[1px] h-3.5 small-border custom-text-grey700"></div>
                                    <div className="all-caps-10 custom-text-grey600">by Payppy</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1.5">
                                <div className="all-caps-12 custom-text-grey800">₹3499</div>
                                <div className="flex">
                                    <div className="all-caps-12 custom-text-grey800">₹2999</div>
                                    <Image src={Plus} width={16} height={16} alt="img" quality={100} className="" />
                                    <div className="flex items-center">
                                        <Image src={Pepcoin} width={12} height={12} alt="img" quality={100} className="" />
                                        <div className="all-caps-12 custom-text-grey800"> 60 </div>
                                    </div>
                                </div>
                                    <div className="all-caps-12 custom-text-grey600">MRP incl. of all taxes</div>
                            </div>

                        </div>

                       { <button className={`background-custom-grey900 all-caps-12-bold custom-text-white  w-full text-center duration-200 ${firstSelectSizeBtnSivible?' py-4 px-7 max-h-60 h-fit overflow-auto ':' max-h-0 h-0 overflow-hidden '} `}>Select Size</button>}


                        {/* product varients  */}
                        <div className="p-4 pb-6 flex flex-col gap-2.5">
                            <div className="flex justify-between items-center gap-2">
                                <div className="flex gap-2 items-center">
                                    <div className="all-caps-10 custom-text-grey800">Select Color:</div>
                                    <div className="body-sm-bold custom-text-grey800">Black</div>
                                </div>
                                <Image src={Whishlist} width={20} height={20} alt="img" quality={100} className="" />
                            </div>
                            <div className="flex overflow-scroll overflow-scrollbar-hidden scroll-smooth">
                                <Image src={Shirt1} width={80} height={120} alt="img" quality={100} className="" />
                                <Image src={Shirt2} width={80} height={120} alt="img" quality={100} className="" />
                                <Image src={Shirt3} width={80} height={120} alt="img" quality={100} className="" />
                                <Image src={Shirt4} width={80} height={120} alt="img" quality={100} className="" />
                                <Image src={Shirt3} width={80} height={120} alt="img" quality={100} className="" />
                                <Image src={Shirt2} width={80} height={120} alt="img" quality={100} className="" />
                            </div>

                        </div>

                         {/* product size  */}
                         <div className="p-4 pb-6 flex flex-col gap-2.5">
                            <div className="flex justify-between items-center gap-2">
                                    <div className="all-caps-10 custom-text-grey800">Model is 178cm and 76kg wearing size M</div>
                                    <div className="all-caps-10 custom-text-grey600">Size chart</div>
                            </div>
                            <div className="flex overflow-scroll overflow-scrollbar-hidden scroll-smooth">
                                <div className="flex justify-center items-center p-3 w-16 small-border body-sm-bold custom-border-grey800 custom-text-grey900">XS</div>
                                <div className="flex justify-center items-center p-3 w-16 small-border body-sm- custom-border-grey400 custom-text-grey900">S</div>
                                <div className="flex justify-center items-center p-3 w-16 small-border body-sm- custom-border-grey400 custom-text-grey900">M</div>
                                <div className="flex justify-center items-center p-3 w-16 small-border body-sm- custom-border-grey400 custom-text-grey900">L</div>
                                <div className="flex justify-center items-center p-3 w-16 small-border body-sm- custom-border-grey400 custom-text-grey900">XL</div>
                                <div className="flex justify-center items-center p-3 w-16 small-border body-sm- custom-border-grey400 custom-text-grey900">XXL</div>

                            </div>

                        </div>

                        {/* select size button */}
                        <div className="flex flex-col p-4 pb-6 gap-1.5">
                            <button className="background-custom-grey900 all-caps-12-bold custom-text-white py-4 px-7 w-full text-center">Select Size</button>
                            <div className="flex justify-between items-center px-[5px]">
                                <div className="flex items-center gap-1">
                                    <Image src={InStock} width={16} height={16} alt="img" quality={100} className="" />
                                    <div className="all-caps-10 custom-text-grey600">IN STOCK</div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="all-caps-12 custom-text-grey800">Earn</div>
                                    <div className="flex items-center gap-1">
                                        <Image src={Pepcoin} width={12} height={12} alt="img" quality={100} className="" />
                                        <div className="all-caps-12-bold custom-text-grey800"> 60 </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* product details , offers and shipping , exchanges & returns info  */}
                        <div className="flex flex-col p-4 pb-6 gap-1.5 small-border-y custom-border-grey400 ">

                            {/* product details */}
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <div className="all-caps-10-bold custom-text-grey800">product Details</div>
                                    {/* <Image src={Plus} width={24} height={24} alt="img" quality={100} className="" /> */}
                                    <Image src={Minus} width={24} height={24} alt="img" quality={100} className="" />

                                </div>
                                <div className="flex flex-col gap-5 pr-6 pb-2">
                                    <div className="body-sm custom-text-grey700">Introducing Cyberpunk, a collaboration story between two British heritage luxury brands. The collection encapsulates the best of contemporary and heritage styling, a collaboration story between </div>
                                    <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
                                        <div className="flex flex-col gap-1 py-3 small-border-top custom-border-grey400">
                                            <div className="all-caps-10 custom-text-grey600">Type</div>
                                            <div className="body-bold custom-text-grey900">Jacket</div>
                                        </div>
                                        <div className="flex flex-col gap-1 py-3 small-border-top custom-border-grey400">
                                            <div className="all-caps-10 custom-text-grey600">color</div>
                                            <div className="body-bold custom-text-grey900">Red</div>
                                        </div>
                                        <div className="flex flex-col gap-1 py-3 small-border-top custom-border-grey400">
                                            <div className="all-caps-10 custom-text-grey600">Type</div>
                                            <div className="body-bold custom-text-grey900">Jacket</div>
                                        </div>
                                        <div className="flex flex-col gap-1 py-3 small-border-top custom-border-grey400">
                                            <div className="all-caps-10 custom-text-grey600">color</div>
                                            <div className="body-bold custom-text-grey900">Red</div>
                                        </div>
                                        <div className="flex flex-col gap-1 py-3 small-border-top custom-border-grey400">
                                            <div className="all-caps-10 custom-text-grey600">Type</div>
                                            <div className="body-bold custom-text-grey900">Jacket</div>
                                        </div>
                                        <div className="flex flex-col gap-1 py-3 smal-border-top custom-border-grey400">
                                            <div className="all-caps-10 custom-text-grey600">color</div>
                                            <div className="body-bold custom-text-grey900">Red</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             {/* offers details */}
                             <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <div className="all-caps-10-bold custom-text-grey800">Offers</div>
                                    {/* <Image src={Plus} width={24} height={24} alt="img" quality={100} className="" /> */}
                                    <Image src={Minus} width={24} height={24} alt="img" quality={100} className="" />

                                </div>
                                <div className="flex flex-col gap-5 pb-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={YesBank} width={28} height={28} alt="img" quality={100} className="" />
                                        <div className="body-sm custom-text-grey900">Additional 5% OFF using a Yes Bank Credit Card</div>
                                        <div className="body-sm-bold custom-text-grey800">T&C</div>
                                    </div>
                                </div>
                            </div>

                              {/* Shipping, exchanges & returns details */}
                              <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <div className="all-caps-10-bold custom-text-grey800">Shipping, exchanges & returns</div>
                                    {/* <Image src={Plus} width={24} height={24} alt="img" quality={100} className="" /> */}
                                    <Image src={Minus} width={24} height={24} alt="img" quality={100} className="" />

                                </div>
                                <div className="text-xs leading-4 ustom-text-grey900 ">
                                    <div className="text-xs leading-4 font-bold">Shipping:</div>
                                    <ul className="list-disc leading-4   pl-4">
                                        <li className="leading-4 ustom-text-grey900">Shipping is FREE for orders above ₹2,999.</li>
                                        <li className="leading-4 ustom-text-grey900">Shipping fee will range from ₹130-₹200 depending on your state.</li>
                                        <li className="leading-4 ustom-text-grey900">We do not offer COD or Exchanges right now.</li>
                                    </ul>
                                        <br />

                                     <div className="text-xs leading-4 font-bold">Returns:</div>
                                    <ul className="list-disc leading-4  pl-4 ">
                                        <li className="leading-4 ustom-text-grey900">3-day hassle-free returns after delivery.</li>
                                        <li className="leading-4 ustom-text-grey900">Return will ONLY be provided in case there is a defect in the product or a wrong product is delivered by mistake.</li>
                                        <li className="leading-4 ustom-text-grey900">If there are any signs of wear, return will NOT be accepted. Labels must be kept attached to the product.</li>
                                        <li className="leading-4 ustom-text-grey900">A fee of ₹130 will be applied on the return of sale items.</li>
                                        <li className="leading-4 ustom-text-grey900">If your PIN is not serviceable for reverse pickup, you must ship the product to us.</li>
                                        <li className="leading-4 ustom-text-grey900">Returns of items below will ₹999 will incur a charge of ₹130.</li>
                                        <li className="leading-4 ustom-text-grey900">If you receive a damaged product, find items missing from your order, or have received a delivery status notification without receiving the package, please contact us via email at support@payppy.co or phone at +91 9022558944 within 24 hours of delivery.</li>
                                    </ul>
                                    <br />
                                    <div className="custom-text-grey900">For more details, please check our shipping, return & refund policy here.</div>
                                </div>
                            </div>
                        </div>


                        {/* Featured In section  */}
                        <div className="flex flex-col gap-4 px-4 pt-7 pb-10 small-border-y custom-border-bottom">
                            <div className="all-caps-12 custom-text-grey800">Featured in</div>
                            <div className="flex gap-3 overflow-scroll overflow-scrollbar-hidden">
                            <div className="flex-shrink-0">
                                <Image src={Feature1} width={167} height={297} alt="img" quality={100} className="" />
                            </div>
                            <div className="flex-shrink-0">
                                <Image src={Feature2} width={167} height={297} alt="img" quality={100} className="" />
                            </div>
                            <div className="flex-shrink-0">
                                <Image src={Feature1} width={167} height={297} alt="img" quality={100} className="" />
                            </div>
                            <div className="flex-shrink-0">
                                <Image src={Feature2} width={167} height={297} alt="img" quality={100} className="" />
                            </div>
                            <div className="flex-shrink-0">
                                <Image src={Feature2} width={167} height={297} alt="img" quality={100} className="" />
                            </div>

                            </div>
                        </div>


                        {/* More from collection  */}
                        <div className="flex flex-col gap-4 pt-10 ">
                            <div className="custom-text-grey800 all-caps-12 px-4">More from Cyberpunk</div>
                            <div className="grid grid-cols-2 small-border-y custom-border-grey800">
                                <ClothsHorizontalCarousel borderClass={'small-border-bottom small-border-right'}/>
                                <ClothsHorizontalCarousel borderClass={'small-border-bottom '}/>
                                <ClothsHorizontalCarousel borderClass={'small-border-bottom small-border-right'}/>
                                <ClothsHorizontalCarousel borderClass={'small-border-bottom '}/>
                                <ClothsHorizontalCarousel borderClass={'small-border-bottom small-border-right'}/>
                                <ClothsHorizontalCarousel borderClass={'small-border-bottom '}/>
                                <ClothsHorizontalCarousel borderClass={'small-border-bottom small-border-right'}/>
                                <ClothsHorizontalCarousel borderClass={'small-border-bottom '}/>
                                <ClothsHorizontalCarousel borderClass={'small-border-bottom small-border-right'}/>
                                <ClothsHorizontalCarousel borderClass={'small-border-bottom '}/>
                                <ClothsHorizontalCarousel borderClass={'small-border-bottom small-border-right'}/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 

export default SingleProductSection;