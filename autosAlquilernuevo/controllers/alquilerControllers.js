const {alquiler} = require('../models');

exports.createAlquiler = async (req, res) => {
    const { fecha_inicio, fecha_fin } = req.body;
    try {
      const crear = await Alquileres.create({ fecha_inicio, fecha_fin });
      res.json(crear);
    } catch (error) {
      console.log(error);
      res.json({ mensaje: 'error' });
    }
  };

exports.getAlquiler = async (req, res) => {
    try {
        const alquiler = await alquiler.findAll();
        res.json(alquiler);
    } catch (error) {
        console.log(error);
        res.json({ mensaje: 'no se obtuvo el alquiler' });
    }
}


exports.expediente = async (req, res) => {
    try {
        const alquilerr = await alquiler.findAll({
            include: [
                {
                    model: cliente,
                    as: 'clientes',
                    attributes: ['nombre', 'correo', 'numero_licencia'] 
                },
                {
                    model: autos,
                    as: 'autos',
                    attributes: ['marca', 'modelo', 'ano', 'disponible']
                },
            ]
        });
        res.json(alquilerr);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'no se obtuvo el alquiler', error: error.message });
    }
};




