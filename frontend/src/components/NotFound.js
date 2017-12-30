import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="alert alert-danger" role="alert">
            The resource you are looking for is not found on server, to see others
                <Link to="/"> click here</Link>
        </div>
    )
}
export default NotFound
