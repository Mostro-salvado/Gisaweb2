import "../assets/css/footer.css"
import { Link , useNavigate } from 'react-router-dom';



export default function Footer() {
  const Navigate = useNavigate();
  const redirectToHome = () => {
    Navigate("/");
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    };
    return (
        <>
            <div className="footer">
                    <div className="social">
                      <Link to="https://www.instagram.com" target="_blank"><i className="bi bi-instagram"></i></Link>
                    </div>
                    <div className="copyright">
                      <span  lang="en"onClick={redirectToHome}>Gisa</span>
                      <p  lang="en"><i className="bi bi-wrench"></i> 
                        <Link className="link" to="https://forms.gle/AKEj4NganRNEJkfXA" target="_blank">
                          Trabaja con nosotros
                        </Link>
                      </p>
                    </div>
            </div>
        </>
    )
} 