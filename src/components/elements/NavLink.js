import { useContext, useEffect, useState } from 'react';
import { NavContext } from 'src/context/NavContext';
import Link from 'next/link'
import ActiveLink from '@/hooks/activeLink';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { ScrollToIDHome } from '@/redux/actions/ficActions';


const NavLink = ({ navLinkId, scrollToId, navLinkText, navLinkRoute, isHomepage }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
	const [offset, setOffset] = useState(80)
	const dispatch = useDispatch()
	const router = useRouter()

	const handleClick = () => {
		console.log({ navLinkId, scrollToId, activeNavLinkId });
		if (navLinkId) {
			setActiveNavLinkId(navLinkId);

			switch (navLinkId) {
				case 'services':
					setOffset(200)
					break;
				case 'equipment':
					setOffset(60)
					break;
			}
			if (router.pathname != (navLinkRoute || "/")) {
				router.push(navLinkRoute ? navLinkRoute : '/')
			}
			dispatch(ScrollToIDHome({ id: scrollToId, offset: offset, navid: navLinkId }))

		} else {
			return
		}

	};

	return (
		<li className={`${activeNavLinkId === navLinkId ? 'activeClass' : ''} lg:mx-[2vw] xl:mx-[3.4vw] md:mr-[1rem]`}>
			<span id={navLinkId} onClick={handleClick} className={`cursor-pointer hover:underline`}>{navLinkText}</span>
		</li>
		// <li className={`${activeNavLinkId === navLinkId ? 'activeClass' : ''} lg:mx-[2vw] xl:mx-[3.4vw] md:mr-[1rem]`}>
		// 	{
		// 		navLinkRoute == null
		// 			? <span id={navLinkId} onClick={handleClick} className={`cursor-pointer hover:underline`}>{navLinkText}</span>
		// 			: <ActiveLink activeClassName="active" href={navLinkRoute}>
		// 				<a className={`${isHomepage ? 'hover:text-fic-white' : 'hover:text-fic-black'} hover:underline`}>{navLinkText}</a>
		// 			</ActiveLink>
		// 	}
		// </li>
	);
};

export default NavLink;
