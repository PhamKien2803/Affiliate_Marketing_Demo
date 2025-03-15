import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const blogData = [
  {
    id: 1,
    title: "Dinh dưỡng cho bà bầu trong 3 tháng đầu",
    description: "Những thực phẩm quan trọng mẹ bầu cần bổ sung để có một thai kỳ khỏe mạnh.",
    image: "https://procarevn.vn/wp-content/uploads/2016/04/first-trimester-nutrition-page-001.jpg",
    views: 1200
  },
  {
    id: 2,
    title: "Những điều cần biết khi siêu âm thai nhi",
    description: "Hướng dẫn chi tiết về các mốc siêu âm quan trọng trong thai kỳ.",
    image: "https://easterngroup.com.vn/uploads/image-3-compressed2.jpg",
    views: 950
  },
  {
    id: 3,
    title: "Mẹo giảm nghén hiệu quả cho mẹ bầu",
    description: "Những cách đơn giản để giảm bớt triệu chứng ốm nghén khi mang thai.",
    image: "https://vnmedia2.monkeyuni.net/upload/web/storage_web/29-04-2022_11:01:24_14-meo-dan-gian-chua-om-nghen.jpg",
    views: 780
  }
];

const initialComments = [
  { id: 1, name: "Nguyễn Văn A", avatar: "https://via.placeholder.com/50", text: "Bài viết rất hữu ích! Cảm ơn bạn." },
  { id: 2, name: "Trần Thị B", avatar: "https://via.placeholder.com/50", text: "Mình đã áp dụng và thấy hiệu quả lắm." },
  { id: 3, name: "Lê Văn C", avatar: "https://via.placeholder.com/50", text: "Có thêm thông tin về chế độ ăn uống nữa không ạ?" }
];


function MangThai() {
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", textTransform: "capitalize", marginBottom: "20px" }}>Mang Thai</h1>

      {/* Carousel Section */}
      <Carousel style={{ marginBottom: "30px" }}>
        {blogs.map((blog) => (
          <Carousel.Item key={blog.id}>
            <img className="d-block w-100" src={blog.image} alt={blog.title} style={{ borderRadius: "8px" }} />
            <Carousel.Caption>
              <h3>{blog.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Video Section */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/rcimc--zocw" // Link chuẩn
          title="Video Mang Thai"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "8px" }}
        ></iframe>
      </div>


      {/* Blog List */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {blogs.map((blog) => (
          <div key={blog.id} style={{ border: "1px solid #eee", padding: "15px", borderRadius: "8px", background: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <h2 style={{ fontSize: "18px", color: "#333", marginTop: "10px" }}>{blog.title}</h2>
            <p style={{ fontSize: "14px", color: "#555" }}>{blog.description}</p>
            <p style={{ fontSize: "14px", color: "#777" }}>👁 {blog.views} views</p>
            <button onClick={() => navigate(`/blog/${blog.id}`)} style={{ marginTop: "10px", padding: "8px 12px", border: "none", background: "#007bff", color: "white", borderRadius: "5px", cursor: "pointer" }}>Read More</button>
          </div>
        ))}
      </div>

      {/* Comment Section */}
      <div style={{
        marginTop: "40px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "#f9f9f9"
      }}>
        <h3>Bình luận</h3>

        {/* Danh sách bình luận giả lập */}
        <div>
          {comments.map((comment, index) => (
            <div key={index} style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
              padding: "10px",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              <img
                src={comment.avatar}
                alt={comment.name}
                style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
              />
              <div>
                <strong>{comment.name}</strong>
                <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ô nhập bình luận */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
          />
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Viết bình luận..."
            style={{
              flex: "1",
              padding: "10px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              outline: "none"
            }}
          />
          <button
            onClick={handleCommentSubmit}
            style={{
              padding: "8px 12px",
              marginLeft: "10px",
              border: "none",
              background: "#1877F2",
              color: "white",
              borderRadius: "20px",
              cursor: "pointer"
            }}
          >
            Gửi
          </button>
        </div>
      </div>

    </div>
  );
}

export default MangThai;
