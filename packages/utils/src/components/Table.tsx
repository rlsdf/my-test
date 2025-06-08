import React from 'react';

export interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactElement;
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
    className={`min-w-full border-collapse rounded-md shadow-sm overflow-hidden ${className}`}
  >
    <thead className="bg-neutral-100 text-neutral-700">
      <tr>
        {columns.map((col) => (
          <th key={String(col.key)} className="px-4 py-3 text-left font-semibold">
            {col.header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr
          key={idx}
          className={`${idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'} hover:bg-neutral-100`}
        >
          {columns.map((col) => (
            <td key={String(col.key)} className="px-4 py-2 border-b">
              {col.render ? col.render(row[col.key], row) : row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
