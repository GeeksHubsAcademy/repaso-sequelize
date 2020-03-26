const { Patient } = require('../models/index');
const PatientController ={
    insert(req,res){
        Patient.create(req.body)
        .then(patient=>res.send(patient))
        .catch(err=>{
            console.error(err)
            res.status(500).send({message:'Ha habido un problema al tratar de crear el paciente'})
        })
    }
}
module.exports=PatientController;