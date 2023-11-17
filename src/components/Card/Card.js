function Card({ img, text, price, country, styles, showExtraDiv }) {

    return (
        <div className='card' style={styles}>
            <div className="card-img">
            <img src={img} alt="coffee" />
            </div>
            <div className="card-text">{text}</div>
            { showExtraDiv && 
                <div className="card-country">{country}</div>
            }
            <div className="card-price">{price}$</div>
        </div>
    );
}

export default Card;
