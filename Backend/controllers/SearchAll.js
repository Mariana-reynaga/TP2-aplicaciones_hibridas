// Chalk
const chalk = require('chalk');
const log = console.log;

const Recognized = require('../Models/RecognizedModel');
const Experimental = require('../Models/ExperimentalModel');

const getXid = async( req , res ) => {
    const {id} = req.params; 
    try{
        let breed = await Recognized.findById( id )
        
        if( !breed ){
            breed = await Experimental.findById( id );
            
            if(breed){
                res.status(200).json({msg: "¡Raza encontrada!", data: breed});

            }else{
                res.status(404).json({msg: "El ID no es valido"});
            }

        }else{
            res.status(200).json({msg: "¡Raza encontrada!", data: breed});
        }

    }catch(error){
        log(chalk.bgRed('[SearchAllController.js]: getXid: ' ,error));
        res.status(500).json({msg: 'OOPS, tenemos un error', data: {}});
    }

};

module.exports = { getXid };