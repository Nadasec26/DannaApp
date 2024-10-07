import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { format, isToday, isYesterday, parseISO } from "date-fns";
import {
  ArticlesSkeleton,
  PopularArticlesSkeleton,
} from "../../skeleton/ArticlesSkeleton";

import Rectangle1 from "../../images/mother.jpg";
import Ellipse from "../../images/child.png";
import Rectangle4 from "../../images/mot.jpg";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { useSelector } from "react-redux";
import Avatar from "../../shared/components/Avatar.js";

const Articles = () => {
  const [articles, setArticles] = useState({
    articles: [],
    error: "",
    loading: true,
  });
  const [popularArticles, setPopularArticles] = useState({
    popularArticles: [],
    error: "",
    loading: true,
  });

  const fetchArticles = async () => {
    try {
      const response = await axios.get(baseURL + "articles");
      setArticles({
        articles: response.data.result,
        loading: false,
        error: null,
      });
    } catch (err) {
      setArticles({
        articles: [],
        loading: false,
        error: err,
      });
    }
  };

  const fetchPopularArticles = async () => {
    try {
      const response = await axios.get(baseURL + "articles", {
        params: {
          sort: "-likes,-comments",
        },
      });
      setPopularArticles({
        popularArticles: response.data.result,
        loading: false,
        error: null,
      });
    } catch (err) {
      setPopularArticles({
        popularArticles: [],
        loading: false,
        error: err,
      });
    }
  };

  useEffect(() => {
    fetchPopularArticles();
    fetchArticles();
  }, []);

  return (
    <div className="articles" style={{ fontFamily: "Amaranth" }}>
      <div className="container">
        <h1 className="text-center" style={{ color: "#32AA90" }}>
          Medical Articles
        </h1>
        <div className="page_articles">
          <div className="row gy-4">
            <div className="col-sm-8">
              <div className="card mb-3 card_article border-0">
                <img src={Rectangle1} className="card-img-top" alt="..." />
                <div className="card-body card_txt">
                  <h5 className="card-title text-center fs-3">
                    Why is it important to take care of our children?
                  </h5>
                  <p className="card-text text-center ">
                    Children without adequate care are less likely to attend or
                    do well in school, less able to access health and other
                    basic services, more likely to engage in anti-social and
                    criminal behaviours, and in many cases their physical,
                    emotional and cognitive development is compromised.{" "}
                  </p>
                </div>
              </div>
              <div className="row gy-4">
                {articles?.loading || articles?.error ? (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, auto)",
                      margin: "0 100px 0 0px",
                    }}
                  >
                    <ArticlesSkeleton />
                    <ArticlesSkeleton />
                    <ArticlesSkeleton />
                    <ArticlesSkeleton />
                  </div>
                ) : (
                  articles?.articles.map((article) => (
                    <Article article={article} />
                  ))
                )}
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="card border-0 card_child shadow p-4 text-center"
                style={{ background: "#D9D9D9" }}
              >
                <div className="justify-content-center">
                  <img src={Ellipse} className="card-img-top w-50" alt="..." />
                </div>
                <div className="card-body card_txt">
                  <h5 className="card-title">
                    Are you tired of raising children?
                  </h5>
                  <p className="card-text">
                    The modern mother is under great pressure to do everything!
                    We tend to value the image of parents who do everything in
                    their power to provide a perfect life for their
                    <br /> children
                  </p>
                </div>
              </div>
              <div className="card card_child2 mt-4 border-0 shadow rounded">
                <img src={Rectangle4} className="card-img-top" alt="..." />
                <div className="card-body content">
                  <h5 className="card-title fs-4">
                    Are you tired of raising children?Here's what's easy for you
                  </h5>
                  <p className="card-text">
                    The modern mother is under great pressure to do everything!
                    We tend to value the image of parents who do everything in
                    their power to provide a perfect life for their children
                  </p>
                  <div className="text-center justify-content-center">
                    <Link to={`/artdet`}>
                      <a
                        href="#"
                        className="btn  text-white rounded w-50"
                        style={{ background: "#32AA90" }}
                      >
                        Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="card mt-5 popular shadow rounded-3 border-0 h-25"
                style={{ background: "rgba(221, 221, 221, 0.16)" }}
              >
                <h4 className="text-center fw-bold">Most Popular</h4>
                <div className="baby_card mt-1">
                  {popularArticles.loading || popularArticles.error ? (
                    <PopularArticlesSkeleton />
                  ) : (
                    popularArticles.popularArticles.map((article) => (
                      <Link
                        key={article._id}
                        to={`/articleDetails/${article._id}`}
                      >
                        <div
                          className="card mb-3 shadow border-top border-3 border-warning rounded-3 border-0 bg-white p-2"
                          style={{ borderTop: "" }}
                        >
                          <div className="row">
                            <div className="d-flex">
                              <div
                                className="col-md-4"
                                style={{ width: "40%" }}
                              >
                                <img
                                  src={article.articleCover.url}
                                  alt={article.title}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="card-title text-primary">
                                    {article.title}
                                  </h5>
                                </div>
                              </div>
                              {/* style */}
                              {article.likes}
                              {article.comments}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommentComponent = ({ articleComments, articleID }) => {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const handleSendComment = async () => {
    if (!localStorage.getItem("token")) return navigate("/login");
    if (comment.trim() === "") {
      return;
    }
    try {
      axios.post(
        baseURL + "article-comments",
        {
          comment: comment,
          article: articleID,
        },
        {
          headers: {
            token: localStorage.getItem("token") ?? navigate("/login"),
          },
        }
      );
      setComment("");
    } catch (err) {}
  };

  return (
    <div
      className="modal fade"
      id="createModal"
      tabIndex="-1"
      aria-labelledby="createModalLabel"
      aria-hidden="true"
      data-bs-backdrop="false"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header align-items-center">
            <h5
              className="text-dark text-center w-100 m-0"
              id="exampleModalLabel"
            >
              Create Comment
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="main-container">
            {articleComments.map((comment) => (
              <div className="bg-white rounded p-2 mt-2">
                <div className="d-flex">
                  <div
                    className="d-flex flex-column align-items-center"
                    style={{ width: "50%" }}
                  >
                    <Avatar
                      username={comment?.user?.userName}
                      proImage={comment?.user?.profileImage?.url}
                    />
                    <p className="m-0">{comment?.user?.userName}</p>
                  </div>
                  <div
                    className="comment-container p-1 rounded w-100"
                    style={{ background: "#EEE" }}
                  >
                    {/* <p className="m-0 fw-bold">{comment?.user?.userName}</p> */}
                    <p className="m-0 px-1">{comment?.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="modal-body">
            <div className="d-flex">
              <div className="p-1">
                <Avatar
                  username={user.userName}
                  proImage={user.profileImage?.url}
                />
              </div>
              <div className="w-100">
                <input
                  type="text"
                  className="form-control rounded-pill bg-gray"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write a comment..."
                />
              </div>
              <div
                onClick={handleSendComment}
                style={{ cursor: "pointer" }}
                className="p-1"
              >
                <div
                  className="icon rounded-circle text-white text-center p-1"
                  style={{
                    background: "#32aa90",
                    width: "30px",
                    height: "30px",
                    transform: "rotate(45deg)",
                  }}
                >
                  <i className="bi bi-send-fill me-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Article = ({ article }) => {
  const doesUserLikeThis = article.usersLiked
    .map((user) => {
      return user._id;
    })
    .includes(localStorage.getItem("ID") ?? "ID");

  const navigate = useNavigate();
  const [share, setShare] = useState(false);
  const [like, setLike] = useState(doesUserLikeThis);

  return (
    <>
      <div key={article._id} className="col-lg-6 col-sm-12">
        {
          <div className="card border-0 box shadow rounded-3">
            <Link to={`/articleDetails/${article?._id}`}>
              <img
                src={article?.articleCover.url}
                className="card-img-top"
                alt={article?.title}
              />
              <div className="card-body content text-dark">
                <h5 className="card-title">{article?.title} </h5>
                <p className="card-text">
                  {article?.description.slice(0, 200)}...
                </p>
              </div>
            </Link>
            <div className="info d-flex justify-content-between p-2">
              <p>
                {isToday(parseISO(article?.updatedAt))
                  ? "Today"
                  : isYesterday(parseISO(article?.updatedAt))
                  ? "Yesterday"
                  : format(parseISO(article?.updatedAt), "yyyy-MM-dd")}
              </p>
              <ul className="icons d-flex gap-4">
                <a>
                  <li>
                    <i
                      className="bi bi-share"
                      onClick={() => {
                        setShare(!share);
                      }}
                    ></i>
                  </li>
                </a>
                <a>
                  <li data-bs-toggle="modal" data-bs-target="#createModal">
                    <i className="bi bi-chat-left"></i>
                  </li>
                </a>
                <a className="d-flex gap-1 text-dark">
                  {article?.likes + (like ? 1 : 0)}
                  <li style={{ color: "#FE6C93" }}>
                    <i
                      className={`bi bi-heart${like ? "-fill" : ""}`}
                      onClick={async () => {
                        setLike(!like);
                        try {
                          if (!localStorage.getItem("token"))
                            return navigate("/login");
                          const method = like ? "DELETE" : "PATCH";
                          const url = `${baseURL}articles/likes/${article._id}`;
                          axios({
                            method: method,
                            url: url,
                            headers: {
                              token:
                                localStorage.getItem("token") ??
                                navigate("/login"),
                            },
                          });
                        } catch (err) {}
                      }}
                    ></i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        }
        <CommentComponent
          articleComments={article.articleComments}
          articleID={article._id}
        />
        {share && (
          <div className="share">
            <div className="card border-0 shadow w-75 p-3 mt-3 ms-5">
              <div className="row">
                <div className="col">
                  <FacebookShareButton
                    url={"https://www.youtube.com/watch?v=2BnTYEafRQc"}
                    quote={"Dummy text!"}
                    hashtag="#muo"
                  >
                    <FacebookIcon size={50} round />
                  </FacebookShareButton>
                </div>
                <div className="col">
                  <TwitterShareButton
                    url={"https://www.youtube.com/watch?v=2BnTYEafRQc"}
                    quote={"Dummy text!"}
                    hashtag="#muo"
                  >
                    <TwitterIcon size={50} round />
                  </TwitterShareButton>
                </div>
                <div className="col">
                  <WhatsappShareButton
                    url={"https://www.youtube.com/watch?v=2BnTYEafRQc"}
                    quote={"Dummy text!"}
                    hashtag="#muo"
                  >
                    <WhatsappIcon size={50} round />
                  </WhatsappShareButton>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <LinkedinShareButton
                    url={"https://www.youtube.com/watch?v=2BnTYEafRQc"}
                    quote={"Dummy text!"}
                    hashtag="#muo"
                  >
                    <LinkedinIcon size={50} round />
                  </LinkedinShareButton>
                </div>
                <div className="col">
                  <TelegramShareButton
                    url={"https://www.youtube.com/watch?v=2BnTYEafRQc"}
                    quote={"Dummy text!"}
                    hashtag="#muo"
                  >
                    <TelegramIcon size={50} round />
                  </TelegramShareButton>
                </div>
                <div className="col">
                  <EmailShareButton
                    url={"https://www.youtube.com/watch?v=2BnTYEafRQc"}
                    quote={"Dummy text!"}
                    hashtag="#muo"
                  >
                    <EmailIcon size={50} round />
                  </EmailShareButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Articles;
