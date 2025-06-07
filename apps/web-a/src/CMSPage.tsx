import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Input,
  Button,
  Table,
  Column,
  Select,
  Pagination,
} from '@my/utils';

interface Item {
  id: number;
  title: string;
  status: 'active' | 'inactive';
  createdDate: string;
}

const fetchItems = () => axios.get<Item[]>('/api/items');

const columns: Column<Item & { actions: React.ReactNode }>[] = [
  { key: 'id', header: 'ID' },
  { key: 'title', header: 'Title' },
  { key: 'status', header: 'Status' },
  { key: 'createdDate', header: 'Created' },
  { key: 'actions', header: 'Actions' },
];

export const CMSPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchItems().then((res) => setItems(res.data));
  }, []);

  const filtered = items.filter(
    (it) =>
      it.title.toLowerCase().includes(query.toLowerCase()) &&
      (status === 'all' || it.status === status)
  );

  const pageSize = 20;
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const pageData = filtered
    .slice((page - 1) * pageSize, page * pageSize)
    .map((it) => ({
      ...it,
      actions: (
        <>
          <Button
            size="sm"
            className="mr-2 bg-sky-500 hover:bg-sky-600"
            onClick={() => alert(`edit ${it.id}`)}
          >
            edit
          </Button>
          <Button
            size="sm"
            className="bg-red-500 hover:bg-red-600"
            onClick={() => alert(`delete ${it.id}`)}
          >
            delete
          </Button>
        </>
      ),
    }));

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 items-center">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search title"
        />
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Select>
        <Button onClick={() => setPage(1)}>Search</Button>
      </div>
      <Table data={pageData} columns={columns} className="min-w-full" />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};
