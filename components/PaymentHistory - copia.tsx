import Table from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css';
import { tableStyling, columns, rows } from './PaymentTableProps';
import { useRouter } from "next/router";


export const PaymentHistory = (props: { admin: "model" | "fans" }) => {
    const router = useRouter();
    let texto1,texto2,texto3,texto4,texto5;
    switch(router.locale) {    
      case "es":
        texto1 = 'Historial de pagos';
          break;
      case "en-US":
        texto1 = 'Payment History';
          break;
      case "pt":
        texto1 = 'Histórico de pagamento';
          break;
      case "ru":
        texto1 = 'История платежей';
      default:
          
    }
  

    return (
        <section>
            <div className='w-full'>
                <div className='w-full flex-1 m-auto mt-28 font-sans'>
                    <h1 className='font-base text-2xl font-semibold'>{texto1}</h1>
                   {/* <Table styling={tableStyling} columns={columns} rows={rows} show_search={true} should_export={false} per_page={5} /> */}
                   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                Id
                </th>
                <th scope="col" className="px-6 py-3">
                Model
                </th>
                <th scope="col" className="px-6 py-3">
                Description
                </th>
                <th scope="col" className="px-6 py-3">
                Type
                </th>
                <th scope="col" className="px-6 py-3">
                Original Price
                </th>
                <th scope="col" className="px-6 py-3">
                Total Price
                </th>
                <th scope="col" className="px-6 py-3">
                Discount
                </th>
                <th scope="col" className="px-6 py-3">
                Status
                </th>
                <th scope="col" className="px-6 py-3">
                Purchased at
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                5786F4C8
                </th>
                <td className="px-6 py-4">
                Brandi Love
                </td>
                <td className="px-6 py-4">
                    <h1 className=' font-semibold text-blue-450'>Purchase video</h1>
                </td>
                <td className="px-6 py-4">
                    <h1 className='text-white font-bold border-2 rounded-lg border-purple-500 bg-purple-500 px-3 py-1 text-center w-fit'>Monthly Subscription</h1 >
                </td>
                <td className="px-6 py-4 text-center">
                    <h1>$9.90</h1>
                </td>
                <td className="px-6 py-4 text-center">
                    <h1>$9.90</h1>
                </td>
                <td></td>
                <td><h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>Success</h1></td>
                <td><h1>31/08/2020 20:05:27</h1></td>
            </tr>
            
            
        </tbody>
    </table>
                </div>
            </div>
            
            
        </section>
        
    );
};