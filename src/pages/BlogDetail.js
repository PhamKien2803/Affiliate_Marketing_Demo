import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "./blogData"; // Import dữ liệu từ file riêng

function BlogDetail() {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === parseInt(id));

    if (!blog) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Bài viết không tồn tại!</h2>;

    // Lọc ra các bài viết nổi bật (trừ bài hiện tại)
    const featuredBlogs = blogData.filter((b) => b.id !== blog.id).slice(0, 3);

    return (
        <div style={{ display: "flex", maxWidth: "1200px", margin: "auto", padding: "20px", gap: "20px" }}>
            {/* Cột chính - Nội dung bài viết */}
            <div style={{ flex: "2", padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                <h1 style={{ fontSize: "28px", marginBottom: "10px", color: "#333" }}>{blog.title}</h1>
                <img src={blog.image} alt={blog.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }} />
                <div dangerouslySetInnerHTML={{ __html: blog.content }} style={{ lineHeight: "1.8", fontSize: "16px", color: "#444" }}></div>

                {/* Nút mua hàng Affiliate */}
                <a href={blog.affiliateLink} target="_blank" rel="noopener noreferrer"
                    style={{ display: "block", marginTop: "20px", padding: "12px", background: "#ff5722", color: "white", textAlign: "center", textDecoration: "none", borderRadius: "5px", fontSize: "18px", fontWeight: "bold" }}>
                    🛒 Mua sản phẩm liên quan
                </a>
            </div>

            {/* Cột phụ - Bài viết nổi bật */}
            <div style={{ flex: "1", padding: "20px", background: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                <h2 style={{ fontSize: "22px", marginBottom: "15px", color: "#007bff" }}>Bài viết nổi bật</h2>
                {featuredBlogs.map((item) => (
                    <div key={item.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                        <Link to={`/blog/${item.id}`} style={{ textDecoration: "none", color: "#333" }}>
                            <img src={item.image} alt={item.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "5px" }} />
                            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>{item.title}</h3>
                        </Link>
                    </div>
                ))}

                <h2 style={{ fontSize: "22px", marginBottom: "15px", color: "#007bff" }}>Bài viết nổi bật</h2>
                {featuredBlogs.map((item) => (
                    <div key={item.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                        <Link to={`/blog/${item.id}`} style={{ textDecoration: "none", color: "#333" }}>
                            <img src={item.image} alt={item.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "5px" }} />
                            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>{item.title}</h3>
                        </Link>
                    </div>
                ))}

                <h2 style={{ fontSize: "22px", marginBottom: "15px", color: "#007bff" }}>Bài viết nổi bật</h2>
                {featuredBlogs.map((item) => (
                    <div key={item.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                        <Link to={`/blog/${item.id}`} style={{ textDecoration: "none", color: "#333" }}>
                            <img src={item.image} alt={item.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "5px" }} />
                            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>{item.title}</h3>
                        </Link>
                    </div>
                ))}

                <h2 style={{ fontSize: "22px", marginBottom: "15px", color: "#007bff" }}>Bài viết nổi bật</h2>
                {featuredBlogs.map((item) => (
                    <div key={item.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                        <Link to={`/blog/${item.id}`} style={{ textDecoration: "none", color: "#333" }}>
                            <img src={item.image} alt={item.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "5px" }} />
                            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>{item.title}</h3>
                        </Link>
                    </div>
                ))}

                <h2 style={{ fontSize: "22px", marginBottom: "15px", color: "#007bff" }}>Bài viết nổi bật</h2>
                {featuredBlogs.map((item) => (
                    <div key={item.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                        <Link to={`/blog/${item.id}`} style={{ textDecoration: "none", color: "#333" }}>
                            <img src={item.image} alt={item.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "5px" }} />
                            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>{item.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: "20px",
                textAlign: "center",
                background: "#ffcc00",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                maxWidth: "300px",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
                <a href="https://shopee.vn/Kem-ngh%E1%BB%87-SMOM-s%C3%A1ng-da-T%C4%82%CC%A3NG-s%C6%B0%CC%83a-r%C6%B0%CC%89a-m%C4%83%CC%A3t-40ml-giu%CC%81p-m%E1%BB%9D-th%C3%A2m-n%C3%A1m-t%E1%BB%AB-thi%C3%AAn-nhi%C3%AAn-an-to%C3%A0n-cho-c%E1%BA%A3-m%E1%BA%B9-b%E1%BA%A7u-i.307922186.21779437449" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://files.oaiusercontent.com/file-WLc2T92Ausxb2JDJvo6X4d?se=2025-03-15T16%3A29%3A02Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1f984d9d-5907-43cb-8a99-320c2bec1822.webp&sig=O9HunCa0uS/nBOinz9Pbx6MXw5i89nd4tf2ZEip7XeI%3D"
                        alt="Quảng cáo"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "8px"
                        }}
                    />
                </a>
                <p style={{ fontSize: "14px", marginTop: "10px", color: "#333", fontWeight: "bold" }}>
                    🔥 Khuyến mãi đặc biệt! Mua ngay 🔥
                </p>


                <a href="https://shopee.vn/(Date-2027)Canxi-cho-b%C3%A0-b%E1%BA%A7u-Ostelin-Calcium-Vitamin-D3-130-vi%C3%AAn-c%E1%BB%A7a-%C3%9Ac-i.234561426.12930355007?sp_atk=ada04c5d-9380-403d-b9bc-5d5055c04584&xptdk=ada04c5d-9380-403d-b9bc-5d5055c04584" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1o28ja3vn3z43.png"
                        alt="Quảng cáo"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "8px"
                        }}
                    />
                </a>
                <p style={{ fontSize: "14px", marginTop: "10px", color: "#333", fontWeight: "bold" }}>
                    🔥 Khuyến mãi đặc biệt! Mua ngay 🔥
                </p>

                <a href="https://shopee.vn/Kem-ngh%E1%BB%87-SMOM-s%C3%A1ng-da-T%C4%82%CC%A3NG-s%C6%B0%CC%83a-r%C6%B0%CC%89a-m%C4%83%CC%A3t-40ml-giu%CC%81p-m%E1%BB%9D-th%C3%A2m-n%C3%A1m-t%E1%BB%AB-thi%C3%AAn-nhi%C3%AAn-an-to%C3%A0n-cho-c%E1%BA%A3-m%E1%BA%B9-b%E1%BA%A7u-i.307922186.21779437449" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://files.oaiusercontent.com/file-WLc2T92Ausxb2JDJvo6X4d?se=2025-03-15T16%3A29%3A02Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1f984d9d-5907-43cb-8a99-320c2bec1822.webp&sig=O9HunCa0uS/nBOinz9Pbx6MXw5i89nd4tf2ZEip7XeI%3D"
                        alt="Quảng cáo"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "8px"
                        }}
                    />
                </a>
                <p style={{ fontSize: "14px", marginTop: "10px", color: "#333", fontWeight: "bold" }}>
                    🔥 Khuyến mãi đặc biệt! Mua ngay 🔥
                </p>


                <a href="https://shopee.vn/(Date-2027)Canxi-cho-b%C3%A0-b%E1%BA%A7u-Ostelin-Calcium-Vitamin-D3-130-vi%C3%AAn-c%E1%BB%A7a-%C3%9Ac-i.234561426.12930355007?sp_atk=ada04c5d-9380-403d-b9bc-5d5055c04584&xptdk=ada04c5d-9380-403d-b9bc-5d5055c04584" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1o28ja3vn3z43.png"
                        alt="Quảng cáo"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "8px"
                        }}
                    />
                </a>
                <p style={{ fontSize: "14px", marginTop: "10px", color: "#333", fontWeight: "bold" }}>
                    🔥 Khuyến mãi đặc biệt! Mua ngay 🔥
                </p>
            </div>
        </div>
    );
}

export default BlogDetail;
