import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Card,Button, Container} from 'react-bootstrap';
import '../App.css';
import categories from './Categories';

const  NewsContainer =(category) => {
    // const [category,setCategory]=useState('sport');
    const [newsarr,setNewsarr] = useState([]);
    console.log(`category=${category.category}`)
    const API_KEY="a40d039a04c046089ab8e365a8afd086";
    const newsapi = async () => {
        try{
            const news = await axios.get(` https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category.category}`);
            setNewsarr(news.data.articles)
        }
        catch(err){
            console.log(err)
        }
      }
    useEffect(()=>{
        newsapi();
    },[category.category])
  return (
      <div className="mt-4 container ml-14">
          <div className="row">
        {newsarr.map((data,index)=>(
                <Card key={index}className="card col-auto mb-3">
                    <Card.Img 
                    src={data.urlToImage 
                        ? data.urlToImage
                        : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"} 
                    className="card-img-top"
                    alt="img">
                    </Card.Img>
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">
                            {data.title}
                        </Card.Title>
                        <blockquote className="card-text">
                            <p>{data.content}</p>
                            <footer className="blockquote-footer">
                                <cite>{data.author?data.author:'Unknown'}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="secondary" className="card-button" href={data.url}>Read More</Button>
                </Card>
        ))}
      </div>
      </div>
  );
}

export default NewsContainer;

