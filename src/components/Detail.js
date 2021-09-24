import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Detail() {

    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        db.collection("movies")
            .doc(id).get().then((doc) => {
                if (doc.exists) {
                    setMovie(doc.data());
                } else {
                    
                }
            })
    }, [])

    console.log(movie);

    return (
        <Container>
            {movie &&
                <>
                    <Background>
                        <img src={movie.backgroundImg} />
                    </Background>

                    <ImageTitle>
                        <img src={movie.titleImg} />
                    </ImageTitle>

                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" />
                            <span>PLAY</span>
                        </PlayButton>

                        <TrailerButton>
                            <img src="/images/play-icon-white.png" />
                            <span>TRAILER</span>
                        </TrailerButton>

                        <AddButton>
                            <span>+</span>
                        </AddButton>

                        <GroupWatchButton>
                            <img src="/images/group-icon.png" />
                        </GroupWatchButton>
                    </Controls>

                    <Subtitle>
                        {movie.subtitle}
                    </Subtitle>

                    <Description>
                        {movie.description}
                    </Description>
                </>
            }

        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 25vw;
    min-width: 200px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249 249 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    display: flex;
    cursor: pointer;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid rgb(249 249 249);
    align-items: center;
    justify-content: center;
    background: rgb(0, 0, 0, 0.6);
    margin-right: 16px;
    span{
        font-size: 30px;
        color: white;
    }
    &:hover {
        background: rgb(198, 198, 198, 0.8);
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0 0 0);
    &:hover {
        background: rgb(198, 198, 198, 0.6);
    }
`

const Subtitle = styled.div`
    margin-top: 26px;
    color: rgb(249 249 249);
    min-height: 20px;
    font-size: 15px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249 249 249);
    max-width: 60%;
`