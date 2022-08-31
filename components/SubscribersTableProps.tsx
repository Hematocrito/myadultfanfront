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
        user: <h1 className=' font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
    },
    {
        user: <h1 className='font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
    },
    {
        user: <h1 className='font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
    },
    {
        user: <h1 className='font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
    },
    {
        user: <h1 className='font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
    },
    {
        user: <h1 className='font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
    },
    {
        user: <h1 className='font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
    },
    {
        user: <h1 className='font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
    },
    {
        user: <h1 className='font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
    },
    {
        user: <h1 className='font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
    },
    {
        user: <h1 className='font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
    },
    {
        user: <h1 className='font-semibold text-blue-450'>Freddy</h1>,
        type: <h1 className='font-semibold text-yellow-400 border-2 rounded-lg w-fit border-yellow-400 p-1.5'>Monthly Subscription</h1>,
        status: <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Active</h1>,
        eDate: "18/09/2020",
        nRdate: "18/09/2020",
        lUat: "10/09/2020 17:22:53",
        actions: <button className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>Cancel Subscription</button>,
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
        field: "user",
        use: "User",
        use_in_search: true
    },
    {
        field: "type",
        use: "Type",
    },
    {
        field: "status",
        use: "Status",

        //Will not be displayed in the table
        use_in_display: true
    },
    {
        field: "eDate",
        use: "Expired Date",
        //would not be exported as a CSV column
        use_in_export: true
    },
    {
        field: "nRdate",
        use: "Next Recurring Date",
        //would not be exported as a CSV column
        use_in_export: true
    },
    {
        field: "lUat",
        use: "Last Updated At",
        //would not be exported as a CSV column
        use_in_export: true
    }
    
];
