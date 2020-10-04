import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ourparishes: [
                {
                    id: 0,
                    category: 'Aboutus',
                    title: 'DONATIONS',
                    image: 'assets/imagesaboutus/donations.jpg',
                    description: "You can now donate to our parish, safe and secure, online, egiving, credit, or debit card."
                },
                {
                    id: 1,
                    category: 'Aboutus',
                    title: 'MASS SCHEDULE',
                    image: 'assets/imagesaboutus/masschedules.jpg',
                    description: "This weeks in-person MASS, and online"
                },
                {
                    id: 2,
                    category: 'Aboutus',
                    title: 'THE WEEKLY BULLETIN',
                    image: 'assets/imagesaboutus/bulletins.jpg',
                    description: "Be sure to have a copy of the parish bulletin to stay well informed on "
                },
                {
                    id: 3,
                    category: 'Aboutus',
                    title: 'CONTACT INFORMATION',
                    image: 'assets/imagesaboutus/contacts.jpg',
                    description: "For questions or inquires you may have, feel free to reach out to us by phone, or fill out a feedback form with your concerns."
                },
                {
                    id: 4,
                    category: 'Aboutus',
                    title: 'REGISTER IN THE PARISH',
                    image: 'assets/imagesaboutus/registrations.jpg',
                    description: "If you attend St. Peters the Apostle regularly and want to participate in our daily mass sessios, register with any group, or club. Fill out this form."
                },
                {
                    id: 5,
                    category: 'Aboutus',
                    title: 'HISTORY OF ST. PETER APOSTLE',
                    image: 'assets/imagesaboutus/historys.jpg',
                    description: "Knowing our past can help guide our present and future. Find out the history of St. peter the APostle heer. "
                }
            ]
        };
    }

    render() {
        const about = this.state.ourparishes.map(ourparish => {
            return (
                <div key={ourparish.id} className="col">
                    <img src={ourparish.image} alt={ourparish.title} />
                    <h2>{ourparish.title}</h2>
                    <p>{ourparish.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {about}
                </div>
            </div>
        );
    }

}

export default About;