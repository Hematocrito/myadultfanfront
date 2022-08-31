export const tableStyling = {
    base_bg_color: "bg-blue-400",
    top: {
        title: "text-red-400 text-xs",
        elements: {
            bulk_select: {},
        }
    },
    table_head: {
        table_data: "bg-white font-light",
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
        foto: <img src="/assets/img/fake.jpeg" width={50} height={50} className='rounded-full' />,
        user: <p className="text-xs md:text-sm">Armando Bardo</p>,
        reason: <p className="text-xs md:text-sm">Disturbing</p>,
        eDate: <p className="text-xs md:text-sm">18/09/2020</p>,
        actions: <button className='h-[35px] bg-blue-450 rounded-lg text-white font-light w-24 text-xs md:text-sm'>Unblock</button>,
    },
    {
        foto: <img src="/assets/img/fake.jpeg" width={50} height={50} className='rounded-full' />,
        user: <p className="text-xs md:text-sm">Armando Bardo</p>,
        reason: <p className="text-xs md:text-sm">Disturbing</p>,
        eDate: <p className="text-xs md:text-sm">18/09/2020</p>,
        actions: <button className='h-[35px] bg-blue-450 rounded-lg text-white font-light w-24 text-xs md:text-sm'>Unblock</button>,
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
        field: "foto",
        use: "#",
        use_in_search: true
    },
    {
        field: "user",
        use: "User",
    },
    {
        field: "reason",
        use: "Reason",

        //Will not be displayed in the table
        use_in_display: true
    },
    {
        field: "eDate",
        use: "Date",
        //would not be exported as a CSV column
        use_in_export: true
    },
    {
        field: "actions",
        use: "Actions",
        //would not be exported as a CSV column
        use_in_export: true
    }
];
