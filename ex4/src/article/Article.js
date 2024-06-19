import './Article.css';
import {ReactComponent as Umbrella} from './umbrella.svg';

function Article({id, title, autor, category, publication_date, icon}) {
  return (
    <a href='article.html?id = {id}'>
        <article>
            <h3>{title}</h3>
            <div>{category}</div>
            <span>{autor}<time className='publication-date'>{publication_date}</time></span>
            <Umbrella/>
        </article>
    </a>
  );
}

export default Article;