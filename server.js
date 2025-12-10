import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4173;
const distPath = path.join(__dirname, 'dist');

// Serve static assets from Vite build
app.use(express.static(distPath));

// Fallback to index.html for SPA routes (HashRouter still benefits if direct hits happen)
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`MIGREI webapp servindo build em http://localhost:${port}`);
});
