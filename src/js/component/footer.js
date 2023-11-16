import React, { Component } from "react";
import groguSymbol from "../../img/icons8-baby-yoda-64.png";
import lightSaber from "../../img/icons8-lightsaber-64.png";
import r2d2 from "../../img/icons8-r2-d2-64.png";
import rebel from "../../img/icons8-rebel-64.png";
import icon1 from "../../img/icons8-star-wars-64(1).png";
import icon2 from "../../img/icons8-star-wars-64.png";


export const Footer = () => (
	<footer className="footer mt-auto py-5 text-center">
		<div>
			<img src={groguSymbol} alt="Symbol" />
			<img src={r2d2} alt="Symbol" />
			<img src={rebel} alt="Symbol" />
			<img src={icon1} alt="Symbol" />
			<img src={icon2} alt="Symbol" />
			<img src={lightSaber} alt="Symbol" />
		</div>
		<p>
			Made with 💜 by{" "}
			<a href="https://github.com/liliaqvq">Lili</a>
		</p>
	</footer>
);
