# markdown-benchmark
markdown benchmark


index.js:44 marked#parse x 5,143 ops/sec ±4.51% (42 runs sampled)
index.js:44 remarkable#parse x 2,345 ops/sec ±21.02% (46 runs sampled)
index.js:44 markdownit#parse x 2,270 ops/sec ±4.41% (48 runs sampled)
index.js:47 Fastest is marked#parse

index.js:79 marked#render x 676,633 ops/sec ±2.55% (52 runs sampled)
index.js:79 remarkable#render x 20,206 ops/sec ±2.86% (48 runs sampled)
index.js:79 markdownit#render x 17,578 ops/sec ±8.54% (42 runs sampled)
index.js:64 testRender onComplete
index.js:82 Fastest is marked#render


marked#parse x 5,431 ops/sec ±3.44% (40 runs sampled)
index.js:50 remarkable#parse x 2,595 ops/sec ±14.70% (50 runs sampled)
index.js:50 markdownit#parse x 2,248 ops/sec ±3.12% (48 runs sampled)
index.js:50 remark#parse x 149 ops/sec ±6.05% (39 runs sampled)
