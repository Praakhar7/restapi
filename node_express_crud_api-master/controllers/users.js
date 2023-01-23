import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User ${user.firstName} added to the database.`);
    console.log(`User ${user.lastName} added to the database.`);
    console.log(`User ${user.age} added to the database.`);
    res.send(user)
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    
    console.log(`User ${user} has been deleted`)
    users = users.filter((user) => user.id !== req.params.id);
};
export const updateUser =  (req,res) => {

    const user = users.find((user) => user.id === req.params.id);
    
    user.firstName = req.body.firstName;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.firstName}.age has been updated to ${req.body.age}`)
    res.send(user)
};