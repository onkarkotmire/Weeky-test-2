import './Body.css'
import React from 'react'
import Card from './Card-parts/Card'
import dataArr from './Card-parts/Data/Data'


export default function Body() {

    return (
        <div className='Body-box'>
          <h1>Our Projects</h1>
          <div className="card-box-main">
            <Card imgsrc={dataArr[0].src}
             cityname={dataArr[0].projectname}
            />
             <Card imgsrc={dataArr[1].src}
             cityname={dataArr[1].projectname}
            />
             <Card imgsrc={dataArr[2].src}
             cityname={dataArr[2].projectname}
            />
             <Card imgsrc={dataArr[3].src}
             cityname={dataArr[3].projectname}
            />
            <Card imgsrc={dataArr[4].src}
             cityname={dataArr[4].projectname}
            />
            <Card imgsrc={dataArr[5].src}
             cityname={dataArr[5].projectname}
            />
            <Card imgsrc={dataArr[6].src}
             cityname={dataArr[6].projectname}
            />
            <Card imgsrc={dataArr[7].src}
             cityname={dataArr[7].projectname}
            />
            <Card imgsrc={dataArr[8].src}
             cityname={dataArr[8].projectname}
            />

     
          </div>
        </div>
      ) 

    }