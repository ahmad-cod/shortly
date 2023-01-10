import brandRecognitionIcon from '../assets/images/icon-brand-recognition.svg'
import detailedRecordsIcon from '../assets/images/icon-detailed-records.svg'
import fullyCustomizableIcon from '../assets/images/icon-fully-customizable.svg'

const features = [
    {
        id: '01',
        title: 'Brand Recognition',
        content: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
        imgUrl: brandRecognitionIcon
    },
    {
        id: '02',
        title: 'Detailed Records',
        content: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
        imgUrl: detailedRecordsIcon
    },
    {
        id: '03',
        title: 'Fully Customizable',
        content: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
        imgUrl: fullyCustomizableIcon
    },
]

function Card(props) {
    const {imgUrl, title, content} = props
    return (
            <div className="card">
                <div className="card-img">
                    <img src={imgUrl} alt="Card Icon" />
                </div>
                <h3>{title}</h3>
                <p>
                    {content}
                </p>
            </div>
    )
}
export default function Cards() {
    return (
            <div className="cards">
                {features.map(feature => <Card {...feature} key={feature.id} />)}
            </div>
    )
}