import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  // document.title = `NewsDezire | ${props.category.charAt(0).toUpperCase() + props.category.substr(1)}`;

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${props.category}&pageSize=${props.pageSize}&page=${page}&apiKey=${props.apiKey}`;
    console.log(`https://newsapi.org/v2/top-headlines?language=en&category=${props.category}&pageSize=${props.pageSize}&page=${page}&apiKey=${props.apiKey}`)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {updateNews()}, [page])


  const fetchMoreData = async () => {
    setPage(page+1);
    updateNews();
  }
  return (
    <>

      <h1 className='text-center' style={{marginTop: '5rem'}}>Top {props.category} headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className='container my-3'>
          <div className='row'>
            {articles.map((element) => {
              let url = element.url ? element.url : "https://www.wsj.com/articles/new-display-tech-is-coming-from-apple-google-meta-microled-11674248409";
              let urlToImage = element.urlToImage ? element.urlToImage : "https://images.wsj.net/im-706795/social";
              let description = element.description ? element.description.substring(0, 150) + "..." : "Our phones, smartwatches and smart glasses will soon get longer battery life and better visibility in daylight";
              let title = element.title ? element.title.substring(0, 45) + "..." : "New Display Tech Is Coming From Apple, Google, Meta and Others - The Wall Street Journal";
              let source = element.source.name;

              return <div key={url.concat(Math.random() * 100)} className="col-md-4">
                <NewsItem title={title} description={description} imgUrl={urlToImage} newsUrl={url} source={source} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

NewsComponent.defaultProps = {
  pageSize: 21,
  category: "general",
}

export default NewsComponent