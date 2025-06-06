import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Input, Button, Table, Column, greet } from '@my/utils';

interface User {
  name: string;
  email: string;
  createdAt: string;
}

const data: User[] = [
  { name: 'Alice', email: 'alice@example.com', createdAt: '2023-01-01' },
  { name: 'Bob', email: 'bob@example.com', createdAt: '2023-02-15' },
  { name: 'Charlie', email: 'charlie@example.com', createdAt: '2023-03-20' },
];

const columns: Column<User>[] = [
  { key: 'name', header: '이름' },
  { key: 'email', header: '이메일' },
  { key: 'createdAt', header: '등록일' },
];

const App = () => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filtered = data.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1>{greet('web-a')}</h1>
      <div className="flex justify-end mb-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mr-2"
        />
        <Button
          onClick={() => setOpen(true)}
          className="transition-transform hover:scale-105"
        >
          조회
        </Button>
      </div>
      {open && (
        <div className="animate-fadeIn overflow-x-auto">
          <Table<User> data={filtered} columns={columns} className="min-w-full" />
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
