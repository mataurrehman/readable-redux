import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
    render() {
        return (
            <div className="alert alert-danger" role="alert">
                The resource you are looking for is not found on server, to see others
                <Link to="/"> click here</Link>
            </div>
        )
    }
}
export default NotFound
