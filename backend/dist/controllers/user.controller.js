"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let err = new String();
            let user = new user_1.default();
            /*User.find({'username':username,'password':password}, (err, user)=>{
                if(err) console.log(err);
                else res.json(user);
            })
            User.findOne({'username':username,'password':password}).then(function(user){
                if(!user) console.log("error");
                else res.json(user);
            });*/
            user_1.default.findOne({ 'username': username, 'password': password })
                .then((result) => {
                res.json(result);
                console.log("1");
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this.register = (req, res) => {
            let user = new user_1.default({ firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, password: req.body.password, type: req.body.type });
            user.save().then(user => {
                res.status(200).json({ 'message': 'user added' });
            }).catch(err => {
                res.status(400).json({ 'message': 'error' });
            });
        };
    }
}
exports.UserController = UserController;
