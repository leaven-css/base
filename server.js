const express = require('express');
const path = require('path');
const chodikar = require('chokidar');
const http = require('http');

const DIST_PATH = path.resolve(__dirname, 'dist');
const {
  PORT = '3002',
  WATCH_DIR = DIST_PATH,
  EXAMPLE_URL = 'http://localhost:3000/'
} = process.env;

// Express server hosting static assets
const app = express();
app.use(express.static(DIST_PATH));

app.listen(PORT, () => console.log(`Static assets listening on port ${PORT}`));

// Watcher triggering example server
chodikar.watch(WATCH_DIR).on('all', (eventName, path) => {
  console.log(`${eventName} ${path}`);

  http.get(`${EXAMPLE_URL}__browser_sync__?method=reload`)
    .on('error', error => {
      throw new Error(error.message);
    });
});
