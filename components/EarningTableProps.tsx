import { AiOutlineEdit, AiFillDelete, AiOutlinePlus } from "react-icons/ai";
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

const typeContent = (status: string) => {
    switch (status) {
        case "VOD":
            return <h1 className='text-white font-bold border-2 rounded-lg border-blue-450 bg-blue-450 p-1 text-center w-16 text-sm'>
                VOD
            </h1>;
        case "Monthly Subscription":
            return <h1 className='text-white font-bold border-2 rounded-lg border-purple-500 bg-purple-500 px-3 py-1 text-center w-fit text-sm'>
                Monthly Subscription
            </h1 >;
        case "TIPS":
            return <h1 className='text-white font-bold border-2 rounded-lg border-pink-500 bg-pink-500 px-3 py-1 text-center w-fit text-sm'>
                TIPS
            </h1 >;
        default:
            return <h1 className='font-semibold text-red-500 border-2 rounded-lg w-fit border-red-500 p-1.5 text-sm'>Error</h1>;
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
        username: <h1 className='text-black font-normal text-sm'>Mike Goodman</h1>,
        type: typeContent("Monthly Subscription"),
        gprice: <h1 className='text-black font-normal text-sm'>$4.95</h1>,
        commission: <h1 className='text-black font-normal text-sm'>50%</h1>,
        nprice: <h1 className='text-black font-normal text-sm'>$9.90</h1>,
        lupdate: <h1 className='text-black font-normal text-sm'>10/09/2020 17:39:14</h1>,
    },
    {
        username: <h1 className='text-black font-normal text-sm'>Mike Goodman</h1>,
        type: typeContent("VOD"),
        gprice: <h1 className='text-black font-normal text-sm'>$4.95</h1>,
        commission: <h1 className='text-black font-normal text-sm'>50%</h1>,
        nprice: <h1 className='text-black font-normal text-sm'>$9.90</h1>,
        lupdate: <h1 className='text-black font-normal text-sm'>10/09/2020 17:39:14</h1>,
    },
    {
        username: <h1 className='text-black font-normal text-sm'>Mike Goodman</h1>,
        type: typeContent("TIPS"),
        gprice: <h1 className='text-black font-normal text-sm'>$4.95</h1>,
        commission: <h1 className='text-black font-normal text-sm'>50%</h1>,
        nprice: <h1 className='text-black font-normal text-sm'>$9.90</h1>,
        lupdate: <h1 className='text-black font-normal text-sm'>10/09/2020 17:39:14</h1>,
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
        field: "username",
        use: "User name",

    },
    {
        field: "type",
        use: "Type",
        use_in_search: true,
        use_in_export: true
    },
    {
        field: "gprice",
        use: "Gross Price",
        //would not be exported as a CSV column
        use_in_export: true
    },
    {
        field: "commission",
        use: "Commission",
        //would not be exported as a CSV column
        use_in_export: true
    },

    {
        field: "nprice",
        use: "Net price",
        //would not be exported as a CSV column
        use_in_export: false
    },
    {
        field: "lupdate",
        use: "Last update",
        //would not be exported as a CSV column
        use_in_export: false
    },
];
