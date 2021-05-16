const clientMicroservice = require('../microservices/user')

module.exports.index = async (req, res) => {
    clientMicroservice.getAllUsers({}, (err, response) => {
        if (err) return res.send(err)
        res.send(response)
    })
}
module.exports.store = async (req, res) => {
    clientMicroservice.registerUser(req.body, (err, response) => {
        if (err) return res.send(err)
        res.send(response)
    });
}
module.exports.show = async (req, res) => {
    clientMicroservice.getUserById({id: req.params.id}, (err, response) => {
        if (err) return res.send(err)
        res.send(response)
    })
}
module.exports.update = async (req, res) => {
    const user = {id: req.params.id, ...req.body}
    clientMicroservice.updateUser({user}, (err, response) => {
        if (err) return res.send(err)
        res.send(response)
    });
}

module.exports.delete = async (req, res) => {
    clientMicroservice.deleteUser({id: req.params.id}, (err, response) => {
        if (err) return res.send(err)
        res.send(response)
    });
}
