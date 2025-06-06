import React from 'react';

export interface Column<T> {
  key: keyof T;
  header: string;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

export const Table = <T extends Record<string, any>>({
  data,
  columns,
  className = '',
}: TableProps<T>) => (
  <table
    className={`min-w-full border-collapse rounded-lg shadow-md overflow-hidden ${className}`}
  >
    <thead className="bg-indigo-500 text-white">
      <tr>
        {columns.map((col) => (
          <th key={String(col.key)} className="px-4 py-2 text-left">
            {col.header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr
          key={idx}
          className={`${
            idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          } hover:bg-indigo-50`}
        >
          {columns.map((col) => (
            <td key={String(col.key)} className="px-4 py-2 border-b">
              {String(row[col.key])}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
