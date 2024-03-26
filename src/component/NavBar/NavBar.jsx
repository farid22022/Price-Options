import Link from "../Link/Link";

const NavBar = () => {
        
    const routes = [
        { id: 1, name: 'Home', path: '/', exact: true },
        { id: 2, name: 'About', path: '/about', exact: true },
        { id: 3, name: 'Services', path: '/services', exact: true },
        { id: 4, name: 'Contact', path: '/contact', exact: true },
        { id: 5, name: 'NotFound', path: '*' }
      ];
      

      
    return (
        <nav>
            <ul className="md:flex">
                {
                    routes.map(route =><Link  key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;