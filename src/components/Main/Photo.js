import React from 'react'

const Photo = props => {

    const { photoData } = props
    console.log("photoData", photoData.hdurl)

    return (
        <div className='img-container'>
            <img alt='pic of day' src={photoData.hdurl}/>
        </div>
    )
}
export default Photo