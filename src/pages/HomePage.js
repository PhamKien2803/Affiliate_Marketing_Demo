import React from "react";
import "./HomePage.css";
import SubscriptionForm from "../components/SubcriptionForm";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="featured-section">
        <div className="featured-article">
          <img
            src="https://via.placeholder.com/600x400/ed008c/ffffff?text=Main+Feature"
            alt="Main Feature"
          />
          <h2>“Cần” tóc kiểu... (Main Headline)</h2>
          <p>Từng làm khuynh đảo... (Short description)</p>
        </div>
        <div className="sub-featured-articles">
          <div className="sub-featured-article">
            <img
              src="https://via.placeholder.com/250x150/ffcccc/333333?text=Sub+Feature+1"
              alt="Sub Feature 1"
            />
            <h3>Tiêu đề bài viết phụ 1</h3>
          </div>
          <div className="sub-featured-article">
            <img
              src="https://via.placeholder.com/250x150/ffcccc/333333?text=Sub+Feature+2"
              alt="Sub Feature 2"
            />
            <h3>Tiêu đề bài viết phụ 2</h3>
          </div>
        </div>
      </div>

      <div className="article-grid">
        <div className="article-item">
          <img
            src="https://via.placeholder.com/300x200/fff2f8/333333?text=Article+1"
            alt="Article 1"
          />
          <h4>Bài viết 1</h4>
          <p>Mô tả ngắn gọn cho bài viết 1.</p>
        </div>
        <div className="article-item">
          <img
            src="https://via.placeholder.com/300x200/fff2f8/333333?text=Article+2"
            alt="Article 2"
          />
          <h4>Bài viết 2</h4>
          <p>Mô tả ngắn gọn cho bài viết 2.</p>
        </div>
        <div className="article-item">
          <img
            src="https://via.placeholder.com/300x200/fff2f8/333333?text=Article+3"
            alt="Article 3"
          />
          <h4>Bài viết 3</h4>
          <p>Mô tả ngắn gọn cho bài viết 3.</p>
        </div>
        <div className="article-item">
          <img
            src="https://via.placeholder.com/300x200/fff2f8/333333?text=Article+4"
            alt="Article 4"
          />
          <h4>Bài viết 4</h4>
          <p>Mô tả ngắn gọn cho bài viết 4.</p>
        </div>
        {/* Add more articles as needed */}
      </div>
      <div className="subscription-flexcontainer">
        <SubscriptionForm />
        <img src="/assets/jungle1.jpg" alt="Subscribe" />
      </div>
    </div>
  );
};

export default HomePage;
