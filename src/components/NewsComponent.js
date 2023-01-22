import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComponent extends Component {

  static defaultProps = {
    pageSize: 21,
    category: "general",
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
    document.title = `NewsDezire | ${this.props.category.charAt(0).toUpperCase() + this.props.category.substr(1)}`;
  }
  updateNews = async () => {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=${this.props.apiKey}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(80);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    // console.log("ran fetch more page =" + this.state.page)
    this.updateNews();
  }

  render() {
    return (
      <>

        <h1 className='text-center my-3'>Top {this.props.category} headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner />}
        >
          <div className='container my-3'>
            <div className='row'>
              {this.state.articles.map((element) => {
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
}

export default NewsComponent