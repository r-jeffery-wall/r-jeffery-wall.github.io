import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink  } from 'react-router-dom';
import profileIcon from '../../assets/profileIcon.jpeg';

export const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary border-secondary border" sticky='top' >
      <Container className='d-flex '>
        <Navbar.Brand href="/" className='d-flex align-items-center p-2'>
          <div style={{maxWidth: '150px', minWidth: '64px'}}>
          <img  src={profileIcon} className='img-fluid border-secondary border rounded-circle border-2' /> 
          </div>
          <div className="d-flex flex-column align-items-center ms-3 young-serif-regular">
            <h1 className="fs-3 fw-bold">Rowan Jeffery-Wall</h1>
            <h2 className="fs-5">Full-Stack Developer</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end fs-5'>
          <Nav variant="pills" defaultActiveKey="/">
            <Nav.Item>
              <NavLink to="/" className="nav-link" >About</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/projects" className="nav-link" >Projects</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/contributions" className="nav-link" >Contributions</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
