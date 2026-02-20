import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'xgeh1qfn',
  dataset: 'production',
  apiVersion: '2026-01-01', // Update to the latest API version
  useCdn: true // Enable CDN caching
});

export default client;
