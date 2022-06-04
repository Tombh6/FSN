// Imports the Google Cloud client library.
import { Storage } from '@google-cloud/storage';

const storage = new Storage();

// Makes an authenticated API request.
async function listBuckets() {
  try {
    const [buckets] = await storage.getBuckets();

    console.log('Buckets:');
    buckets.forEach((bucket) => {
      console.log(bucket.name);
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
}
listBuckets();
