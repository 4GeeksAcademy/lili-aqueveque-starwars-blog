import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { BlogPost } from "../component/blogPost";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<BlogPost type="people" /> {/*characters component*/}
			<BlogPost type="vehicles" />
			<BlogPost type="planets" />
		</div>
	)
};
