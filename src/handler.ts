import { Router } from 'itty-router';

import Geo from './handlers/geo-api';


const router = Router();

router
  .get('/api/geo', Geo)
  .get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = request => router.handle(request);
