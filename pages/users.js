import { useEffect } from "react";


export default function Users({ users }) {

	useEffect(() => {
		console.log(users)
	})
	return (
		<div className="p-6">
			<p className="text-3xl p-4">Users</p>
			{users.map((user) => (
					<div className="p-4">
						<a href={'/user/' + user.id}>
							<p className="text-xl font-bold">{user.id} - {user.name}</p>
						</a>
					</div>
				))}
		</div>
	)
}

export async function getStaticProps() {
	const res = await fetch("https://tyt.vklab.net/users");
	const users = await res.json();
	return {
		props: {
			users,
		},
	};

}