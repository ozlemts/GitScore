import { useState } from "react";

export default function User({ users, params }) {
	const [user, setUser] = useState(
		users.find((u) => u.id == params.id)
	);
	return (
	<div>
		<p className="text-xl p-4">{user.id}</p>
		<p className="text-xs">{user.details.visible_role}</p>
		<p className="text-xs">{user.details.summary}</p>
	</div>
	)
}

export async function getStaticPaths() {
	const res = await fetch("https://tyt.vklab.net/users");
	const users = await res.json();

	const paths = users.map((user) => `/user/${user.id}`);

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await fetch("https://tyt.vklab.net/users");
	const users = await res.json();

	return {
		props: {
			users,
			params
		},
	}
}
