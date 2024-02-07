import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import scss from "./LoginPage.module.scss";

const url =
	"https://api.elchocrud.pro/api/v1/659e12c34d94fc893576d490562c2e7a/username";

const LoginPage = () => {
	const navigate = useNavigate();
	const [userLogin, setUserLogin] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleAuth = () => {
		const formUser = {
			login: userLogin,
			password: userPassword,
		};
		getUser(formUser);
	};

	const getUser = async (formUser) => {
		try {
			const response = await axios.get(url);
			const responseData = await response.data;

			const findUser = responseData.find(
				(item) =>
					item.login === formUser.login && item.password === formUser.password
			);

			if (findUser) {
				localStorage.setItem("isAuth", findUser._id);
				navigate("/");
			} else {
				alert("user not found");
			}
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className={scss.LoginPage}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cont}>
						<div>
							<p className={scss.classp}>Login</p>
						</div>
						<input
							type="text"
							placeholder="login"
							value={userLogin}
							onChange={(e) => {
								setUserLogin(e.target.value);
							}}
						/>
						<input
							type="password"
							placeholder="password"
							value={userPassword}
							onChange={(e) => {
								setUserPassword(e.target.value);
							}}
						/>
						<button onClick={handleAuth}>login</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
