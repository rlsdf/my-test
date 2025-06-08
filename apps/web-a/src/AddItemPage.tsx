import React, { useState } from 'react';
import { Input, Select, PrimaryButton } from '@my/utils';

export const AddItemPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Added ${title} (${status})`);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Add New Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full"
        />
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value as 'active' | 'inactive')}
          className="w-full"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Select>
        <PrimaryButton type="submit" className="w-full">
          Save
        </PrimaryButton>
      </form>
    </div>
  );
};
