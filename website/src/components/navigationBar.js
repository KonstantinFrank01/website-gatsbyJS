import React from "react"
import {Link} from "gatsby"

/*const ListLink = props => (
    <li style={{display: 'inline-block', margin: '7rem'}}>
        <Link to={props.to} style={{ color: 'black', fontFamily: 'lucida sans unicode', position: 'absolute', top: '30%', fontSize: '1rem'}}>{props.children}</Link>
    </li>
)*/

/*export default ({children}) => (
    <div>
        <nav style={{position: 'absolute', backgroundColor: 'white', width: '100%', height: '10%'}}>
            <ul style={{listStyle: 'none', float: 'right'}}>
                <ListLink to="/" >About</ListLink>
                <ListLink to="/">Team</ListLink>
                <ListLink to="/">Departments</ListLink>
                <ListLink to="/">Contact</ListLink>
            </ul>
        </nav>
        {children}
    </div>
)*/

const ListLink = props => (
    <li style={{float: 'right', padding: '50px'}}>
        <Link to={props.to} style={{display: 'block', color: 'black', fontFamily: 'lucida sans unicode', position: 'absolute', top: '15%', fontSize: '1rem', margin: '1rem', marginLeft: '-7.5rem'}}>{props.children}</Link>
    </li>
)

export default ({children}) => (
    <div>
        <nav style={{position: 'absolute', backgroundColor: 'white', width: '100%', height: '10%'}}>
            <ul style={{listStyle: 'none', margin: '0', padding: '0', overflow: 'hidden'}}>
                <ListLink to="/">Departments</ListLink>
                <ListLink to="/">Team</ListLink>
                <ListLink to="/" >About</ListLink>
            </ul>
        </nav>
        {children}
    </div>
)