import "./card.css"
const Card = ({ icon, title, desc }) => {
    return (
        <div className="card flexColumn">
            <div ><img src={icon} alt="" className="icon" /></div>
            <h2 className="title">{title}</h2>
            <div className="desc">{desc}</div>

        </div>
    );
}

export default Card;