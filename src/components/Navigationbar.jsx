import { useLocation, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigationbar.css'
import '../assets/fonts/fonts.css'

export default function Navigationbar() {
    const { pathname } = useLocation();
    const font_style = "economica-regular fs-5 text-black"

    return (
        <div class="container-fluid shadow-sm">
            <div class="row">
                <div class="col-9 offset-3 mt-2 mb-2">
                    <ul class="navbar-nav d-flex flex-row mb-2 mb-lg-0">
                        <li class="nav-item d-flex">
                            <div className={(pathname === '/' ? "text-frame " : "") + " " + "me-2"}>
                                <Link className={(pathname === '/' ? "nav-link selected " : "nav-link") + " " + font_style} to="/" aria-current="page" href="/">PORTFOLIO</Link>
                            </div>
                        </li>
                        <li class="nav-item d-flex">
                            <div className={(pathname === '/about' ? "text-frame " : "") + " " + "me-2"}>
                                <Link class={(pathname === '/about' ? "nav-link selected" : "nav-link") + " " + font_style} to="/about" href="/about">ABOUT</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
