const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: 'Paracetamol 500mg', category: 'Medicines', price: 250 },
  { id: 2, name: 'Vitamin C 1000mg', category: 'Vitamins', price: 1250 },
  { id: 3, name: 'Gentle Skin Cleanser', category: 'Personal Care', price: 2800 },
  { id: 4, name: 'Digital Thermometer', category: 'Equipment', price: 1200 },
  { id: 5, name: 'Daily Wellness Pack', category: 'Wellness', price: 1850 },
  { id: 6, name: 'Baby Care Essentials', category: 'Baby Care', price: 3500 },
  { id: 7, name: 'Adhesive Bandages', category: 'First Aid', price: 450 },
  { id: 8, name: 'Antiseptic Solution', category: 'First Aid', price: 680 },
  { id: 9, name: 'Zinc Tablets', category: 'Vitamins', price: 950 },
  { id: 10, name: 'Reusable Hot Water Bottle', category: 'Equipment', price: 1650 },
  { id: 11, name: 'Hand Sanitizer', category: 'Personal Care', price: 790 },
  { id: 12, name: 'Moisturising Lotion', category: 'Personal Care', price: 1950 },
  { id: 13, name: 'Baby Gentle Shampoo', category: 'Baby Care', price: 1350 },
  { id: 14, name: 'Digital Blood Pressure Monitor', category: 'Equipment', price: 8900 },
  { id: 15, name: 'Multivitamin Tablets', category: 'Vitamins', price: 2100 },
  { id: 16, name: 'Cotton Wool Roll', category: 'First Aid', price: 520 },
  { id: 17, name: 'Aloe Vera Gel', category: 'Wellness', price: 1100 },
  { id: 18, name: 'Digital Weighing Scale', category: 'Equipment', price: 4200 }
];

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'medicart-api' }));
app.get('/api/products', (_req, res) => res.json({ products }));
app.get('/', (_req, res) => res.json({ name: 'MediCart API', docs: '/api/products', health: '/api/health' }));

const port = process.env.PORT || 3000;
if (require.main === module) app.listen(port, () => console.log(`MediCart API listening on ${port}`));
module.exports = app;
