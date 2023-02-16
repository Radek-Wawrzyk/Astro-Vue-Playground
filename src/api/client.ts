import * as prismic from '@prismicio/client';

const client = prismic.createClient('astro-vue-playground', { 
  fetch,
});

export { client };
