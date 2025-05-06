const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;
let stores = [
  { id: 1, name: "HealthPlus", medicines: ["Paracetamol", "Azithromycin"] },
  { id: 2, name: "MediCare", medicines: ["Ibuprofen", "Paracetamol"] }
];

app.get('/api/search', (req, res) => {
  const query = req.query.name?.toLowerCase();
  if (!query) return res.status(400).json({ error: 'Medicine name required' });

  const results = stores.filter(store =>
    store.medicines.some(med => med.toLowerCase().includes(query))
  );
  res.json(results);
});

app.post('/api/store/:id/add', (req, res) => {
  const id = parseInt(req.params.id);
  const { medicine } = req.body;

  const store = stores.find(s => s.id === id);
  if (!store) return res.status(404).json({ error: 'Store not found' });

  if (!medicine) return res.status(400).json({ error: 'Medicine is required' });

  store.medicines.push(medicine);
  res.status(200).json(store);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

