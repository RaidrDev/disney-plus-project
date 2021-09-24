import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6172D2E01118FD6F50BD51FF1DB9E1D8DDC9BADA3F5B2B71A21F3005B3E0497D/scale?width=1200&aspectRatio=1.78&format=jpeg" />
                </Wrap>

                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_Frozen2_AUNZ.jpg" />
                </Wrap>

                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Mandalorian_S2.png" />
                </Wrap>

                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Mulan@1,5x-1.png" />
                </Wrap>

                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Toy_Story4_UKI_EN.png" />
                </Wrap>
                
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6172D2E01118FD6F50BD51FF1DB9E1D8DDC9BADA3F5B2B71A21F3005B3E0497D/scale?width=1200&aspectRatio=1.78&format=jpeg" />
                </Wrap>

                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6172D2E01118FD6F50BD51FF1DB9E1D8DDC9BADA3F5B2B71A21F3005B3E0497D/scale?width=1200&aspectRatio=1.78&format=jpeg" />
                </Wrap>

                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/SW_Clone_Wars.png" />
                </Wrap>

            </Content>
            <h4>Popular in your Country</h4>
            <Content>
                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/SW_Clone_Wars.png" />
                </Wrap>

                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Toy_Story4_UKI_EN.png" />
                </Wrap>

                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Mandalorian_S2.png" />
                </Wrap>

                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_Frozen2_AUNZ.jpg" />
                </Wrap>

            </Content>
            <Space>
                
            </Space>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`

const Space = styled.div`
    width: 100%;
    height: 70px;
`

