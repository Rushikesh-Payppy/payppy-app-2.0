
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';

//pepcoin
import Pepcoin from '@/Images/Homepage/pepcoin-icon.svg';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function Page()
{
    return(
        <>
        <section className={"w-full h-screen flex justify-center background-custom-grey100 "+plus_jakarta_sans.className}>
            <div className="page-center-parent-container background-custom-white px-6 small-border custom-border-grey600 flex justify-center items-center ">
                
                <div className="flex flex-col gap-3 items-center">
                    <h2 className="heading-h2 custom-text-grey900 text-center">Welcome to Payppy</h2>
                    <p className="body-sm custom-text-grey700 text-center">You have earned 50 pepcoins for becoming a member</p>
                    <div className="flex items-center py-1 px-2 small-border custom-border-grey600  rounded-full gap-1">
                        <Image src={Pepcoin} width={14} height={14} alt='img' quality={100} className='' />
                        <div className="all-caps-14-bold">50</div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}

export default Page;