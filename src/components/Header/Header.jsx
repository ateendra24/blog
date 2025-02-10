import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'My Posts',
      slug: '/my-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className='sticky top-0 bg-white dark:bg-[#131313] z-10 border-b-2 dark:border-[#282828]'>
      <Container>
        <nav className='flex w-full max-w-screen-xl py-2 rounded-lg mt-2'>
          <div className='mr-1'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto overflow-scroll no-scrollbar'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      ` ${isActive ? "underline" : "no-underline"} inline-block px-4 py-2 text-black font-semibold rounded-full ml-4 text-nowrap dark:text-white hover:underline`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
            {authStatus && (
              <li key='logout'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;