import Card from "../ Card/Card";
import "./Cards.css";

const Cards = ({dogs}) => {
    return <div className="pet-cards-container">
        {dogs.map(dog => {
            return <Card
                key={dog.id}
                name={dog.name}
                phone={dog.phone}
                email={dog.email}
                image={dog.image}
                favoured={dog.favoured}
            />})
        }
    </div>
}

export default Cards;