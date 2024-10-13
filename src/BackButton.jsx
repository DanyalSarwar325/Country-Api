import './BackButton.css'
import { useNavigate } from 'react-router-dom';
function BackButton() {
    const navigate = useNavigate();
    const handler=()=>{
        navigate(-1);
    }
    return ( 
        <div className="bbtn">
          <button onClick={handler}>Back</button>
        </div>
        
            
       
        
     );
}

export default BackButton;