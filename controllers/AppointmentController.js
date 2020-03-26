const { Appointment } = require('../models/index');
// const CrudService = require('../services/CrudService');
const AppointmentController ={
    insert(req,res){
        // CrudService.insert(Appointment,req,res)
        Appointment.create(req.body)
        .then(appointment=>res.send(appointment))
        .catch(err=>{
            console.error(err)
            res.status(500).send({message:'Ha habido un problema al tratar de crear el paciente'})
        })
    }
}
module.exports=AppointmentController;