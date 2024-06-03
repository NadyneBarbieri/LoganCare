import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState, useEffect } from 'react';
import React from "react";
import './Carrossel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Linux from '../assets/Linux.png'
import Linux_dark from '../assets/Linux_dark.png'
import Windows from "../assets/Windows.png"
import Windows_dark from "../assets/Windows_dark.png"

import Java from '../assets/Java.png'
import Java_dark from '../assets/Java_dark.png'
import Python from '../assets/Python.png'
import Python_dark from '../assets/Python_dark.png'
import CPlusPlus from '../assets/C++.png'
import CPlusPlus_dark from '../assets/C++_dark.png'

import HTML5 from '../assets/HTML5.png'
import HTML5_dark from '../assets/HTML5_dark.png'
import CSS3 from '../assets/CSS3.png'
import CSS3_dark from '../assets/CSS3_dark.png'
import TypeScript from '../assets/TypeScript.png'
import TypeScript_dark from '../assets/TypeScript_dark.png'
import JavaScript from '../assets/JavaScript.png'
import JavaScript_dark from '../assets/JavaScript_dark.png'

import Angular from '../assets/Angular.png'
import Angular_dark from '../assets/Angular_dark.png'
import FReact from '../assets/React.png';
import FReact_dark from '../assets/React_dark.png'  

import VScode from '../assets/VSCode.png'
import VScode_dark from '../assets/VSCode_dark.png'
import Eclipse from '../assets/Eclipse.png'
import Eclipse_dark from '../assets/Eclipse_dark.png'
import Arduino from '../assets/Arduino.png'
import Arduino_dark from '../assets/Arduino_dark.png'
import Postman_dark from '../assets/Postman_dark.png'
import Postman from '../assets/Postman.png'
import SpringBoot_dark from '../assets/SpringBoot_dark.png' 
import SpringBoot from '../assets/SpringBoot.png' 
import nodejs_dark from '../assets/NodeJS_dark.png'
import nodeJS_ from '../assets/NodeJS.png'
import MySQL_dark from '../assets/MySQL_dark.png'
import MySQL from '../assets/MySQL.png'
import Git from'../assets/Git.png'
import Git_dark from'../assets/Git_dark.png'



const Card = (props) => {
    return (
        <div class="card">
            <div class="image">
            <img src={props.img} alt="" id={props.id} />
            </div>
            <div class="text-content">
            <h3>{props.nome}</h3>
            <p>Inicio dos estudos em:</p>
            <p>{props.mes} {props.data} </p>
            </div>
        </div>
    );
};

const Carrossel = (props) => {
  const [slidesPerView, setPerView] = useState(2)
  useEffect(()=>{
    function hadleResize(){
      if(window.innerWidth > 768){
        setPerView(2);
      }else{
        setPerView(1);
      }
    }
    hadleResize()

    window.addEventListener("resize", hadleResize)
    return()=>{
      window.removeEventListener("resize", hadleResize)
    }
  },[]) 

  const isDarkMode = props.isDarkMode
  return (
    <>
    <div className='titulo'>
    <h2>Sistema Operacional</h2>
    <hr/>
    </div>
    <Swiper
      className="Swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={1}
      slidesPerView={slidesPerView}
      Scrollbar={{ draggable: true }}
      onSlideChange={() =>{}}
      onSwiper={(swiper) => {}}
      >
        <SwiperSlide>
          <Card img={isDarkMode ? Linux_dark : Linux} nome="Linux" mes="Setembro de" data={2022} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={isDarkMode ? Windows_dark : Windows} nome="Windows" mes="fevereiro de" data={2009} />
        </SwiperSlide>
      </Swiper>
      <div className='titulo'>
        <h2>Framework </h2>
        <hr/>
      </div>
      <Swiper
        className="Swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={1}
        slidesPerView={slidesPerView}
        Scrollbar={{ draggable: true }}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
      <SwiperSlide>
          <Card img={isDarkMode ? FReact_dark : FReact} nome="React" mes="Setembro de" data={2022} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={isDarkMode ? Angular_dark : Angular} nome="Angular" mes="janeiro de" data={2022} />
        </SwiperSlide>
        </Swiper>
      <div className='titulo'>
        <h2>Backend</h2>
        <hr/>
      </div>
      <Swiper
        className="Swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={1}
        slidesPerView={slidesPerView}
        Scrollbar={{ draggable: true }}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide>
          <Card img={isDarkMode ? Java_dark : Java} nome="Java" mes="Janeiro de" data={2022} />
        </SwiperSlide>
        
        <SwiperSlide>
          <Card img={isDarkMode ? Python_dark : Python} nome="Python" mes="Fevereiro de" data={2023} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={isDarkMode ? CPlusPlus_dark : CPlusPlus} nome="C++" mes="Fevereiro de" data={2023} />
        </SwiperSlide>
      </Swiper>
      
        
      <div className='titulo'>
        <h2>Frontend</h2>
        <hr/>
      </div>
      <Swiper
        className="Swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={1}
        slidesPerView={slidesPerView}
        Scrollbar={{ draggable: true }}
        onSlideChange={() =>{}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide>
          <Card img={isDarkMode ? HTML5_dark:HTML5} nome="HTML5" mes="Março de:" data={2022} />
        </SwiperSlide>
        
        <SwiperSlide>
          <Card img={isDarkMode ? CSS3_dark : CSS3} nome="CSS3" mes="Março de" data={2022} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={isDarkMode ? TypeScript_dark : TypeScript} nome="TypeScript" mes="Março de" data={2022} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={isDarkMode ? JavaScript_dark : JavaScript} nome="JavaScript" mes="Setembro de" data={2022} />
        </SwiperSlide>
      </Swiper>

        <div className='titulo'>
        <h2>IDE</h2>
        <hr/>
      </div>
      <Swiper
        className="Swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={1}
        slidesPerView={slidesPerView}
        Scrollbar={{ draggable: true }}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide>
          <Card img={isDarkMode ? VScode_dark : VScode} nome="VScode" mes="Janeiro de" data={2022} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={isDarkMode ? Eclipse_dark : Eclipse} nome="Eclipse" mes="Fevereiro de" data={2023} />
        </SwiperSlide> 
        <SwiperSlide>
          <Card img={isDarkMode ? Arduino_dark : Arduino} nome="Arduino" mes="Fevereiro de" data={2023} />
        </SwiperSlide>
      </Swiper>

      <div className='titulo'>
        <h2>Tools</h2>
        <hr/>
      </div>
      <Swiper
        className="Swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={1}
        slidesPerView={slidesPerView}
        Scrollbar={{ draggable: true }}
        onSlideChange={() =>{}}
        onSwiper={(swiper) => {}}
      >
         <SwiperSlide>
          <Card img={isDarkMode ? Postman_dark : Postman} nome="Postman" mes="Fevereiro de" data={2022} />
        </SwiperSlide>

        <SwiperSlide>
          <Card img={isDarkMode ? SpringBoot_dark : SpringBoot} nome="SpingBoot" mes="Setembro de" data={2022} />
        </SwiperSlide>
        
        <SwiperSlide>
          <Card img={isDarkMode ? nodejs_dark : nodeJS_} nome="NodeJS" mes="Janeiro de" data={2022} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={isDarkMode ? MySQL_dark : MySQL} nome="MySQL" mes="Janeiro de" data={2022} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={isDarkMode ? Git_dark : Git} nome="Git" mes="Janeiro de" data={2022} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};



export default Carrossel;
