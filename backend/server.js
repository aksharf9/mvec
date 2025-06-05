// backend/server.js
const app = require('./app');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/admin.routes');


app.use('/api/admin', adminRoutes);

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
