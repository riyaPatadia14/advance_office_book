import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import './App.css';

type Quotation = {
  number: string;
  date: string;
  customer: string;
  salesperson: {
    name: string;
    avatar: string;
  };
  activity: {
    icon: string;
    label: string;
    color: string;
  };
  company: string;
  total: string;
  status: string;
};

const data: Quotation[] = [
  {
    number: 'S00026',
    date: 'Oct 1, 8:02 PM',
    customer: 'Deco Addict',
    salesperson: {
      name: 'Mitchell Admin',
      avatar: 'https://ui-avatars.com/api/?name=Mitchell+Admin',
    },
    activity: { icon: '📦', label: 'Preship Follow up', color: 'red' },
    company: 'My Company (San Francisco)',
    total: '$0.68',
    status: 'Sales Order',
  }
];

const columnHelper = createColumnHelper<Quotation>();

const columns = [
  columnHelper.accessor('number', {
    header: 'Number',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('customer', {
    header: 'Customer',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: info => {
      const status = info.getValue();
      return (
        <span style={{ padding: '4px 8px', backgroundColor: '#eee', borderRadius: '4px' }}>
          {status}
        </span>
      );
    },
  }),
];

const App = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Quotations</h2>
      <table className="quotation-table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
