import React from 'react';

function Footer() {
	return (
		<footer className='bg-blue-900 h-12 w-screen text-center text-yellow-500 text-xl font-bold flex items-center justify-center fixed bottom-0'>
			©2020 - {(new Date().getFullYear())} Łukasz Barylak & Kamil Duliniec
		</footer>
	)
}
export default Footer;