import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import React from 'react';



const statusContent = (status: string) => {
    switch (status) {
        case "inactive":
            return <h1 className='font-semibold text-red-500 border-2 rounded-lg w-fit border-red-500 p-1.5'>
                Inactive
            </h1>;
        case "active":
            return <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>
                Active
            </h1 >;
        default:
            return <h1 className='font-semibold text-red-500 border-2 rounded-lg w-fit border-red-500 p-1.5'>Error</h1>;
    }
}

export const tableStyling = {
    base_bg_color: "bg-blue-400",
    top: {
        title: "text-red-400 text-xs",
        elements: {
            bulk_select: {
                
            },
            export: "text-white",
        },
    },
    table_head: {
        table_data: "bg-white font-semibold",
    },
    table_body: {
        table_row: "text-black",
    },
    footer: {
        // main: "bg-yellow-700",
        statistics: {
            //main: "text-black",
            //bold_numbers:"text-yellow-800 font-thin"
        },
        page_numbers: " border-2 rounded-md text-blue-400 border-blue-400 m-0.5"
    }
};
interface Irow {
    [key: string]: any;
}
type Irows = Irow[];
export var rows: Irows = [
    {
        title: <h1 className=' font-semibold text-black'>zoom_o.mp4</h1>,
        fsale: <h1 className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>N</h1>,
        price: <h1 className='font-semibold text-black'>$0</h1>,
        status: statusContent("inactive"),
        lupdate: <h1 className='font-semibold text-black'>18/09/2020</h1>,
        actions: <div className="flex justify-start gap-2"><button className=" text-white font-semibold w-10 border-2 rounded-lg border-blue-450 bg-blue-450 transition outline outline-0 p-1.5"> <AiOutlineEdit className="w-6 h-6 m-auto" /> </button><button className="text-white font-semibold w-10 border-2 rounded-lg border-red-600 bg-red-600 transition outline outline-0 "> <AiFillDelete className="w-6 h-6 m-auto" /></button></div>,
    },
    {
        title: <h1 className=' font-semibold text-black'>Ryanville Hyundal Super Bowl Commercial 455 The 2017 Hyundai Elantra.mp4</h1>,
        fsale: <h1 className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>N</h1>,
        price: <h1 className='font-semibold text-black'>$0</h1>,
        status: statusContent("active"),
        lupdate: <h1 className='font-semibold text-black'>18/09/2020</h1>,
        actions: <div className="flex justify-start gap-2"><button className=" text-white font-semibold w-10 border-2 rounded-lg border-blue-450 bg-blue-450 transition outline outline-0 p-1.5"> <AiOutlineEdit className="w-6 h-6 m-auto" /> </button><button className="text-white font-semibold w-10 border-2 rounded-lg border-red-600 bg-red-600 transition outline outline-0 "> <AiFillDelete className="w-6 h-6 m-auto" /></button></div>,
    },
    {
        title: <h1 className=' font-semibold text-black'>MAT MÅNDAG - Fish & Chips (less than 1 minute video).mp4</h1>,
        fsale: <h1 className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>N</h1>,
        price: <h1 className='font-semibold text-black'>$0</h1>,
        status: <h1 className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Inactive</h1>,
        lupdate: <h1 className='font-semibold text-black'>18/09/2020</h1>,
        actions: <div className="flex justify-start gap-2"><button className=" text-white font-semibold w-10 border-2 rounded-lg border-blue-450 bg-blue-450 transition outline outline-0 p-1.5"> <AiOutlineEdit className="w-6 h-6 m-auto" /> </button><button className="text-white font-semibold w-10 border-2 rounded-lg border-red-600 bg-red-600 transition outline outline-0 "> <AiFillDelete className="w-6 h-6 m-auto" /></button></div>,
    },
    {
        title: <h1 className=' font-semibold text-black'>10 ecommerce marketplace tips from the experts.mp4</h1>,
        fsale: <h1 className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>N</h1>,
        price: <h1 className='font-semibold text-black'>$0</h1>,
        status: statusContent("active"),
        lupdate: <h1 className='font-semibold text-black'>18/09/2020</h1>,
        actions: <div className="flex justify-start gap-2"><button className=" text-white font-semibold w-10 border-2 rounded-lg border-blue-450 bg-blue-450 transition outline outline-0 p-1.5"> <AiOutlineEdit className="w-6 h-6 m-auto" /> </button><button className="text-white font-semibold w-10 border-2 rounded-lg border-red-600 bg-red-600 transition outline outline-0 "> <AiFillDelete className="w-6 h-6 m-auto" /></button></div>,
    },

];
interface Icolumn {
    //Used to get string data from the each row object
    field: string; //This field can have a full stop(.) will allow us to read further into nested objects


    //This will be used to display in the table heading.
    use: string;

    //Indicates that of this column should be used to search (optional). defaults to true.
    use_in_search?: boolean;

    //Indicates If this property should be used displayed in the table header (optional). defaults to true.
    use_in_display?: boolean;

    //Indicates if this field can be exported on the CSV (optional) defaults to true.
    use_in_export?: boolean;
}
;
type Icolumns = Icolumn[];
export var columns: Icolumns = [
    {
        field: "title",
        use: "Title",
        use_in_search: true,
        use_in_export: true
    },
    {
        field: "fsale",
        use: "For sale",
        use_in_export: true
    },
    {
        field: "price",
        use: "Price",

        //Will not be displayed in the table
        use_in_display: true,
        use_in_export: true
    },
    {
        field: "status",
        use: "Status",
        //would not be exported as a CSV column
        use_in_export: true
    },
    {
        field: "lupdate",
        use: "Last update",
        //would not be exported as a CSV column
        use_in_export: true
    },
    {
        field: "actions",
        use: "Actions",
        //would not be exported as a CSV column
        use_in_export: true
    },
];
