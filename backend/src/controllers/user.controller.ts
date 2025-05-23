import * as express from 'express';
import User from '../models/user';

export class UserController{
    login=(req:express.Request,res:express.Response)=>{
        let username=req.body.username;
        let password=req.body.password;
        let err=new String();
        let user=new User();

        /*User.find({'username':username,'password':password}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
        User.findOne({'username':username,'password':password}).then(function(user){
            if(!user) console.log("error");
            else res.json(user);
        });*/
        User.findOne({'username':username,'password':password})
        .then((result)=>{
            res.json(result);
            console.log("1");
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    register=(req:express.Request,res:express.Response)=>{
        let user=new User({firstname:req.body.firstname,lastname:req.body.lastname,username:req.body.username,password:req.body.password,type:req.body.type})
        user.save().then(user=>{
            res.status(200).json({'message':'user added'});
        }).catch(err=>{
            res.status(400).json({'message':'error'})
        })
    }

    
}