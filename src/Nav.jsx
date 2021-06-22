import React from 'react'

function Nav(props) {
	console.log(props);
	let {changePage, coolNumber} = props
	return (
			<ul>
				<li onClick={() => changePage('Home')}>Home</li>
				<li onClick={() => changePage('Away')}>Away</li>
				<li>{coolNumber}</li>
			</ul>
	)
}

function Footer(){
	return(
		<div className="">
			<h3>FOOTER</h3>
		</div>
	)
}

export { Nav, Footer };