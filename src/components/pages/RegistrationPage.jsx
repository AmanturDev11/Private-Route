import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import scss from "./RegistrationPage.module.scss";

const url =
	"https://api.elchocrud.pro/api/v1/659e12c34d94fc893576d490562c2e7a/username";

const RegistrationPage = () => {
	const navigate = useNavigate();
	const [userLogin, setUserLogin] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleAuth = () => {
		const newUser = {
			login: userLogin,
			password: userPassword,
		};
		postUser(newUser);
	};

	const postUser = async (newUser) => {
		try {
			const response = await axios.post(url, newUser);
			console.log(response.data);
			navigate("/login");
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="container">
			<div className={scss.content}>
				<div className={scss.cont}>
					<div>
						<p className={scss.classp}>Instagram</p>
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
					<button onClick={handleAuth}>registration</button>
					<p>ИЛИ</p>
					<div className={scss.imgcontent}>
						<a href="https://www.facebook.com/?locale=ru_RU">
							<img
								src="https://w7.pngwing.com/pngs/806/294/png-transparent-facebook-logo-logo-facebook-icon-facebook-logo-brand-social-network-scalable-vector-graphics-thumbnail.png"
								alt=""
							/>
						</a>
						<p>Войти через Facebook</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegistrationPage;
