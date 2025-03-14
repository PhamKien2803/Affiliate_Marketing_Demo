import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import SubscriptionForm from "../components/SubcriptionForm";
import { Carousel } from "react-bootstrap";

const HomePage = () => {
  const [featured, setFeatured] = useState(null);
  const [subFeatured, setSubFeatured] = useState([]);
  const [articles, setArticles] = useState([]);
  const [caroselts, setCaroselts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [featuredRes, subFeaturedRes, articlesRes, caroselts] = await Promise.all([
          axios.get("/featured"),
          axios.get("/subFeatured"),
          axios.get("/articles"),
          axios.get("/caroselts"),
        ]);

        setFeatured(featuredRes.data);
        setSubFeatured(subFeaturedRes.data);
        setArticles(articlesRes.data);
        setCaroselts(caroselts.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!featured) return <p>Loading...</p>;

  return (
    <div className="homepage">
      {/* Featured Section */}
      <div className="featured-section">
        <div className="featured-article">
          <img src={featured?.image} alt={featured.title} />
          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
        </div>
        <div className="sub-featured-articles">
          {subFeatured.map((item, index) => (
            <div key={index} className="sub-featured-article">
              <img src={item?.image} alt={item?.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      

      {/* Slider Section */}
      <div className="slider-section">
        <Carousel>
          {caroselts.map((caroselts, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={caroselts?.image} alt={caroselts?.title} />
              <Carousel.Caption>
                <h3>{caroselts?.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Article Grid */}
      <div className="article-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-item">
            <img src={article?.image} alt={article.title} />
            <h4>{article.title}</h4>
            <p>{article.description}</p>
          </div>
        ))}
      </div>

      {/* Subscription Section */}
      <div className="subscription-flexcontainer">
        <SubscriptionForm />
        <img src="/assets/jungle1.jpg" alt="Subscribe" />
      </div>
    </div>
  );
};

export default HomePage;
