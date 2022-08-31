import Table from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css';
import { tableStyling, columns, rows } from 'components/EarningTableProps'
import { AiOutlinePlus } from "react-icons/ai";
import NavbarMod from 'components/NavbarMod';

export const EarningReport = (props: { admin: "model" | "fans" }) => {

    return (
        <section>
            <NavbarMod />
            <div className='w-full'>
                <div className='w-4/5 flex-1 m-auto mt-28 font-sans'>
                    <h1 className='font-base text-2xl font-semibold'>Earning Report</h1>
                    <div className='flex mt-5 w-full justify-between gap-4 sm:gap-0 overflow-scroll md:overflow-visible'>
                        <div className='flex gap-5 mb-5'>
                            {/* <input className='border-gray-400 rounded-lg border-[1px] p-3 h-[53px] self-end' type="text" placeholder='Enter Keyword' /> */}
                            <select className='border-gray-400 rounded-lg border-[1px] p-3 h-[42px] self-end' name="" id="">
                                <option value="">All</option>
                                <option value="">Subscription</option>
                                <option value="">Tips</option>
                                <option value="">VOD</option>
                            </select>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='flex flex-col'>
                                    <label className='text-gray-400' htmlFor="startdate">Start Date</label>
                                    <input className='text-gray-400 border-gray-400 rounded-lg border-[1px] p-2' type="date" id='startdate' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-gray-400' htmlFor="enddate">End Date</label>
                                    <input className=' text-gray-400 border-gray-400 rounded-lg border-[1px] p-2' type="date" id='enddate' />
                                </div>
                            </div>
                            <button className='h-[42px] self-end bg-blue-450 rounded-lg text-white font-semibold w-24 text-base'>Search</button>
                        </div>
                    </div>
                    <div className='mt-5 flex justify-between overflow-scroll md:overflow-visible'>
                        <div>
                            <h1 className='text-gray-500 text-center text-base p-1'>Total Gross Price</h1>
                            <h1 className='text-gray-500 text-center text-3xl font-bold'>$85.90</h1>
                        </div>
                        <div>
                            <h1 className='text-gray-500 text-center text-base p-1'>Admin earned</h1>
                            <h1 className='text-gray-500 text-center text-3xl font-bold'>$42.95</h1>
                        </div>
                        <div>
                            <h1 className='text-gray-500 text-center text-base p-1'>Performer earned</h1>
                            <h1 className='text-gray-500 text-center text-3xl font-bold'>$42.95</h1>
                        </div>
                    </div>
                    <Table styling={tableStyling} columns={columns} rows={rows} show_search={false} should_export={false} per_page={5} />
                </div>
            </div>
        </section>
    );
};

export default EarningReport;