const { Physician } = require('../models/index');
const PhysicianController ={
    insert(req,res){
        Physician.create(req.body)
        .then(physician=>res.send(physician))
        .catch(err=>{
            console.error(err)
            res.status(500).send({message:'Ha habido un problema al tratar de crear el paciente'})
        })
    }
}
module.exports=PhysicianController;