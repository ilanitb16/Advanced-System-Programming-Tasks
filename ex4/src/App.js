import './App.css';
import Article from "./article/Article"
import articles from "./data/db.json"
import {useState} from 'react';

function App() {
  
  const [articlesList, setArticleList] = useState(articles)
  console.log(articlesList)
  var i = 1
  console.log(i)
  i+=1
  console.log(i)

  const addArticle = () => {
    const article = {
      "id": 3,
      "title": "CONGRATS IN THE NEW ARTICLE!!!",
      "author": "Ilanit Berditchevski",
      "category" : "NEW",
      "publication_date": "2024-01-26"
    }
    setArticleList([...articlesList, article])
  }


  return (
    <div className="App">
      <h1 className='title'>MY NEWS ARTICLES</h1>
      <div className='button-wrap'>
      <button className='add-button' onClick={addArticle}>ADD</button>
      </div>
      {
        articlesList.map ((article) => 
         <Article {...article}/>
        )
      }
      
    </div>
  );
}

export default App;
