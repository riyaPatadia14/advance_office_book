// src/pages/List.jsx
import React from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table";
import '../styles/Grid.css';

export default function Grid() {
    const data = React.useMemo(
        () => [
            { number: 1, creationDate: '2025-12-14', customer: 'Michael Admin', activities: 'Pership follow up', salesPerson: 'Sunden Gosh', company: 'Decora', totalStatus: 'Complete' },
            { number: 2, creationDate: '2025-09-16', customer: 'Michael Admin', activities: 'check delivery requirements', salesPerson: 'Prakrimi Mandakini', company: 'laminates', totalStatus: 'Pending' },
            { number: 3, creationDate: '2025-06-23', customer: 'Michael Admin', activities: 'answer questions', salesPerson: 'Lenon Smith', company: 'Awadha', totalStatus: 'Successful' },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { header: "Number", accessorKey: "number", kind: 'label' },
            { header: "Creation Date", accessorKey: "creationDate", kind: 'label' },
            { header: "Customer", accessorKey: "customer", kind: 'label' },
            { header: "Sales Person", accessorKey: "salesPerson", kind: 'label' },
            { header: "Activities", accessorKey: "activities", kind: 'label' },
            { header: "Company", accessorKey: "company", kind: 'label' },
            { header: "Total Status", accessorKey: "totalStatus", kind: 'label' },
        ],
        []
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <header>
                <div className="header-content">
                    <div className="left-section">
                        <div className="line"></div>
                        <h1>List</h1>
                    </div>
                    <button type="button" className="btn-add">Add</button>
                </div>
            </header>
            <div className="list-container">
                <table>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
