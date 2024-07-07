import React from 'react'
import End from './End'

const OurFeatures = () => {
    return (
        <div className="p-4 bg-bgWhite gap-4 h-96">
            <div className='w-4/5 flex justify-evenly mx-auto'>
                <div className='-mt-10 ml-8'>
                    <img className='h-82 w-96' src="/OurFeatures_Images/img1.png" alt="" />
                </div>
                
                <div className='flex flex-col w-1/2 h-72 gap-8'>
                    <h2 className='text-neutral7 text-4xl font-semibold text-left'>
                        The unseen of spending three years at Pixelgrade
                    </h2>

                    <div className='text-neutral5 font-normal text-sm text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet ris
                        us pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </div>

                    <button className='bg-myGreen text-myWhite text-base font-normal text-center w-36 h-12 py-3 px-4 gap-2 rounded-md'>
                        Learn More
                    </button>
                </div>
            </div>
            
            <div className='bg-bgNeutralSilver h-64'>
                <div className='flex justify-evenly pt-12 px-36 mt-24 mx-auto gap-20'>
                    <div className='pl-24 w-1/2 font-semibold text-4xl text-left text-neutral7'>
                        Helping a local <br />
                        <span className='text-myGreen'>business reinvent itself</span> <br />
                        <span className='text-zinc9 text-base font-normal text-left'> We reached here with our hard work and dedication </span>
                    </div>

                    <div className='w-1/2 flex flex-wrap gap-10'>
                        <div className='flex gap-3'>
                            <img className='w-12 h-9 mt-2' src="/Stats_Images/img1.png" alt="" />  

                            <div className='flex flex-col'>
                                <span className='text-zinc9 text-2xl text-left font-bold'>2,245,341</span>
                                <span className='text-neutral6 font-normal text-base text-left'>Members</span>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <img className='w-12 h-9 mt-2' src="/Stats_Images/img2.png" alt="" />  

                            <div className='flex flex-col'>
                                <span className='text-zinc9 text-2xl text-left font-bold'>463,278</span>
                                <span className='text-neutral6 font-normal text-base text-left'>Clubs</span>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <img className='w-12 h-10 mt-2' src="/Stats_Images/img3.png" alt="" />  

                            <div className='flex flex-col'>
                                <span className='text-zinc9 text-2xl text-left font-bold'>828,867</span>
                                <span className='text-neutral6 font-normal text-base text-left'>Event Bookings</span>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <img className='w-12 h-10 mt-2' src="/Stats_Images/img4.png" alt="" />  

                            <div className='flex flex-col'>
                                <span className='text-zinc9 text-2xl text-left font-bold'>1,926,436</span>
                                <span className='text-neutral6 font-normal text-base text-left'>Payments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-bgWhite mt-7 w-full h-[460px] '>
                <div className='w-full flex justify-evenly mx-auto p-4 py-16'>
                    <div className='ml-8'>
                        <img className='h-80 w-96' src="/OurFeatures_Images/img2.png" alt="" />
                    </div>
                    
                    <div className='flex flex-col w-1/2 h-72 gap-8'>
                        <h2 className='text-neutral7 text-4xl font-semibold text-left'>
                            How to design your site footer like we did
                        </h2>

                        <div className='text-neutral5 font-normal text-sm text-left'>
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est,
                            finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                        </div>

                        <button className='bg-myGreen text-myWhite text-base font-normal text-center w-36 h-12 py-3 px-4 gap-2 rounded-md'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            

            <div className='bg-bgNeutralSilver h-96'>
                <div className='flex justify-evenly px-36 mt-24 mx-auto gap-20'>
                    <div className='pl-24 '>
                        <img className='rounded-lg w-80 h-72' src="/OurFeatures_Images/Tesla_logo.png" alt="" />
                    </div>

                    <div className='w-2/3 flex flex-col'>
                        <div className='text-neutral6 font-normal text-base text-left'>
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                            eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </div>
                        <div className='text-myGreen font-semibold text-xl text-left'>
                            Tim Smith
                        </div>

                        <div className='text-gray4 text-base font-normal text-left'>
                            British Dragon Boat Racing Association
                        </div>
                        <br />
                        <div className='flex justify-between gap-3'>
                            <img className='w-11 h-7' src="/brand_Partners/bp1.png" alt="" />
                            <img className='w-11 h-7' src="/brand_Partners/bp2.png" alt="" />
                            <img className='w-11 h-7' src="/brand_Partners/bp3.png" alt="" />
                            <img className='w-11 h-7' src="/brand_Partners/bp4.png" alt="" />
                            <img className='w-11 h-7' src="/brand_Partners/bp5.png" alt="" />
                            <img className='w-11 h-7' src="/brand_Partners/bp6.png" alt="" />
                            <img className='w-11 h-7' src="/brand_Partners/bp7.png" alt="" />

                            <button className='flex h-11 w-56 gap-2 -mt-1'>
                                <span className='text-myGreen text-xl text-left font-semibold'>Meet all customers</span>
                                <img className='h-6 w-6 mt-1' src="/OurFeatures_Images/arrow.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col bg-bgWhite mt-7 w-full py-12'>
                <div className='mx-auto'>
                    <div className='text-neutral7 font-semibold text-4xl text-center'>Caring is the new marketing</div>
                    <div className='text-neutral6 max-w-[628px] text-center pt-4'>
                        The Nexcent blog is the best place to read about the latest membership insights, trends and more.
                        See who's joining the community, read about how our community are increasing their membership income and lot's more.
                    </div>
                </div>

                <div className='flex justify-center gap-10 mt-4'>
                    <div className=''>
                        <img className='h-72 w-96 rounded-lg' src="/Caring_Images/img1.png" alt="" />
                        <div className='mx-auto flex flex-col bg-bgNeutralSilver h-44 w-80 pt-4 rounded-lg shadow-xl relative -top-24 left-0.5 p-4'>

                            <div className='text-center text-xl font-semibold text-neutral6'>
                                Creating Streamlined Safeguarding Processes with OneRen
                            </div>
                            <button className='flex h-11 mx-auto gap-2 mt-2'>
                                <span className='text-myGreen text-xl text-left font-semibold'>Readmore</span>
                                <img className='text-center h-6 w-6 mt-1' src="/OurFeatures_Images/arrow.png" alt="" />
                            </button>
                        </div>
                    </div>

                    <div className=''>
                        <img className='h-72 w-96 rounded-lg' src="/Caring_Images/img2.png" alt="" />
                        <div className='mx-auto flex flex-col bg-bgNeutralSilver h-44 w-80 pt-4 rounded-lg shadow-xl relative -top-24 left-0.5 p-4'>

                            <div className='text-center text-xl font-semibold text-neutral6'>
                                What are your safeguarding responsibilities and how can you manage them?
                            </div>
                            <button className='flex h-11 mx-auto gap-2 mt-2'>
                                <span className='text-myGreen text-xl text-left font-semibold'>Readmore</span>
                                <img className='text-center h-6 w-6 mt-1' src="/OurFeatures_Images/arrow.png" alt="" />
                            </button>
                        </div>
                    </div>

                    <div className=''>
                        <img className='h-72 w-96 rounded-lg' src="/Caring_Images/img3.png" alt="" />
                        <div className='mx-auto flex flex-col bg-bgNeutralSilver h-44 w-80 pt-4 rounded-lg shadow-xl relative -top-24 left-0.5 p-7'>

                            <div className='text-center text-xl font-semibold text-neutral6'>
                                Revamping the Membership Model with Triathlon Australia
                            </div>
                            <button className='flex h-11 mx-auto gap-2 mt-2'>
                                <span className='text-myGreen text-xl text-left font-semibold'>Readmore</span>
                                <img className='text-center h-6 w-6 mt-1' src="/OurFeatures_Images/arrow.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-bgWhite h-72 -mt-4 pb-8 flex flex-col'>
                <div className='mx-auto text-center text-6xl font-semibold w-[880px] h-40 px-24 leading-tight text-slate-600'>
                    Pellentesque suscipit fringilla libero eu.
                </div>

                <button className='bg-myGreen py-3 w-40 px-8 gap-2 rounded-md text-center mx-auto my-auto'>
                    <span className='text-myWhite text-base text-center font-medium'>Get  a Demo</span>
                </button>
            </div>
            
            <End />
        </div>

  )
}

export default OurFeatures