export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">
        <span class="one">One</span><span class="queue">Queue</span>
      </h1>

      <ul className="navigation">
        <li><a href="#" className="nav-link">About</a></li>
        <li><a href="#" className="nav-link">Contact</a></li>
        <li><a href="#" className="nav-link">FAQ</a></li>
      </ul>
      <button className="start">Get Started</button>
    </div>
  )
}
