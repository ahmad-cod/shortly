import Cards from "./Cards";
import LinkShortener from "./LinkShortener";

export default function Features() {
    return (
        <section className="features-container">
            <LinkShortener />
            <h2>Advanced Statistics</h2>
            <p>
                Track how your links are performing across the web with our 
                advanced statistics dashboard.
            </p>
            <Cards />
        </section>
    )
}