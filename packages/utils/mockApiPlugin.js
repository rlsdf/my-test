export function mockApiPlugin() {
  const items = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    title: `Post ${i + 1}`,
    status: i % 2 === 0 ? 'active' : 'inactive',
    createdDate: `2023-07-${String((i % 30) + 1).padStart(2, '0')}`,
  }));
  return {
    name: 'mock-api',
    configureServer(server) {
      server.middlewares.use('/api/items', (_req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(items));
      });
    },
  };
}
