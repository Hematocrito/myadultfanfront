import Table from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css';
import NavbarMod from './NavbarMod';
import { tableStyling, columns, rows } from './SubscribersTableProps'

export const MySubscribersTable = (props: { admin: "model" | "fans" }) => {

    return (
        <section>
            <NavbarMod />
            <div className='w-full'>
                <div className='w-4/5 flex-1 m-auto mt-28 font-sans'>
                    <h1 className='font-base text-2xl font-semibold'>My Subscribers</h1>
                    <Table styling={tableStyling} columns={columns} rows={rows} show_search={false} should_export={false} per_page={5} />
                </div>
            </div>
        </section>
    );
};