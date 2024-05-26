import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyExperience = () => {
    // Define your experience data here
    const experienceData = [
        {
            id: 1,
            image: '../../assets/GEIW/1.jpg',
            caption: 'Experience 1',
        },
        {
            id: 2,
            image: '../../assets/GEIW/2.jpg',
            caption: 'Experience 2',
        },
        // Add more experience objects as needed
    ];

    return (
        <div>
            <h1>My Experience</h1>
            <Carousel>
                {experienceData.map((experience) => (
                    <Carousel.Item key={experience.id}>
                        <img
                            className="d-block w-100"
                            src={experience.image}
                            alt={experience.caption}
                        />
                        <Carousel.Caption>
                            <h3>{experience.caption}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};
    
export default MyExperience;