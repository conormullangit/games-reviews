import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const NavSide = [
  {
    title: 'Home',
    path: '/reviews',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Categories',
    path: '/api/categories',
    icon: <AiIcons.AiOutlineAlignCenter />,
    cName: 'nav-text'
  },
  {
    title: 'Reviews',
    path: '/reviews',
    icon: <AiIcons.AiFillEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/api/users/:username',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }
]

export default NavSide;