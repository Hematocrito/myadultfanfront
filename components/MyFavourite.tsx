import modelImage from 'public/assets/img/model.jpg';
import Image from 'next/image';
import { FiThumbsUp, FiEye } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import NavbarUsr from './NavbarUsr';

const MyFavourite = (props: { admin: "model" | "fans" }) => {
    return (
        <section>
            <NavbarUsr />
            <div className='w-full'>
                <div className='w-4/5 m-auto mt-20 font-sans '>
                    <h1 className='font-base text-2xl font-semibold mb-4'>My Favourite</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-10 mb-20 '>
                        <div>
                            <div className='h-[250px] relative '>
                                <Image src={modelImage} className='rounded-xl' alt="1" layout='fill' objectFit='cover' />
                                <div className='absolute flex justify-between items-center bottom-2  w-full px-3 text-white'>
                                    <div className='flex items-center gap-3'>
                                        <FiThumbsUp />
                                        <span>2</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <BiCommentDetail />
                                        <span>20</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FiEye />
                                        <span>105</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className='text-center font-bold text-xl text-gray-500'>Super Bowl 50</h1>
                        </div>
                        <div>
                            <div className='h-[250px] relative '>
                                <Image src={modelImage} className='rounded-xl' alt="1" layout='fill' objectFit='cover' />
                                <div className='absolute flex justify-between items-center bottom-2  w-full px-3 text-white'>
                                    <div className='flex items-center gap-3'>
                                        <FiThumbsUp />
                                        <span>2</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <BiCommentDetail />
                                        <span>20</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FiEye />
                                        <span>105</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className='text-center font-bold text-xl text-gray-500'>Super Bowl 50</h1>
                        </div>
                        <div>
                            <div className='h-[250px] relative '>
                                <Image src={modelImage} className='rounded-xl' alt="1" layout='fill' objectFit='cover' />
                                <div className='absolute flex justify-between items-center bottom-2  w-full px-3 text-white'>
                                    <div className='flex items-center gap-3'>
                                        <FiThumbsUp />
                                        <span>2</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <BiCommentDetail />
                                        <span>20</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FiEye />
                                        <span>105</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className='text-center font-bold text-xl text-gray-500'>Super Bowl 50</h1>
                        </div>
                        <div>
                            <div className='h-[250px] relative '>
                                <Image src={modelImage} className='rounded-xl' alt="1" layout='fill' objectFit='cover' />
                                <div className='absolute flex justify-between items-center bottom-2  w-full px-3 text-white'>
                                    <div className='flex items-center gap-3'>
                                        <FiThumbsUp />
                                        <span>2</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <BiCommentDetail />
                                        <span>20</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FiEye />
                                        <span>105</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className='text-center font-bold text-xl text-gray-500'>Super Bowl 50</h1>
                        </div>
                        <div>
                            <div className='h-[250px] relative '>
                                <Image src={modelImage} className='rounded-xl' alt="1" layout='fill' objectFit='cover' />
                                <div className='absolute flex justify-between items-center bottom-2  w-full px-3 text-white'>
                                    <div className='flex items-center gap-3'>
                                        <FiThumbsUp />
                                        <span>2</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <BiCommentDetail />
                                        <span>20</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FiEye />
                                        <span>105</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className='text-center font-bold text-xl text-gray-500'>Super Bowl 50</h1>
                        </div>
                        <div>
                            <div className='h-[250px] relative '>
                                <Image src={modelImage} className='rounded-xl' alt="1" layout='fill' objectFit='cover' />
                                <div className='absolute flex justify-between items-center bottom-2  w-full px-3 text-white'>
                                    <div className='flex items-center gap-3'>
                                        <FiThumbsUp />
                                        <span>2</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <BiCommentDetail />
                                        <span>20</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FiEye />
                                        <span>105</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className='text-center font-bold text-xl text-gray-500'>Super Bowl 50</h1>
                        </div>
                        <div>
                            <div className='h-[250px] relative '>
                                <Image src={modelImage} className='rounded-xl' alt="1" layout='fill' objectFit='cover' />
                                <div className='absolute flex justify-between items-center bottom-2  w-full px-3 text-white'>
                                    <div className='flex items-center gap-3'>
                                        <FiThumbsUp />
                                        <span>2</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <BiCommentDetail />
                                        <span>20</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FiEye />
                                        <span>105</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className='text-center font-bold text-xl text-gray-500'>Super Bowl 50</h1>
                        </div>



                    </div>
                </div>
            </div>
        </section >
    );
};

export default MyFavourite;