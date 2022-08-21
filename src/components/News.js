import React, { Component } from "react";
import Spinner from "../Spinner";
import Newsmonkey from "./Newsmonkey";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

   capitalizeFirstLetter=(string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: (this.articles = []),
      loading: false,
      page: 1,
    };
    document.title = this.capitalizeFirstLetter(`${this.props.category} - LiveNews`)
  }

  updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1877fb5c99ff40c9a051ed08ece32067&page=${this.state.page}&pagesize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  };
  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1877fb5c99ff40c9a051ed08ece32067&page=1&pagesize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    //  if(!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))){

    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1877fb5c99ff40c9a051ed08ece32067&page=${
    //     this.state.page + 1
    //   }&pagesize=${this.props.pageSize}`;
    //   this.setState({loading:true})
    //   let data = await fetch(url);

    //   let parsedata = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedata.articles,
    //     loading:false,
    //   });
    //   console.log(this.props.pageSize)
    //  }

    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    this.updateNews();
  };

  handlePreviClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1877fb5c99ff40c9a051ed08ece32067&page=${
    //   this.state.page - 1
    // }&pagesize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);

    // let parsedata = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedata.articles,
    //   loading:false,
    // });

    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center" style={{ margin: "35px 0px" }}>
            India - Top Headlines {this.capitalizeFirstLetter(`${this.props.category}`)}
          </h1>
          {this.state.loading && <Spinner />}

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsmonkey
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
