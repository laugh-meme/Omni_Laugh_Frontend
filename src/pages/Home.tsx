import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'

import site1 from '../assets/site1.png'
import site2 from '../assets/site2.png'

import CardComp from '../components/CardComponent/CardComponent';

const Home = () => {
    return (
        <>
            <div className='bg-brand-color-foreground rounded-xl mx-1'>
                <section className='py-5 px-5 mx-1 rounded-xl'>
                    <div className='bg-brand-color-secondary px-3 rounded-xl'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={15}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },  // xs
                                640: { slidesPerView: 2 },  // sm
                                768: { slidesPerView: 2 },  // md
                                1024: { slidesPerView: 3 },  // lg
                                1280: { slidesPerView: 4 },  // xl
                            }}
                            modules={[Pagination]}
                            className=""
                        >
                            <SwiperSlide className=''>
                                <CardComp title={'Upcoming projects and brief highlights'} />
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <CardComp title={'Upcoming projects and brief highlights'} />
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <CardComp title={'Upcoming projects and brief highlights'} />
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <CardComp title={'Upcoming projects and brief highlights'} />
                            </SwiperSlide>




                        </Swiper>
                    </div>

                </section>

                <section className='flex flex-col sm:flex-row justify-around items-center bg-brand-color-primary rounded-xl py-10 px-5'>
                    <div className='flex flex-col '>
                        <button
                            type="button"
                            id='claim-button'
                            className="text-white border border-white hover:bg-white hover:text-black transition-colors duration-200 rounded-lg text-center text-xl py-2 px-4 cursor-pointer ">
                            Claim your free NFT
                        </button>
                        <img src={site1} alt='Random' className='w-80 sm:w-100' />
                    </div>
                    <div className='flex flex-col '>
                        <img src={site2} alt='Random' className='w-80 sm:w-100 mb-6' />
                        <button
                            type="button"
                            id='stake-button'
                            className="text-white border border-white hover:bg-white hover:text-black transition-colors duration-200 rounded-lg text-center text-xl py-2 px-4 cursor-pointer">
                            Stake $lmao to earn rewards
                        </button>
                    </div>
                   

                </section>

                <section className='flex flex-col py-5 w-full'>
                    <div className='self-end flex flex-col pr-5 text-center w-65 sm:w-1/2 lg:w-2/4 mb-10 mr-2 lg:mr-35'>
                        <span className="bg-brand-color-primary text-brand-color-secondary rounded-lg text-lg sm:text-2xl font-semibold py-2 px-2 mb-3">About Omni Laugh</span> <br />
                        <span className="bg-brand-color-primary text-brand-color-secondary rounded-lg text-lg sm:text-2xl font-semibold py-2 px-2">$LMAO TOKENOMICS</span>
                    </div>

                    <div className='self-start flex flex-col items-center w-80 sm:w-1/2 lg:w-2/4 ml-2 lg:ml-35'>
                        <span className='text-4xl sm:text-5xl md:text-6xl font-bold italic font-mono'>Roadmap</span>
                        <div className='flex flex-col items-center bg-brand-color-primary rounded-lg w-full py-3'>
                            
                            <div className="bg-gray-600 border border-gray-300 rounded-sm w-1/3 py-2 sm:py-3 mr-10 mb-2 sm:mb-3"></div>
                            <div className="bg-teal-400 border border-gray-300 rounded-sm w-1/3 py-2 sm:py-3 mb-2 sm:mb-3"></div>
                            <div className="bg-orange-400 border border-gray-300 rounded-sm w-1/3 py-2 sm:py-3 mb-2 sm:mb-3"></div>
                            <div className="bg-amber-300 border border-gray-300 rounded-sm w-1/3 py-2 sm:py-3 ml-10 mb-2 sm:mb-3"></div>
                            <div className="bg-indigo-700 border border-gray-300 rounded-sm w-1/3 py-2 sm:py-3 mr-10 mb-2 sm:mb-3"></div>
                            <div className="bg-pink-400 border border-gray-300 rounded-sm w-1/3 py-2 sm:py-3 ml-10 mb-2 sm:mb-3"></div>
                            <div className="bg-violet-500 border border-gray-300 rounded-sm w-1/3 py-2 sm:py-3 mb-0"></div>


                        </div>
                    </div>

                </section>

            </div>


            {/* <section className='row bg-brand-foreground mx-2 mt-2 py-5 px-4 px-sm-5 rounded-4'>
                <div className='bg-brand-secondary py-4 px-4 rounded-4'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={15}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                            0:     { slidesPerView: 1 },  // xs
                            576:   { slidesPerView: 2 },  // sm
                            768:   { slidesPerView: 2 },  // md
                            992:   { slidesPerView: 3 },  // lg
                            1200:  { slidesPerView: 4 },  // xl
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide >
                            <CardComp title={'Upcoming projects and brief highlights'} />
                        </SwiperSlide>
                        <SwiperSlide >
                            <CardComp title={'Upcoming projects and brief highlights'} />
                        </SwiperSlide>
                        <SwiperSlide >
                            <CardComp title={'Upcoming projects and brief highlights'} />
                        </SwiperSlide>
                        <SwiperSlide >
                            <CardComp title={'Upcoming projects and brief highlights'} />
                        </SwiperSlide>
                        <SwiperSlide >
                            <CardComp title={'Upcoming projects and brief highlights'} />
                        </SwiperSlide>
                        <SwiperSlide >
                            <CardComp title={'Upcoming projects and brief highlights'} />
                        </SwiperSlide>
                        <SwiperSlide >
                            <CardComp title={'Upcoming projects and brief highlights'} />
                        </SwiperSlide>
                        <SwiperSlide >
                            <CardComp title={'Upcoming projects and brief highlights'} />
                        </SwiperSlide>
                    </Swiper>     
                </div>
            </section>
            <section className='row mx-1 px-4 px-sm-5 rounded-4'>
                <div className='col-6 p-0 m-0 d-flex flex-column justify-content-center align-items-center'>
                    <button className='btn btn-outline-light font-monospace' style={{fontSize: '12px'}}>Stake $lmao to earn rewards</button>
                    <img src='../src/assets/site2.png' alt='Random' className='img-fluid w-100' />
                </div>
                <div className='col-6 p-0 m-0 d-flex flex-column justify-content-center align-items-center'>
                    <img src='../src/assets/site1.png' alt='Random' className='img-fluid w-100' />
                    <button className='btn btn-outline-light font-monospace'  style={{fontSize: '12px'}}>Claim your free NFT</button>
                </div>
            </section>
            <section className='row bg-brand-foreground mx-2 mt-2 py-5 px-3 px-sm-5 rounded-4'>
                <div className='col-4 col-sm-6'>
                 
                </div>
                <div className='col-8 col-sm-6 text-end'>
                    <span className="badge fs-5 w-100 text-brand-secondary bg-brand-primary mb-3">About Omni Laugh</span> <br />
                    <span className="badge fs-5 w-100 text-brand-secondary bg-brand-primary">$LMAO TOKENOMICS</span>
                </div>

                <div className='col-10 px-0 text-center mt-4'>
                    <span className='display-4 fw-bolder fst-italic'>Roadmap</span>
                    <div className='roadmap-box d-flex flex-column align-items-center rounded-4 bg-brand-primary w-100 mt-3'>
                        <span className="roadmap-badge mt-4" style={{backgroundColor: '#1971c2', marginRight: '100px'}}></span>
                        <span className="roadmap-badge mt-3 border border-1" style={{backgroundColor: '#12b886', marginRight: ''}}></span>
                        <span className="roadmap-badge mt-3 border border-1" style={{backgroundColor: '#40c057', marginRight: ''}}></span>
                        <span className="roadmap-badge mt-3 border border-1" style={{backgroundColor: '#69db7c', marginRight: '-100px'}}></span>
                        <span className="roadmap-badge mt-3 border border-1" style={{backgroundColor: '#99e9f2', marginRight: '50px'}}></span>
                        <span className="roadmap-badge mt-3 border border-1" style={{backgroundColor: '#f783ac', marginRight: '-100px'}}></span>
                        <span className="roadmap-badge mt-3 mb-3 border border-1" style={{backgroundColor: '#9775fa', marginRight: '50px'}}></span>

                    </div>
                </div>

                <div className='col-2 text-end'>
                    
                </div>

            </section> */}
        </>
    );
}

export default Home;