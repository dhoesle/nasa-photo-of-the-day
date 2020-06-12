import React from 'react'
import InfoContainer from './InfoContainer'

const PhotoInfo = props => {
    
    const { photoInfo } = props
    console.log("photoInfo", photoInfo)

    return (
        <div className='info-container'>
            <InfoContainer>{photoInfo.explanation}</InfoContainer>
        </div>
    )
    
}
export default PhotoInfo