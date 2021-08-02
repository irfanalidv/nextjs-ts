import React from 'react'
import Layout from '../components/Layout'
import Container from '../styles/Containers'
interface aboutProps { }

const about: React.FC<aboutProps> = () => {
    return (
        <Layout pageTitle="About" >
       
            <h1 style = {{textAlign: 'center'}}>About Us</h1>
            
            <p style = {{textAlign: 'center'}}>
                WeKnow is developing a fully-automated managed marketplace for market research reports on-demand, powered by a network of expert analysts.<br/>
                Focused on a $15 billion market of traditional conduct, the platform offers customers with an unparalleled experience, providing X60 time saving, X2 money saving, X20 accessibility and 100% certainty for quality.
                <br/>
            </p>
        
        </Layout>
    )
}

export default about
