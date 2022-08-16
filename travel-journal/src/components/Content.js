import '../App.css';

export default function Content(props){

    return(
        <div>
            <h1>{props.place}</h1>
            <img src={props.img} width="400px"  />

            <p>In {props.country} on {props.date}</p>
            <a href={props.googleMapsLink}>Link to the location</a>
            <p>Description here</p>
        </div>
    )
}