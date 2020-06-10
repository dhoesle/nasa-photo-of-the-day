import React from 'react'

const PhotoInfo = props => {
    
    const { photoInfo } = props
    console.log("photoInfo", photoInfo)

    return (
        <div className='info-container'>
            <span>{photoInfo.explanation}</span>
        </div>
    )
    
}
export default PhotoInfo