import React, { useEffect, useState, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Input,
  Button,
  Table,
  Column,
  Select,
  Pagination,
  EditIcon,
  TrashIcon,
  greet,
} from '@my/utils';

interface Item {
  id: number;
  title: string;
  status: 'active' | 'inactive';
  createdDate: string;
}

const fetchItems = (page: number) =>
  axios.get<Item[]>('/api/items', { params: { page } });

const columns: Column<Item & { actions: ReactElement }>[] = [
  { key: 'id', header: 'ID' },
  { key: 'title', header: 'Title' },
  {
    key: 'status',
    header: 'Status',
    render: (value) => (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {String(value)}
      </span>
    ),
  },
  {
    key: 'createdDate',
    header: 'Created',
    render: (value) => (
      <span>
        {new Date(String(value)).toLocaleDateString()}
      </span>
    ),
  },
  { key: 'actions', header: 'Actions' },
];

export const CMSPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems(page).then((res) => setItems(res.data));
  }, [page]);

  const filtered = items.filter(
    (it) =>
      it.title.toLowerCase().includes(query.toLowerCase()) &&
      (status === 'all' || it.status === status)
  );

  const totalPages = 3;
  const pageData = filtered.map((it) => ({
      ...it,
      actions: (
        <>
          <Button
            size="sm"
            className="mr-2 p-1 bg-white text-gray-700 border border-neutral-300 hover:bg-neutral-100 focus-visible:ring-blue-500"
            aria-label={`edit ${it.id}`}
            onClick={() => alert(`edit ${it.id}`)}
          >
            <EditIcon className="w-4 h-4 text-gray-700" />
          </Button>
          <Button
            size="sm"
            className="p-1 bg-white text-gray-700 border border-neutral-300 hover:bg-neutral-100 focus-visible:ring-blue-500"
            aria-label={`delete ${it.id}`}
            onClick={() => alert(`delete ${it.id}`)}
          >
            <TrashIcon className="w-4 h-4 text-gray-700" />
          </Button>
        </>
      ),
    }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">{greet('web-b')}</h1>
      <div className="bg-white rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="md:w-40 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Select>
          <Button
            onClick={() => setPage(1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Search
          </Button>
          <Button onClick={() => navigate('/add-item')}>Add Item</Button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <Table
            data={pageData}
            columns={columns}
            className="min-w-full"
          />
        </div>

        <div className="flex justify-center mt-6">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            className="inline-flex shadow-sm rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
