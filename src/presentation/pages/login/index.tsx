import type { ReactElement } from 'react';

import {
	Button,
	Footer,
	FormStatus,
	Header,
	Input,
} from '~/presentation/components';

import './styles.scss';

export function Login(): ReactElement {
	return (
		<div className="login">
			<Header />

			<form>
				<h2>Login</h2>
				<Input
					id="email"
					type="email"
					name="email"
					placeholder="Enter your email"
				/>

				<Input
					id="password"
					type="password"
					name="password"
					placeholder="Enter your password"
				/>

				<Button type="submit">Sign in</Button>

				<span className="link">Sign up</span>

				<FormStatus />
			</form>

			<Footer />
		</div>
	);
}