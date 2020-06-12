import React from 'react'
import ImgContainer from '../ImgContainer'
const Photo = props => {

    const { photoData } = props
    console.log("photoData", photoData.hdurl)
    const makeStyles = () => {
        return {
            img: {
                maxWidth: '95%',
                textAlign: 'center',
            }
        }
    }
    return (
        <ImgContainer className='img-container'>
            <img style={makeStyles().img} alt='pic of day' src={photoData.hdurl}/>
        </ImgContainer>
    )
}
export default Photo