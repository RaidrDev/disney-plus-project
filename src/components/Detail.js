import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src= "https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg" />
            </Background>

            <ImageTitle>
                <img src= "https://upload.wikimedia.org/wikipedia/fr/1/1a/Bao_logo.png" />
            </ImageTitle>

            <Controls>
                <PlayButton>
                    <img src= "/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src= "/images/play-icon-white.png" />
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
                2018 7m Family, Fantasy, Kids, Animation
            </Subtitle>
                
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Description>
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