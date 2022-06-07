"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("@google-cloud/storage");
const storage = new storage_1.Storage();
async function listBuckets() {
    try {
        const [buckets] = await storage.getBuckets();
        console.log('Buckets:');
        buckets.forEach((bucket) => {
            console.log(bucket.name);
        });
    }
    catch (err) {
        console.error('ERROR:', err);
    }
}
listBuckets();
//# sourceMappingURL=auth.js.map