const {cliente} = require('../models')

exports.createCliente = async (req,res) =>{
    const {nombre,corre,numero_licencia}= req.body;
    try {
        const Crear = await cliente.create({nombre,corre,numero_licencia})
        res.json(Crear);
    } catch (error) {
        console.log(error);
        res.json({mensaje:'error'})
        
    };
};

exports.getcliente = async (req, res) => {
    
    try {
        const clientes = await cliente.findAll();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.json({ mensaje: 'Error al obtener los cliente' });
    }
}

exports.actualizarcliente = async (req, res) =>{
    const {id} = req.params;
    const {nombre,corre,numero_licencia} = req.body;
  try {
    let rescliente = await cliente.findByPk(id);
    if(rescliente){
        rescliente.nombre= nombre;
        rescliente.correo= corre;
        rescliente.numero_licencia= numero_licencia;
        await rescliente.save();
        res.json({mensaje:'actuzalizo el cliente'})
   
    }else{
        res.json({mensaje:'no encontrado cliente'})
    }
        
    } catch (error) {
        console.log(error);
        res.json({mensaje:'Error al actualizar'})
        
    }
};

exports.eliminarCliente = async (req, res) => {
    const {id} = req.params;
    try {
        const eliminar = await cliente.findByPk(id);
        if(eliminar){
            await eliminar.destroy();
            res.json({mensaje:'cliente  eliminado'})
        }else{
            res.json({mensaje:'cliente  no encontrado'})
        }
     
    } catch (error) {
        console.log(error);
        res.json({mensaje:'errror al cliente eliminado'})
    }
}

exports.verclienteId= async (req, res) => {
    const {idf} = req.params;
    console.log(idf);
    try {
        const ver = await cliente.findByPk(idf)
    return res.json(ver);
        
    } catch (error) {
        console.log(error);
        
        res.json({ mensaje: "error no muestra id" });
    }
    
}




