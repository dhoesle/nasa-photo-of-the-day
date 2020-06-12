import React from "react";
import { findByLabelText } from "@testing-library/react";
import Container from './Container'
import LogoContainer from './LogoContainer'
import Title from './Title'
import Date from './Date'
import PicTitle from './PicTitle'


const Header = props  => {

    const { headerData } = props
    // const makeStyles = (color) => {
    //     return {

    //         h1: {
    //             color,
    //             padding: 'none'
    //         },
    //         h2date: {
    //             color,
    //             backgroundColor: 'blue',
    //             padding: '-2px'
    //         },
    //         h2title: {
    //             color,
    //             borderBottom: '3px solid #E4313F',
    //             paddingBottom: '10px',
    //             width: '35%',
    //             backgroundColor: 'lightGray'



    //         },
    //         img: {
    //            textAlign: 'center',
    //             maxWidth: '100%',
    //             height: '10vh',                
    //         } 
    //     }
    // }
    return (
        <Container>
        
            <LogoContainer  alt='nasa logo' src='https://i.redd.it/hddw4lumtxgz.png'/>

            <Title className='title'>
                Astronomy Picture of the Day
            </Title>

            <Date className='date'>
                {headerData.date}
            </Date>

            <PicTitle className='pic-title'>
                🌌{headerData.title}🌌
            </PicTitle>

        </Container>
    )
}
export default Header