import React from 'react'
// Components
import VideoCard from "./VideoCard";

const VideoCarousel = () => {
    return (
        <div className="row my-4 justify-content-center">

            <VideoCard title="How To Add Dark Mode On Website | Now No Regrets" thumbnail="https://i.ytimg.com/vi/8aTFTS44KZs/maxresdefault.jpg" videoURL="https://www.youtube.com/embed/8aTFTS44KZs" />

            <VideoCard title="Master JavaScript Local Storage in 10 Minutes | Easy Guide | Now No Regrets" thumbnail="https://i.ytimg.com/vi/TGIl4R2Edto/maxresdefault.jpg"
                videoURL="https://www.youtube.com/embed/TGIl4R2Edto" />

            <VideoCard title="Create Background Remover Tool Using JS | Now No Regrets" thumbnail="https://i.ytimg.com/vi/kdHnBBsHx-g/maxresdefault.jpg" videoURL="https://www.youtube.com/embed/kdHnBBsHx-g" />


            <VideoCard title="Build Your Own Qr Code Generator Using JS | Now No Regrets" thumbnail="https://i.ytimg.com/vi/xoXXp1jFO1Y/maxresdefault.jpg"
                videoURL="https://www.youtube.com/embed/xoXXp1jFO1Y" />

            <VideoCard title="How To Make Expense Tracker Using JS | Part 3 | Now No Regrets" thumbnail="https://i.ytimg.com/vi/EVwiYD_nktc/maxresdefault.jpg"
                videoURL="https://www.youtube.com/embed/EVwiYD_nktc" />

            <VideoCard title="Build You Own AzadiPoster Maker Using JavaScript | Now No Regrets" thumbnail="https://i.ytimg.com/vi/hXtvt3jpmc0/maxresdefault.jpg" videoURL="https://www.youtube.com/embed/hXtvt3jpmc0" />
        </div>
    )
}

export default VideoCarousel
