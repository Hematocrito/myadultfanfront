import Table from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css';
import NavbarUsr from './NavbarUsr';
import { tableStyling, columns, rows } from './PaymentTableProps'



const PaymentHistory = (props: { admin: "model" | "fans" }) => {
    return (
        <section>
            <NavbarUsr />
            <div className='w-full'>
                <div className='w-4/5 flex-1 m-auto mt-28 font-sans'>
                    <h1 className='font-base text-2xl font-semibold'>Payment History</h1>
                    <Table styling={tableStyling} columns={columns} rows={rows} show_search={true} should_export={false} per_page={5} />
                </div>
            </div>
        </section>
    );
};

export default PaymentHistory;