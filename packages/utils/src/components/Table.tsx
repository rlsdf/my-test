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
  <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
    <thead>
      <tr>
        {columns.map((col) => (
          <th
            key={String(col.key)}
            scope="col"
            className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {col.header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((row, idx) => (
        <tr key={idx}>
          {columns.map((col) => (
            <td key={String(col.key)} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {col.render ? col.render(row[col.key], row) : row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
