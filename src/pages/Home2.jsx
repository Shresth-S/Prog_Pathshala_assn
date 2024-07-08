import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import Clients from '../components/Clients';
import OurFeatures from '../components/OurFeatures';

const slides = [
    {
        url: "/Home_man_img.png",
        text: "Lessons and Insights"
    },
    {
        url: "/Home_man_img2.png",
        text: "hellohellohello"
    },
    {
        url: "/Home_man_img3.png",
        text: "ASDFGHJKL"
    },
    {
        url: "/Home_man_img4.png",
        text: "123456789"
    },
]

const Home2 = () => {
    SwiperCore.use([Navigation]);

    return (
        // <div className='bg-bgNeutralSilver'>
        //     <Swiper navigation>
        //         {
        //             slides.map(({url,text}) => (
        //                 <SwiperSlide>
        //                     <div className='h-[510px] flex justify-evenly gap-6 p-16 px-3 max-w-6xl mx-auto'>
        //                         <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        //                             <h1 className='text-slate9 font-bold text-3xl lg:text-6xl'>
        //                                 {text}
        //                                 <br />
        //                                 <span className='text-myGreen'>from 8 years</span>
        //                             </h1>
        //                             <div className='text-slate9'>
        //                                 Where to grow your business as a photographer: site or social media?
        //                             </div>
        //                             <button className='rounded-md bg-myGreen text-myWhite gap-2 py-3 px-7 hover:opacity-95 w-32 h-12'>
        //                                 Register
        //                             </button>
        //                         </div>

        //                         <div>
        //                             {/* <img src="./public/Home_man_img.png" alt="" className='h-96 w-96'/> */}
        //                             <img src={url} alt="" className='h-96 w-96'/>
        //                         </div>
        //                     </div>
        //                 </SwiperSlide>
        //             ))
        //         }
        //     </Swiper>

        //     <Clients />
            
        //     <OurFeatures />
    
        // </div>    
        <div className='bg-bgNeutralSilver w-full'>
        <Swiper navigation>
            {slides.map(({ url, text }) => (
                <SwiperSlide key={url}>
                    <div className='h-auto flex flex-col lg:flex-row justify-evenly gap-6 p-6 lg:p-16 max-w-6xl mx-auto'>
                        <div className='flex flex-col gap-6 p-6 lg:p-28 max-w-6xl mx-auto'>
                            <h1 className='text-slate9 font-bold text-2xl lg:text-6xl'>
                                {text}
                                <br />
                                <span className='text-myGreen text-xl lg:text-3xl'>from 8 years</span>
                            </h1>
                            <div className='text-slate9 text-sm lg:text-base'>
                                Where to grow your business as a photographer: site or social media?
                            </div>
                            <button className='rounded-md bg-myGreen text-myWhite gap-2 py-2 lg:py-3 px-4 lg:px-7 hover:opacity-95 w-32 h-12'>
                                Register
                            </button>
                        </div>

                        <div className='flex justify-center lg:justify-start'>
                            <img src={url} alt="" className='h-48 w-48 lg:h-96 lg:w-96' />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        <Clients />
        <OurFeatures />
    </div>

  )
}

export default Home2