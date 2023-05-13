import React, { useContext } from 'react'


import '../styles/Seats.scss'
import { MyContext } from '../ContextApi';

const Seats = () => {

    const { counter1, counter2, counter3, increment, decrement} = useContext(MyContext);
    
  return (
    <div className='select-seats-page-container'>
        <div className='selecting-box-container'>
            <div className='flex justify-center items-center'>
                <img  className='w-[676px] h-[369px]' src="https://s3-alpha-sig.figma.com/img/a26a/df6b/da9cb747914526c937476d4afa8de73b?Expires=1684713600&Signature=bWm2vc9mYURsZAfEt-IM9rErBUDHuysI5c~fp8cGVFuVEVP-7uYSc2f60e7Z132zH1PP5-oGZfaN1KBoxKjlobnMv9cC4M4SScmOtIHNIjxVgI24zvfNOOonNoSGgrXkbuf~PV3~8Nvk34t3Wmap4v11IYphZmjpXa-XsDqLTWVcJ3jYRVn99h6r0EBny220mZMDTmngmZhOyOWE2e26flDRAbIJbBwN4pPDhf4MKnmVrCKSWLHEQ7VFMe4B7uZedCuZk0LTdmzZgoik40OkKrWmiH25sLX0bS5lMoHXlF160OHP~wr1I8v9HWKSIRDhsmZgUihKg7EniK8okWHFUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="area" />
            </div>
            <div className='flex justify-between bg-[#DDDDDD] h-[45px] items-center'>
                <div>
                    <p className='ml-4 text-[#474747] text-lg font-bold underline'>Colour code</p>
                </div>
                <div className='w-1/4 flex justify-evenly'>
                    <div className='flex items-center'>
                        <p className='text-green-600 font-semibold text-lg'>H1 - </p>
                        <p className='w-[24px] h-[24px] bg-green-600 rounded-full ml-2'></p>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-orange-500 font-semibold text-lg'>H2 - </p>
                        <p className='w-[24px] h-[24px] bg-orange-600 rounded-full ml-2'></p>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-gray-500 font-semibold text-lg'>H3 - </p>
                        <p className='w-[24px] h-[24px] bg-gray-600 rounded-full ml-2'></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='no-of-items-container'>
            <div className='area-count-container h-[83px]'>
                <div className='flex text-green-600'>
                    <p className='numbers'>₹55000</p>
                    <p className='numbers'>32 sq mt</p>
                </div>
                <div className='flex items-center'>
                    <img className='icons' onClick={() => increment(1)} src='https://s3-alpha-sig.figma.com/img/e00e/b4b7/1959ae664069225f4865575837e87e9f?Expires=1684713600&Signature=Bw75TvVQ9wBDBUsaMWMG7lUZdHiIQx-byaf37svpC15hejhPYaKByT0Wbc~Fr-qfhjg5myPSBpRg9H9lldpqFB6q5bhQOrNHvr-T8bVVU~XPMs1vVbupC1ooSOVBmBgnqgykwOhzweCMaGWAfhtiL7faDeKJbbMfCZfbHHmeHymCoI4a60suceGw835hHtnIUVAekCEo0BYjEenNmgK1Iw4trdDqMAUYd6vVhdVAjPo7cc46E6xdb~cjPggv-hbsggZY1QMoEVIoR87-uG4KAQu36aJ1BGI366k~XY1L-zDUPV63T4cTTIeufvSZbyiSOxFO~dmbbZ~S41Fukrb4RQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='plus'/>
                    <p>{counter1}</p>
                    <img className='icons' onClick={() => decrement(1)} src='https://s3-alpha-sig.figma.com/img/81ce/3ffd/1278331d005b14c43c84f308e249ebe3?Expires=1684713600&Signature=ctcJVSbZ2yktIHU5Ln9e3DYfR~saL04NDmhtx8mAh63vBu1AX30kqS6QjkBi6~HkQ12CjJId6LdAbfVdUEA-J3UDysdYVN2d2yEYE2WQGZJzKAqlu2w-bGSUCo2-nL6cImW5kmDPaP9DJBYvr9u-kQUPCVPsjdCIS5~40dvrJw~82e4Osg5ntfTesBR164R9HVFPu11IS~R8snmCTZxXkXRpsX3qIVnvQJaQUG4JW24mYXHPoMjJfLTJ9NrVJJgAKl44wR4L3jUr50WxNauonLTkv97T3CN76AyfBwdih4204HJgIC9meIx9yYuqBxO0C50qA2vQmyXLMvtAmkfSBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='minus'/>
                </div>
            </div>
            <div className='area-count-container h-[49px]'>
                <div className='flex text-orange-600'>
                    <p className='numbers'>₹35000</p>
                    <p className='numbers'>24 sq mt</p>
                </div>
                <div className='flex items-center'>
                    <img className='icons' onClick={() => increment(2)} src='https://s3-alpha-sig.figma.com/img/e00e/b4b7/1959ae664069225f4865575837e87e9f?Expires=1684713600&Signature=Bw75TvVQ9wBDBUsaMWMG7lUZdHiIQx-byaf37svpC15hejhPYaKByT0Wbc~Fr-qfhjg5myPSBpRg9H9lldpqFB6q5bhQOrNHvr-T8bVVU~XPMs1vVbupC1ooSOVBmBgnqgykwOhzweCMaGWAfhtiL7faDeKJbbMfCZfbHHmeHymCoI4a60suceGw835hHtnIUVAekCEo0BYjEenNmgK1Iw4trdDqMAUYd6vVhdVAjPo7cc46E6xdb~cjPggv-hbsggZY1QMoEVIoR87-uG4KAQu36aJ1BGI366k~XY1L-zDUPV63T4cTTIeufvSZbyiSOxFO~dmbbZ~S41Fukrb4RQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='plus'/>
                    <p>{counter2}</p>
                    <img className='icons' onClick={() => decrement(2)} src='https://s3-alpha-sig.figma.com/img/81ce/3ffd/1278331d005b14c43c84f308e249ebe3?Expires=1684713600&Signature=ctcJVSbZ2yktIHU5Ln9e3DYfR~saL04NDmhtx8mAh63vBu1AX30kqS6QjkBi6~HkQ12CjJId6LdAbfVdUEA-J3UDysdYVN2d2yEYE2WQGZJzKAqlu2w-bGSUCo2-nL6cImW5kmDPaP9DJBYvr9u-kQUPCVPsjdCIS5~40dvrJw~82e4Osg5ntfTesBR164R9HVFPu11IS~R8snmCTZxXkXRpsX3qIVnvQJaQUG4JW24mYXHPoMjJfLTJ9NrVJJgAKl44wR4L3jUr50WxNauonLTkv97T3CN76AyfBwdih4204HJgIC9meIx9yYuqBxO0C50qA2vQmyXLMvtAmkfSBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='minus'/>
                </div>
            </div>
            <div className='area-count-container h-[49px]'>
                <div className='flex text-gray-600'>
                    <p className='numbers'>₹25000</p>
                    <p className='numbers'>18 sq mt</p>
                </div>
                <div className='flex items-center'>
                    <img className='icons' onClick={() => increment(3)} src='https://s3-alpha-sig.figma.com/img/e00e/b4b7/1959ae664069225f4865575837e87e9f?Expires=1684713600&Signature=Bw75TvVQ9wBDBUsaMWMG7lUZdHiIQx-byaf37svpC15hejhPYaKByT0Wbc~Fr-qfhjg5myPSBpRg9H9lldpqFB6q5bhQOrNHvr-T8bVVU~XPMs1vVbupC1ooSOVBmBgnqgykwOhzweCMaGWAfhtiL7faDeKJbbMfCZfbHHmeHymCoI4a60suceGw835hHtnIUVAekCEo0BYjEenNmgK1Iw4trdDqMAUYd6vVhdVAjPo7cc46E6xdb~cjPggv-hbsggZY1QMoEVIoR87-uG4KAQu36aJ1BGI366k~XY1L-zDUPV63T4cTTIeufvSZbyiSOxFO~dmbbZ~S41Fukrb4RQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='plus'/>
                    <p>{counter3}</p>
                    <img className='icons' onClick={() => decrement(3)} src='https://s3-alpha-sig.figma.com/img/81ce/3ffd/1278331d005b14c43c84f308e249ebe3?Expires=1684713600&Signature=ctcJVSbZ2yktIHU5Ln9e3DYfR~saL04NDmhtx8mAh63vBu1AX30kqS6QjkBi6~HkQ12CjJId6LdAbfVdUEA-J3UDysdYVN2d2yEYE2WQGZJzKAqlu2w-bGSUCo2-nL6cImW5kmDPaP9DJBYvr9u-kQUPCVPsjdCIS5~40dvrJw~82e4Osg5ntfTesBR164R9HVFPu11IS~R8snmCTZxXkXRpsX3qIVnvQJaQUG4JW24mYXHPoMjJfLTJ9NrVJJgAKl44wR4L3jUr50WxNauonLTkv97T3CN76AyfBwdih4204HJgIC9meIx9yYuqBxO0C50qA2vQmyXLMvtAmkfSBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='minus'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seats