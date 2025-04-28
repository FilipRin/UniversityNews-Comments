"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsController = void 0;
const news_1 = __importDefault(require("../models/news"));
class NewsController {
    constructor() {
        this.getAllNews = (req, res) => {
            news_1.default.find({}).then((result) => {
                if (result) {
                    res.status(200).json(result);
                }
                else {
                    res.status(400).json(result);
                }
            });
        };
        this.addComment = (req, res) => {
            let id = req.body.id;
            let commentText = req.body.comment;
            news_1.default.findOne({ 'id': id }).then(result => {
                if (result) {
                    let comment = { text: commentText };
                    //News.collection.updateOne({'id':id},{$push:{'comments':comment}}).then();
                    console.log(id);
                    console.log(comment);
                    news_1.default.collection.updateOne({ 'id': id }, { $push: { 'comments': comment } });
                    res.json({ 'message': 'ok' });
                }
                else {
                    console.log("ERROR");
                }
            });
        };
    }
}
exports.NewsController = NewsController;
