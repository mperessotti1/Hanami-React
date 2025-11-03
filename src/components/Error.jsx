import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Página no encontrada.</p>

            <Link to="/" className="btn btn-cta mt-3">
                Volver al inicio
            </Link>
        </div>
    );
};

export default Error;