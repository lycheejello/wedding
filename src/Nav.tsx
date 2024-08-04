import './Nav.css'


function Nav() {
    return (
      <div className="navContainer">
          <div className="navBar">
            <div className="navItem" />
            <a className="navItem" href="/maps/" />
            <a className="navItem" href="/questions/" />
            <a className="navItem" href="/rsvp/" />
            <div className="navItem"/>
          </div>
      </div>
    )
}

export default Nav
