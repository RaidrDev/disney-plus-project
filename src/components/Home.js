import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies';
import Viewers from './Viewers';
import db from '../firebase';
import { combineReducers } from 'redux';

function Home() {

    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
          let tempMovies = snapshot.docs.map((doc)=>{
              console.log(doc.data());
              return {id: doc.id, ...doc.data() }
          })
        })
    }, [])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px); //le restamos 70px que es lo del header
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden; //para que no se vea la barra horizontal y no te puedas mover

    &:before {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1; //para que se mantenga al fondo
    }
`

