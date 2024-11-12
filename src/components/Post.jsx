import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";
import './Post.css'
import { Link } from "react-router-dom";
function Post() {
  const [data, setData] = useState([]);
  const numberOfPostsToShow = 3;

  useEffect(() => {
    axios
      .get("https://api.npoint.io/44c1c313d40c0811ad19")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [numberOfPostsToShow]);

  const ControlOfDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };
  return (
    <div className="postsContainer">
      {data &&
        data.slice(1, 6).map((value, index) => (
          <div key={index} className="postCard">
            <div className="post">
              <img src={value.image} alt="" className="postImage" />
              <div className="postContent">
                <h2 className="postTitle">{value.title}</h2>
                <p className="postDescription">
                  {ControlOfDescription(value.description, 100)}
                </p>
                <Link to={`Post/${value.id}`}>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Learn More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Post;
