import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">CA</p>
      <ul className="nav-menu">
        <li>
          <a href="https://www.linkedin.com/in/chakradhar-ankallagalla-a61804235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/ChakradharA2003">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="Git Hub"
            />
          </a>
        </li>
        <li>
          <a href="https://x.com/Chakriankalla?t=eFV_rDCQw2q3lqcZAMHiSQ&s=09">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
              alt="Twitter"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
