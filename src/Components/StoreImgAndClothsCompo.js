import Image from 'next/image';
import ClothsHorizontalCarousel from './ClothsHorizontalCarousel';

function StoreImgAndClothsCompo({imgName,catagory,title})
{
    return(
        <>
        <div className="h-full">
            <div className="h-[60%] relative flex justify-center items-center">
                <Image src={imgName} width={400} height={675} alt='img' quality={100} className='w-full h-full absolute z-0 object-cover top-0 left-0' />
                <div className="flex flex-col gap-2 items-center relative z-1">
                    <div className="all-caps-10 custom-text-white">{catagory}</div>
                    <div className="all-caps-14-bold custom-text-white">{title}</div>
                </div>
            </div>
            <div className="h-[40%] flex overflow-x-scroll overflow-scrollbar-hidden ">
                <ClothsHorizontalCarousel containerWidth={' min-w-[40%] '}/>
                <ClothsHorizontalCarousel containerWidth={' min-w-[40%] '}/>
                <ClothsHorizontalCarousel containerWidth={' min-w-[40%] '}/>
                <ClothsHorizontalCarousel containerWidth={' min-w-[40%] '}/>
                <ClothsHorizontalCarousel containerWidth={' min-w-[40%] '}/>
                <ClothsHorizontalCarousel containerWidth={' min-w-[40%] '}/>
                <ClothsHorizontalCarousel containerWidth={' min-w-[40%] '}/>
                <ClothsHorizontalCarousel containerWidth={' min-w-[40%] '}/>
                <ClothsHorizontalCarousel containerWidth={' min-w-[40%] '}/>
                <ClothsHorizontalCarousel containerWidth={' min-w-[40%] '}/>

            </div>


        </div>
        </>
    )
}

export default StoreImgAndClothsCompo;