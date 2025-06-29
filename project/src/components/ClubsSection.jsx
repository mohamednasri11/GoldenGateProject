import React from 'react';
import cuisineImg from "../assets/clubs/cuisine.png"
import chemestryImg from "../assets/clubs/chemestry.png"
import hobiesImg from "../assets/clubs/hobies.png"
import musicImg from "../assets/clubs/music.png"
import sportImg from "../assets/clubs/sport.png"
import scienceImg from "../assets/clubs/science.png"
import swimingImg from "../assets/clubs/swiming.png"
import speechImg from "../assets/clubs/speech.png"
const clubs = [
  {title:'Kids Science Course', img: chemestryImg},
 {title:'Kids Chef Course', img: cuisineImg},
 {title:'Kids Music Course', img: musicImg},
 {title:'Kids Swimming Course', img: swimingImg},
 {title:'Kids Aerobic Course', img: sportImg},
  {title:'Kids Languages Course', img: speechImg},
  {title:'Kids Craft & Art Course', img: hobiesImg},
  {title:'Kids Go Green Course', img: scienceImg},
];

function ClubsSection() {
  return (
    <section className="clubs-section">
      <h2>Our Clubs at Golden Gate</h2>
      <div className="clubs-grid">
        {clubs.map((club, idx) => (
          <div className="club-card" key={idx}>
            <div className="club-img-placeholder">
              <img src={club.img} alt={club.title} />
            </div>
            <div className="club-title">{club.title}</div>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClubsSection; 