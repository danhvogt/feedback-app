import React from 'react'
import Card from '../components/shared/Card' 
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <h2>About This Project</h2>
        <p>This is a react app to leave feedback for a product or service.</p>
        <p>Version: 1.0.0</p>
        <p>
            <Link to='/'>Return to home</Link>
        </p>
    </Card>
  )
}

export default AboutPage