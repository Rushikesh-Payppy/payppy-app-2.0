//header images
import CloseIcon from '@/Images/Store/close-icon.svg';
import Pepcoin from '@/Images/Homepage/pepcoin-icon.svg';
import Share from '@/Images/Store/share-icon.svg';
import Store from '@/Images/Homepage/store-icon.svg';
import Image from 'next/image';

function StoreShopPepoinNavbar({pepcoin=false,share=false,store=false}) {
    return (
        <>
            <div className="flex items-center justify-between py-3 px-4 background-custom-white">
                <Image src={CloseIcon} width={20} height={20} alt="img" quality={100} className="" />
                <div className="flex items-center gap-4">
                   {pepcoin&& <div className="flex items-center gap-0.5 small-border rounded-full py-1 px-2 custom-border-grey400">
                        <Image src={Pepcoin} width={20} height={20} alt="img" quality={100} className="" />
                        <div className="all-caps-12-bold custom-text-grey800"> 230 </div>
                    </div>}
                   {share&& <Image src={Share} width={20} height={20} alt="img" quality={100} className="" />}
                   {store&& <Image src={Store} width={20} height={20} alt="img" quality={100} className="" />}
                </div>
            </div>

        </>
    )
}

export default StoreShopPepoinNavbar;