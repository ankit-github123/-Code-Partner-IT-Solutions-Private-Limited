import React from "react"
import "../components/imageList.css"
const imageList = (props) => {
    console.log(props.images);
   const Img = props.images.map((image=>{
        return <img src={ image.urls.small} alt="i"/>
    }))
    console.log(Img);
    return  (<div className="row image-pic">
    <div className="cool-lg-4">
    {Img}</div>
    </div>
    )
}

export default imageList