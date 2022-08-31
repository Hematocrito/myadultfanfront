import React from "react";

interface Status {
    status: string,
}


const statusContent = (status: string) => {
    switch (status) {
        case "pending":
            return <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>
                Pending
            </h1>;
        case "success":
            return <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>
                Success
            </h1 >;
        default:
            return <h1 className='font-semibold text-red-500 border-2 rounded-lg w-fit border-red-500 p-1.5'>Error</h1>;
    }
}

const typeContent = (status: string) => {
    switch (status) {
        case "VOD":
            return <h1 className='text-white font-bold border-2 rounded-lg border-blue-450 bg-blue-450 p-1 text-center w-16'>
                VOD
            </h1>;
        case "Monthly Subscription":
            return <h1 className='text-white font-bold border-2 rounded-lg border-purple-500 bg-purple-500 px-3 py-1 text-center w-fit'>
                Monthly Subscription
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
            bulk_select: {},
        }
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
        id: <h1>5786F4C8</h1>,
        model: <h1 >Brandi Love</h1>,
        desc: <h1 className=' font-semibold text-blue-450'>Purchase video</h1>,
        type: typeContent("Monthly Subscription"),
        oPrice: <h1>$9.90</h1>,
        tPrice: <h1>$9.90</h1>,
        disc: <h1></h1>,
        status: statusContent("success"),
        purchased: <h1>31/08/2020 20:05:27</h1>,
    },
    {
        id: <h1>5786F4C8</h1>,
        model: <h1 >Brandi Love</h1>,
        desc: <h1 className=' font-semibold text-blue-450'>Purchase video</h1>,
        type: typeContent("Monthly Subscription"),
        oPrice: <h1>$9.90</h1>,
        tPrice: <h1>$9.90</h1>,
        disc: <h1></h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Success</h1>,
        purchased: <h1>31/08/2020 20:05:27</h1>,
    },
    {
        id: <h1>5786F4C8</h1>,
        model: <h1 >Brandi Love</h1>,
        desc: <h1 className=' font-semibold text-blue-450'>Purchase video</h1>,
        type: typeContent("VOD"),
        oPrice: <h1>$9.90</h1>,
        tPrice: <h1>$9.90</h1>,
        disc: <h1></h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Success</h1>,
        purchased: <h1>31/08/2020 20:05:27</h1>,
    },
    {
        id: <h1>5786F4C8</h1>,
        model: <h1 >Brandi Love</h1>,
        desc: <h1 className=' font-semibold text-blue-450'>Purchase video</h1>,
        type: typeContent("Monthly Subscription"),
        oPrice: <h1>$9.90</h1>,
        tPrice: <h1>$9.90</h1>,
        disc: <h1></h1>,
        status: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Pending</h1>,
        purchased: <h1>31/08/2020 20:05:27</h1>,
    },
    {
        id: <h1>5786F4C8</h1>,
        model: <h1 >Brandi Love</h1>,
        desc: <h1 className=' font-semibold text-blue-450'>Purchase video</h1>,
        type: typeContent("VOD"),
        oPrice: <h1>$9.90</h1>,
        tPrice: <h1>$9.90</h1>,
        disc: <h1></h1>,
        status: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Pending</h1>,
        purchased: <h1>31/08/2020 20:05:27</h1>,
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
        field: "id",
        use: "Id",
        use_in_search: true
    },
    {
        field: "model",
        use: "Model",
    },
    {
        field: "desc",
        use: "Description",

        //Will not be displayed in the table
        use_in_display: true
    },
    {
        field: "type",
        use: "Type",
        //would not be exported as a CSV column
        use_in_export: true
    },
    {
        field: "oPrice",
        use: "Original Price",
        //would not be exported as a CSV column
        use_in_export: true
    },
    {
        field: "tPrice",
        use: "Total Price",
        //would not be exported as a CSV column
        //use_in_export: true
    },
    {
        field: "disc",
        use: "Discount",
        //would not be exported as a CSV column
        //use_in_export: true
    },
    {
        field: "status",
        use: "Status",
        //would not be exported as a CSV column
        //use_in_export: true
    },
    {
        field: "purchased",
        use: "Purchased at",
        //would not be exported as a CSV column
        //use_in_export: true
    }
];
