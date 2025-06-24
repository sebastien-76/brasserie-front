import React from 'react'
import { Link } from 'react-router'
import './Footer.css'
import facebook from '../../assets/icones/facebook.png'
import instagram from '../../assets/icones/instagram.png'
import linkedin from '../../assets/icones/linkedin.png'
import tiktok from '../../assets/icones/tiktok.png'

export const Footer = () => {
	return (
		<div class="footer">
			<div class="adresse">
				<h5>Brasserie L'Artésienne</h5>
				<p>100 rue d'ici</p>
				<p>62300 LENS</p>
			</div>
			<div class="icones">
				<Link to='https://www.facebook.com' target="_blank"><img src={facebook} alt="facebook" /></Link>
				<Link to='https://www.instagram.com' target="_blank"><img src={instagram} alt="instagram" /></Link>
				<Link to='https://www.tiktok.com' target="_blank"><img src={tiktok} alt="tiktok" /></Link>
				<Link to='https://www.linkedin.com' target="_blank"><img src={linkedin} alt="linkedin" /></Link>
			</div>
			<div class="mentions">
				Mentions Légales
			</div>
		</div>
	)
}
