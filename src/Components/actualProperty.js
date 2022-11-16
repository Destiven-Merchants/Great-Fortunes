import React, {useState, useEffect} from 'react';

export default function ActualProperty({pk}) {

    const [actualProperty, setActualProperty] = useState([]);
    const [images, setImages] = useState([]);
    const [curImage, setCurImage] = useState('')

    useEffect(() => {
        async function fetchData(){
            const data = await fetch(`https://greatfortunesproperties.herokuapp.com/property/${pk}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })

            const res = await data.json()
            setActualProperty(res)
        }

        async function fetchImages(){
            const images = await fetch(`https://greatfortunesproperties.herokuapp.com/propertyimages/${pk}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })

            const res = await images.json()
            setImages(res)
        }

        fetchData()
        fetchImages()

    }, [pk]);

    useEffect(() => {
        let thumbnail = actualProperty.map(thumb => thumb.thumbnail)
        setCurImage(thumbnail)
    }, [actualProperty]);

    return (
        <div className="actualproperty-container">
            {actualProperty.map(property => 
                <div className="actualproperty" key={property.id}>
                    <div className="actualproperty-img">
                        <img src={`https://greatfortunesproperties.herokuapp.com${curImage}`} alt="property" />
                    </div>

                    <div className="actualproperty-content">
                        <h2>{property.location}</h2>
                        <p>We have an amazing plot located in Kamulu Joska.</p>
                        <ul>
                            <li>
                                <h3>{property.size}</h3>
                                <h4>{property.price}</h4>
                            </li>
                            <li>
                                <h3>Booking fee:</h3>
                                <h4>{property.discount}</h4>
                            </li>
                        </ul>
                        <p>Installment payment option upto 12 months</p>
                    </div>
                </div>
            )}

            <div className="review-images">
                {images.map(image => 
                    <img src={`https://greatfortunesproperties.herokuapp.com${image.images}`} alt="review properties" onClick={() => setCurImage(image.images)} />
                )}
            </div>
        </div>
    )
}