import illustrationMockup from "../assets/images/illustration-working.svg"

export default function Hero() {
    return (
        <main className="hero-container">
            <div className="hero-image container">
                <img src={illustrationMockup} alt="Illustration mockup"/>
            </div>
            <div className="hero-texts container">
                <h1 className="font-bold">
                    More than just shorter links
                </h1>
                <p>
                    Build your brand's recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <div className="cta">
                    <a href="#">Get Started</a>
                </div>
            </div>
        </main>
    )
}