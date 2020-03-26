class CrudService {
    insert(model,req,res){
        model.create(req.body)
        .then(modelInstance=>res.send(modelInstance))
        .catch(err=>{
            console.error(err)
            res.status(500).send({message:'Ha habido un problema al tratar de crear la fila'})
        })
    }
}
module.exports= new CrudService;