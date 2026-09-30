import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const DATA_FILE = path.join(__dirname, 'db.json');

const defaultData = {
  tributes: []
};

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
}

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    system: 'STARK_JARVIS_BACKEND_3000',
    timestamp: new Date().toISOString()
  });
});

// Bind to 0.0.0.0 so network devices can access it
app.listen(PORT, '0.0.0.0', () => {
  console.log(`⚡ STARK ENTERPRISES BACKEND ACCESSIBLE ON PORT ${PORT}`);
});
