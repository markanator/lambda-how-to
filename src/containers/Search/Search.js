import React        from 'react';
import ArticleCard  from '../../components/FP_ArticleCard';
import {useParams}  from 'react-router-dom';
import './Search.css'

function Search ({allPosts}) {
const {searchTerm} = useParams();

const items = allPosts.filter((guides) => {
    return guides.title.toLowerCase().includes( searchTerm.toLowerCase() );
});

// console.log(items);

    return (
        <div className='search-container'>
            <br/>
            <h1>Search Results:</h1>
            <div className='search-wrapper'>
                { items.length === 0 || searchTerm === "" || searchTerm === null ?  (<div className='nope'><h3>Nothing Found! <br/>🤷‍♂️</h3></div>) : CardWrapper(items) }
            </div>
        </div>
    );
}

function CardWrapper(article) {
    return (
        <div className="article-wrapper-s">
            {/* map through the data and render cards */}
            {article.map(eClass => {
                    return (
                        <ArticleCard
                            key={eClass.id}
                            data={eClass}
                        />
                        );
                })}
        </div>
    );
}

export default Search;