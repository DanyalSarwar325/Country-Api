import { useParams } from "react-router-dom";
function Contact() {
    const Parmas=useParams();
    console.log(Parmas)
    return ( 
        <h1>Hello I am Contact Pahe</h1>
     );
}

export default Contact;