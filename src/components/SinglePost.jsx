import React, { useEffect, useState } from 'react'
import MainHeader from './MainHeader'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./Style.css"
import Footer from './Footer'

function SinglePost() {
    const [CurrentPost, setCurrentPost]=useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const previousId = parseInt(id) - 1;
        axios.get(`https://api.npoint.io/44c1c313d40c0811ad19/${previousId}`)
            .then((response) => setCurrentPost(response.data))
            .catch((error) => console.log(error))
    }, [id]);
  return (
    <div>
        <MainHeader />
        <div className="PostContainer">
            <div className='colourForSinglePost'>

            </div>

            <div className=''>
                <img src={CurrentPost.image} alt="" className="ImageOfPost" />
            </div>
            <div className="PostText">
                <h3>
                    {CurrentPost.title}
                </h3>
                <p>
                    {CurrentPost.description}
                </p>
            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default SinglePost