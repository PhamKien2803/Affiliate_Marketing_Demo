import 'swiper/css';
import 'swiper/css/navigation';
import './App.css'

function App() {

  return (
    <>
      <div>
        <header className="container">
          <div className="d-flex justify-content-between align-content-center pt-3 pb-3">
            <div>
              <h4>MomUNI</h4>
            </div>
            <div className="d-flex justify-content-around align-content-center gap-lg-5">
              <div>
                <p className="fs-5 mb-0">HOME</p>
              </div>
              <div>
                <p className="fs-5 mb-0">ABOUT</p>
              </div>
              <div>
                <p className="fs-5 mb-0">BLOGS</p>
              </div>
              <div>
                <p className="fs-5 mb-0">CONTACT</p>
              </div>
            </div>
            <div className="d-flex gap-3">
              <div><i style={{ fontSize: 25 }} className="bi bi-search" /></div>
              <div><i style={{ fontSize: 25 }} className="bi bi-person" /></div>
              <div><i style={{ fontSize: 25 }} className="bi bi-heart" /></div>
            </div>
          </div>
        </header>
        <div style={{ backgroundColor: '#F5F5F5', padding: '80px 0 80px 0' }}>
          <div className="text-center">
            <p style={{ letterSpacing: 10 }} className="display-4 text-uppercase">ABOUT US</p>
          </div>
          <div className="text-center">
            <p className="fs-5">Home &gt;
              <span className="fs-5" style={{ textDecoration: 'underline' }}>About Us</span>
            </p>
          </div>
        </div>
        <div className="container">
          <div style={{ padding: '100px 0 100px 0' }}>
            <div className="row justify-content-center">
              <div className="content-intro col-3">
                <i className="bi bi-cart icon-content" />
                <div>
                  <p className="head-content">Free delivery</p>
                  <p className="body-content">Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="content-intro col-3">
                <i className="bi bi-award icon-content" />
                <div>
                  <p className="head-content">Quality guarantee</p>
                  <p className="body-content">Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
                </div>
              </div>
              <div className="content-intro col-3">
                <i className="bi bi-tag icon-content" />
                <div>
                  <p className="head-content">Daily offers</p>
                  <p className="body-content">Amet consectetur adipi elit loreme ipsum dolor sit.</p>
                </div>
              </div>
              <div className="content-intro col-3">
                <i className="bi bi-shield-plus icon-content" />
                <div>
                  <p className="head-content">100% secure payment</p>
                  <p className="body-content">Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingBottom: 100 }} className="row">
            <div className="col-6"><img src="https://cdn.chiaki.vn/unsafe/0x480/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/04/elevit-bau-chinh-hang-uc-vitamin-ba-bau-100-vien-64351c5b56d64-11042023153747.jpg" alt="image" /></div>
            <div className="col-6 mt-5">
              <div>
                <p style={{ fontSize: 22, textTransform: 'uppercase' }}>Dietary Supplements for
                  Pregnant Mothers – Comprehensive Nutrition for a
                  Healthy Pregnancy</p>
              </div>
              <div>
                <p style={{ fontSize: 17 }}>Prenatal supplements provide essential nutrients such as iron, calcium,
                  DHA, folic acid, and
                  vital vitamins to support the overall development of the baby.
                  These supplements not only help boost maternal health and reduce fatigue but also support brain
                  development and strengthen the immune system of the baby from the womb. Some products also
                  include probiotics to promote digestive health and reduce constipation during pregnancy.
                  Choosing the right prenatal supplements ensures a healthy, safe pregnancy, helping mothers
                  prepare for the journey of motherhood with confidence.</p>
              </div>
              <div><button className="border button-content">Go To
                Blog</button>
              </div>
            </div>
          </div>
          <div className="title-review d-flex gap-3 align-content-center">
            <h2>Customers reviews</h2>
          </div>
        </div>
        <div style={{ height: 500, paddingTop: 20 }}>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide p-5">
                <div>
                  <p className="mb-0 text-review">“I stumbled upon this tech store while searching for                   a new laptop, and I
                    could not be happier
                    with my experience! The staff was incredibly knowledgeable and guided me through the process
                    of choosing the perfect device for my needs. Highly recommended!”</p>
                </div>
                <div className="star-review">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <div>
                  <p className="orthor">Emma Chamberlin</p>
                </div>
              </div>
              <div className="swiper-slide p-5">
                <div>
                  <p className="mb-0 text-review">“I stumbled upon this tech store while searching for a new laptop, and I could not be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!”</p>
                </div>
                <div className="star-review">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <div>
                  <p className="orthor">Emma Chamberlin</p>
                </div>
              </div>
              <div className="swiper-slide p-5">
                <div>
                  <p className="mb-0 text-review">“I stumbled upon this tech store while searching for a new laptop,
                    and I
                    could not be happier
                    with my experience! The staff was incredibly knowledgeable and guided me through the process
                    of choosing the perfect device for my needs. Highly recommended!”</p>
                </div>
                <div className="star-review">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <div>
                  <p className="orthor">Emma Chamberlin</p>
                </div>
              </div>
              <div className="swiper-slide p-5">
                <div>
                  <p className="mb-0 text-review">“I stumbled upon this tech store while searching for a new laptop,
                    and I
                    could not be happier
                    with my experience! The staff was incredibly knowledgeable and guided me through the process
                    of choosing the perfect device for my needs. Highly recommended!”</p>
                </div>
                <div className="star-review">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <div>
                  <p className="orthor">Emma Chamberlin</p>
                </div>
              </div>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
        <div className="container">
          <div className="title-review d-flex gap-3 align-content-center">
            <h2>Latest posts</h2>
          </div>
          <div className="row pt-3" style={{ paddingBottom: 100 }}>
            <div className="col-3">
              <div><img style={{ width: '90%', height: 'auto' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRC01O16Q8k-OTHxqefLU38o7nxQtGZPJ5VA&s" alt="image" /></div>
              <div>
                <p style={{ fontSize: 20 }}>PreIQ – Essential Prenatal Supplement for Mothers</p>
              </div>
              <div>PreIQ is a premium prenatal supplement enriched with DHA, EPA, Iron, Folic Acid, Calcium, and
                Vitamin D3 to support the health of expecting mothers and fetal development. </div>
              <div className="pt-3">
                <p className="read-more">Read More</p>
              </div>
            </div>
            <div className="col-3">
              <div><img style={{ width: '90%', height: 'auto' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvWpvXm_pALMBHUx9Q-IWoy40WcjfqkVMviw&s" alt="image" /></div>
              <div>
                <p style={{ fontSize: 20 }}>PreIQ – Essential Prenatal Supplement for Mothers</p>
              </div>
              <div>PreIQ is a premium prenatal supplement enriched with DHA, EPA, Iron, Folic Acid, Calcium, and
                Vitamin D3 to support the health of expecting mothers and fetal development. </div>
              <div className="pt-3">
                <p className="read-more">Read More</p>
              </div>
            </div>
            <div className="col-3">
              <div><img style={{ width: '90%', height: 'auto' }} src="https://bacsihien.com/wp-content/uploads/2022/01/irowin-smile-baby.jpg" alt="image" /></div>
              <div>
                <p style={{ fontSize: 20 }}>PreIQ – Essential Prenatal Supplement for Mothers</p>
              </div>
              <div>PreIQ is a premium prenatal supplement enriched with DHA, EPA, Iron, Folic Acid, Calcium, and
                Vitamin D3 to support the health of expecting mothers and fetal development. </div>
              <div className="pt-3">
                <p className="read-more">Read More</p>
              </div>
            </div>
            <div className="col-3">
              <div><img style={{ width: '90%', height: 'auto' }} src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt3m4s1tmzyxd2" alt="image" /></div>
              <div>
                <p style={{ fontSize: 20 }}>PreIQ – Essential Prenatal Supplement for Mothers</p>
              </div>
              <div>PreIQ is a premium prenatal supplement enriched with DHA, EPA, Iron, Folic Acid, Calcium, and
                Vitamin D3 to support the health of expecting mothers and fetal development. </div>
              <div className="pt-3">
                <p className="read-more">Read More</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex p-5 gap-5 justify-content-center">
          <div>
            <h2 className="company">Nature’s Way</h2>
          </div>
          <div>
            <h2 className="company">Now Foods</h2>
          </div>
          <div>
            <h2 className="company">Nature Made</h2>
          </div>
          <div>
            <h2 className="company">Thorne Research</h2>
          </div>
        </div>
        <hr />
        <footer>
        </footer>
      </div>

    </>
  )
}

export default App
