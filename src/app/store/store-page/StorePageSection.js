import StoreFooter from "@/Components/StoreFooter";
import StoreImgAndClothsCompo from "@/Components/StoreImgAndClothsCompo";
import StoreNavbar from "@/Components/StoreNavbar";
import Homepage from '@/Images/Homepage/homepage-img.jpg';
import StoreImg2 from '@/Images/Store/store-img-2.jpg';
import StoreImg3 from '@/Images/Store/store-img-3.jpg';





function StorePageSection()
{
    return(
        <>
        <section className="w-full h-screen flex justify-center background-custom-grey50 overflow-hidden">
            <div className="page-center-parent-container small-border custom-border-grey600 overflow-y-scroll relative overflow-scrollbar-hidden">
                <StoreNavbar />
                <StoreImgAndClothsCompo imgName={Homepage} catagory={'Discover'} title={'CyberPUNK'}/>
                <StoreImgAndClothsCompo imgName={StoreImg2} catagory={'Discover'} title={'MAGMA'}/>
                <StoreImgAndClothsCompo imgName={StoreImg3} catagory={'Discover'} title={'EthiKz'}/>
                <StoreFooter/>
            </div>
        </section>
        </>
    )
}


export default StorePageSection;