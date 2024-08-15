import { Row, Col} from "react-bootstrap";

export default function Footer(){
    return (
        <footer className="text-bg-light mt-auto p-5">
            <row>
                <Col md={3}>
                    <p>A menu</p>
                    <ul>
                        <li>
                            <a href="#">Link 1 goes somewhere</a>
                        </li>
                        <li>
                            <a href="#">Link 2 goes somewhere</a>
                        </li>
                        <li>
                            <a href="#">Link 3 goes somewhere</a>
                        </li>
                    </ul>
                </Col>
                <Col md={3}>
                    <p>Another menu</p>
                    <ul>
                        <li>
                            <a href="#">Link 1 is plotting</a>
                        </li>
                        <li>
                            <a href="#">Link 2 is plotting</a>
                        </li>
                        <li>
                            <a href="#">Link 3 is plotting</a>
                        </li>
                        <li>
                            <a href="#">Link 4 is plotting</a>
                        </li>
                    </ul>
                </Col>
                <Col md={6}>
                    <p>&copy; 2022, Website's Foot</p>
                    <p className="fw-light">
                    This website is purely for demo purposes. A few mildly entertaining
           jokes have been added. If you had a chortle, that's great. There was
           certainly chortling during development.
                    </p>
                </Col>
            </row>
        </footer>
    );
}