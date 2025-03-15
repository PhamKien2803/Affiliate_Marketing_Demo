import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "Dinh dưỡng cho bà bầu trong 3 tháng đầu",
    description: "Những thực phẩm quan trọng mẹ bầu cần bổ sung để có một thai kỳ khỏe mạnh.",
    image: "https://medlatec.vn/media/15599/content/20200421_dinh-duong-cho-ba-bau.png",
    views: 1200,
    affiliateLink: "https://shopee.vn/dinh-duong-ba-bau"
  },
  {
    id: 2,
    title: "Những điều cần biết khi siêu âm thai nhi",
    description: "Hướng dẫn chi tiết về các mốc siêu âm quan trọng trong thai kỳ.",
    image: "https://medlatec.vn/media/15599/content/20200421_dinh-duong-cho-ba-bau.png",
    views: 950,
    affiliateLink: "https://shopee.vn/sieu-am-thai-nhi"
  },
  {
    id: 3,
    title: "Mẹo giảm nghén hiệu quả cho mẹ bầu",
    description: "Những cách đơn giản để giảm bớt triệu chứng ốm nghén khi mang thai.",
    image: "https://medlatec.vn/media/15599/content/20200421_dinh-duong-cho-ba-bau.png",
    views: 780,
    affiliateLink: "https://shopee.vn/meo-giam-nghen"
  }
];

function SauSinh() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", display: "flex", gap: "20px" }}>

      {/* Main Content */}
      <div style={{ flex: 2 }}>

        {/* Hero Section */}
        <div style={{ marginBottom: "20px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          <Carousel>
            {blogs.map((blog) => (
              <Carousel.Item key={blog.id}>
                <img className="d-block w-100" src={blog.image} alt={blog.title} style={{ borderRadius: "8px" }} />
                <Carousel.Caption>
                  <h3>{blog.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* List of Articles */}
        {blogs.map((blog) => (
          <div key={blog.id} style={{ display: "flex", marginBottom: "20px", padding: "15px", borderRadius: "8px", background: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
            <img src={blog.image} alt={blog.title} style={{ width: "150px", height: "100px", objectFit: "cover", borderRadius: "5px", marginRight: "15px" }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "18px", marginBottom: "5px", color: "#007bff" }}>{blog.title}</h3>
              <p style={{ fontSize: "14px", color: "#666" }}>{blog.description}</p>
              <p style={{ fontSize: "12px", color: "#999" }}>👁 {blog.views} views</p>
              <Link to={`/blog/${blog.id}`} style={{ textDecoration: "none", color: "#fff" }}>
                <button style={{ padding: "8px 12px", background: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "8px" }}>Đọc thêm</button>
              </Link>
            </div>
          </div>
        ))}

        {/* Affiliate Section */}
        <div style={{ textAlign: "center", marginTop: "30px", padding: "20px", background: "orange", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <a href="https://shopee.vn/san-pham-quang-cao" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/300x150" alt="Quảng cáo" style={{ width: "100%", borderRadius: "8px" }} />
          </a>
          <p style={{ fontSize: "14px", marginTop: "10px", color: "#333", fontWeight: "bold" }}>🔥 Khuyến mãi đặc biệt! Mua ngay 🔥</p>
        </div>
      </div>

      {/* Sidebar */}
      <div style={{ flex: 1, background: "#f8f9fa", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
        <h3 style={{ marginBottom: "15px", fontSize: "20px", color: "#007bff" }}>Tin Nổi Bật</h3>
        {blogs.map((blog) => (
          <div key={blog.id} style={{ display: "flex", alignItems: "center", marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
            <img src={blog.image} alt={blog.title} style={{ width: "80px", height: "60px", objectFit: "cover", borderRadius: "5px", marginRight: "10px" }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>{blog.title}</p>
              <a href={blog.affiliateLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#ff5722", textDecoration: "none" }}>🛒 Mua ngay</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SauSinh;
