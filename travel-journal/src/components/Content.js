import '../App.css';

export default function Content(props){
    return(
        <div>
            <h1>{props.place}</h1>
            <img src={props.img} width="400px"  />

            <p>While in {props.country} on {props.date}</p>
            <a href={props.googleMapsLink}>Link to the location</a>
            {/* <h1>China</h1>
            <h1>Monaco</h1>
            <h1>Costa Rica</h1> */}
        </div>
    )
}