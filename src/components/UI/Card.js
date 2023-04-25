import './../../css/Card.css';

function Card(props) {

    const cardClass = 'class ' + props.className;

    return (
    <div className={cardClass}>{props.children}</div>
    );
}

export default Card;
