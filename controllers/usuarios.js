const  { response, request } = require('express'); 


const usuariosGet = (req = request, res = response) => {

  const {q, ocupacion} = req.query; 

    res.json({
        msg: 'get API - controlador',
        q, ocupacion
    })
  }

  const usuariosPost = (req, res = response) => {
    //Extraer el body
    const {nombre, edad} = req.body; 
    res.json({
        msg: 'post API',
        nombre, edad
    })
  }

  const usuariosPut = (req, res = response) => {

    const {id} = req.params; 

    res.status(400).json({
        msg: 'put API',
        id
    })
  }

  const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    })
  }
   
  const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    })
  }

  module.exports = {
      usuariosGet,
      usuariosPatch,
      usuariosDelete,
      usuariosPost,
      usuariosPut
  }