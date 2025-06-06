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
  { name: 'Dave', email: 'dave@example.com', createdAt: '2023-04-10' },
  { name: 'Eve', email: 'eve@example.com', createdAt: '2023-05-12' },
  { name: 'Frank', email: 'frank@example.com', createdAt: '2023-06-05' },
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
      <h1>{greet('web-b')}</h1>
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
