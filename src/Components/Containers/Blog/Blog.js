import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <>
      <span className="Anchor" id="ScrollBlog"></span>
      <div className="BlogContainer">
        <div>
          <h1>Latest blog posts</h1>

          <div className="BlogArea">
            <div className="Blog">
              <div>
                <img
                  src="imgs/gallery1.jpg"
                  alt=""
                  width="400px"
                  height="200px"
                />
                <h2>Ornare arcu odio ut sem</h2>
              </div>

              <div>
                <div className="BlogUser">
                  <img src="imgs/team1.jpg" alt="" />
                  <h3>Swetaa sin</h3>
                </div>
              </div>
            </div>
            <div className="Blog">
              <div>
                <img src="imgs/gallery2.jpg" alt="" />
                <h2>Eget dolor morbi non arcu risus quis varius</h2>
              </div>
              <div>
                <div className="BlogUser">
                  <img src="imgs/team2.jpg" alt="" />
                  <h3>Ajay dev</h3>
                </div>
              </div>
            </div>
            <div className="Blog">
              <div>
                <img src="imgs/gallery3.jpg" alt="" />
                <h2>Pharetra pharetra massa massa</h2>
              </div>

              <div>
                <div className="BlogUser">
                  <img src="imgs/team3.jpg" alt="" />
                  <h3>David tyle</h3>
                </div>
              </div>
            </div>
            <div className="Blog">
              <div>
                <img src="imgs/gallery4.jpg" alt="" />
                <h2>Dolor morbi non arcu risus quis fringilla</h2>
              </div>

              <div>
                <div className="BlogUser">
                  <img src="imgs/team4.jpg" alt="" />
                  <h3>Alex sin</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
