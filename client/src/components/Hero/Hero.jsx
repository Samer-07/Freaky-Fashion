import './Hero.css';

const Hero = ({ img, imge, title, text, sectionTitle }) => {
    return (
        <>
            
            <div className="hero-container">
                <div className="img">
                    {img.map((image) => (
                        <img key={image.id} src={image.src} alt={`Bild ${image.id}`} />
                    ))}
                </div>
                <section className="hero">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </section>
            </div>

            <div className="image">
                {imge.map((image) => (
                    <div key={image.id} className="image-container">
                        <img src={image.src} alt={`Bild ${image.id}`} />
                        <div className="image-overlay"> {sectionTitle} </div> 
                    </div>

                ))}

            </div>
        </>
    );
}

export default Hero;
