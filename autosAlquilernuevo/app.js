const express = require('express');
const app = express();
const autoRoutes = require('./routes/autoRoutes'); 
const clienteRoutes = require('./routes/clienteRoutes');
const alquilerRoutes = require('./routes/alquilerRoutes');

app.use(express.json());
app.use('/api', autoRoutes); 
app.use('/api', clienteRoutes);
app.use('/api/', alquilerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});