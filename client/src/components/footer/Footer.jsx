import React from 'react';

function Footer() {
	return (
		<footer className='bg-black h-12 w-screen text-center text-white text-xl font-bold flex items-center justify-center fixed bottom-0'>
			©2020 - {(new Date().getFullYear())} Łukasz Barylak
		</footer>
	)
}
export default Footer;