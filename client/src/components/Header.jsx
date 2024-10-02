import React from 'react';
import { Navbar, TextInput, Button, Avatar, Dropdown, DarkThemeToggle } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';

const Header = () => {
    const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  
    const handleSignout = async () => {
        try {
          const res = await fetch('/api/user/signout', {
            method: 'POST',
          });
          const data = await res.json();
          if (!res.ok) {
            console.log(data.message);
          } else {
            dispatch(signoutSuccess());
          }
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <Navbar fluid rounded className="border-b shadow-sm py-2">
            <Navbar.Brand as={Link} to="/">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-lg font-bold mr-2">
                    Bit
                </span>
                <span className="font-bold text-gray-700 dark:text-white">Blogs</span>
            </Navbar.Brand>
            <div className="flex md:order-2 items-center gap-2">
                {/* TextInput visible on medium screens and above */}
                <TextInput
                    type="text"
                    placeholder="Search..."
                    rightIcon={Search}
                    className="hidden md:inline-block"
                />
                {/* Search Button visible on smaller screens */}
                <Button gradientDuoTone="purpleToBlue" className="md:hidden">
                    <Search className="w-5 h-5" />
                </Button>
                <DarkThemeToggle className="focus:ring-0" />
                {currentUser ? (
                    <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar alt='user' img={currentUser.profilePicture} rounded />
                    }
                  >
                    <Dropdown.Header>
                      <span className='block text-sm'>@{currentUser.username}</span>
                      <span className='block text-sm font-medium truncate'>
                        {currentUser.email}
                      </span>
                    </Dropdown.Header>
                    <Link to={'/dashboard?tab=profile'}>
                      <Dropdown.Item>Profile</Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
                  </Dropdown>
                ): (

                    <Link to='/sign-in'>
                        <Button gradientDuoTone="purpleToBlue" outline pill>
                            Sign In
                        </Button>
                    </Link>
                )}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as="div">
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as="div">
                    <Link to="/about">About</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as="div">
                    <Link to="/projects">Projects</Link>
                </Navbar.Link>
            </Navbar.Collapse>



        </Navbar>
    );
};

export default Header;
