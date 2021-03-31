import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Card,Button, CardColumns} from 'react-bootstrap';
import '../App.css';

const  NewsContainer =() => {
    const [category,setCategory] = useState("general");
    const [newsarr,setNewsarr] = useState([]);
    const API_KEY="a40d039a04c046089ab8e365a8afd086";
    const newsapi = async () => {
        try{
            const news = await axios.get(` https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}`);
            setNewsarr(news.data.articles)
            console.log(newsarr)
        }
        catch(err){
            console.log(err)
        }
      }
    useEffect(()=>{
        newsapi();
    },[])
  return (
    <div className="row">
        <CardColumns className="cardcolumn">
        {newsarr.map((data,index)=>(
                <Card key={index} style={{width:"30%"}} className="card ">
                    <Card.Img 
                    src={data.urlToImage} 
                    className="card-img"
                    alt="img">
                    </Card.Img>
                    <Card.Body className="card-body text-monospace">
                        <Card.Title className="card-title">
                            {data.title}
                        </Card.Title>
                        <blockquote className="blockquote">
                            <p>{data.content}</p>
                            <footer className="blockquote-footer">
                                <cite title="Source Title">{data.author}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="secondary" className="card-button" href={data.url}>Read More</Button>
                </Card>
        ))}
      </CardColumns>
      </div>
  );
}

export default NewsContainer;

