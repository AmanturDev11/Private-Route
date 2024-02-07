import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import scss from "./HomePage.module.scss";

const url =
	"https://api.elchocrud.pro/api/v1/659e12c34d94fc893576d490562c2e7a/username";
const HomePage = () => {
	const [state, setState] = useState([]);
	const getUsers = async () => {
		try {
			const response = await axios.get(url);
			setState([...response.data]);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getUsers();
	}, []);
	return (
		<div className="container">
			<div className={scss.header}>
				{state.map((item, index) => (
					<div className={scss.content} key={index}>
						<div className={scss.cards}>
							<h2>{item.login}</h2>
							<p>{item.password}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
