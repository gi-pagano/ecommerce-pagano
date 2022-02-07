
import { Spinner } from "react-bootstrap"


const BSpinner = () => {
    return (
        <Spinner animation="border" variant="info" role="status" size="xl">
            <span className="visually-hidden">Loading...</span>
        </Spinner>

    )
}

export default BSpinner;