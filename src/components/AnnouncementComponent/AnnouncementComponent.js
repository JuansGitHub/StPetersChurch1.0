import React, { Component } from 'react';

class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recentannouncements: [
                {
                    id: 0,
                    category: 'Announcements',
                    author: 'Bishop George Leo Thomas',
                    posteron: 'June 10, 2020',
                    image: 'assets/imagesannouncements/letterofracisms.jpg',
                    description: "When words fall short, a pastoral letter of racism"
                },
                {
                  id: 1,
                  category: 'Announcements',
                  author: 'Bishop George Leo Thomas',
                  posteron: 'March 18, 2020',
                  image: 'assets/imagesannouncements/pastoralletters.jpg',
                  description: "Pastoral Letter to the People of the Diocese of Las Vegas"
                },
                {
                    id: 2,
                    category: 'Announcements',
                    author: 'Diocese of Las Vegas',
                    postedon: 'May 15, 2018',
                    image: 'assets/imagesannouncements/bishopthomass.jpg',
                    description: "Pope Francis has named the Most Reverend George Leo Thomas as Bishop of Las Vegas, Nevada"
                },
                {
                    id: 3,
                    category: 'Announcements',
                    author: 'Diocese of Las Vegas',
                    postedon: 'September 30, 2020',
                    image: 'assets/imagesannouncements/reservationformasss.jpg',
                    description: "Please read the guidelines before making a reservation (PHONE NUMBER REQUIRED)"
                }
            ],
        };
    }

    render() {
        const announcement = this.state.recentannouncements.map(recentannouncement => {
            return (
                <div key={recentannouncement.id} className="col">
                    <img src={recentannouncement.image} alt={recentannouncement.author} />
                    <h2>{recentannouncement.author}</h2>
                    <h3>{recentannouncement.postedon}</h3>
                    <p>{recentannouncement.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {announcement}
                </div>
            </div>
        );
    }

}

export default Announcement;