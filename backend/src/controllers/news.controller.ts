import  express  from "express"
import News from '../models/news'
export class NewsController{
    getAllNews=(req:express.Request,res:express.Response)=>{
        News.find({}).then((result)=>{
            if(result) {
                res.status(200).json(result);
            }
            else{
                res.status(400).json(result);
            }
        })
    }
    addComment=(req:express.Request,res:express.Response)=>{
        let id = req.body.id;
        let commentText=req.body.comment;

        News.findOne({'id':id}).then(result=>{
            if(result){
                let comment={text:commentText}
                //News.collection.updateOne({'id':id},{$push:{'comments':comment}}).then();
                console.log(id);
                console.log(comment);
                News.collection.updateOne({'id':id},{$push:{'comments':comment}});
                res.json({'message':'ok'})
            }else{
                console.log("ERROR");
            }
        })
    }
}