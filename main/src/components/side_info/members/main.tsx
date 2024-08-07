import Member from "./member";
import { v4 as uuidv4 } from "uuid";
export default function Members() {
	const member = [
		{ name: "Alejandro", username: "@alejandro", rol: "Admin", photo: "W" },
		{ name: "Alejandro", username: "@alejandro", rol: "User", photo: "W" },
		{ name: "Alejandro", username: "@alejandro", rol: "Moderator", photo: "W" },
	];

	return (
		<>
			<h2 className=" text-3xl font-semibold">Last Articles</h2>
			<div className="bg-black-500 bg-opacity-25 max-w-[317px] p-2 space-y-2 rounded-lg">
				{member.map((member) => (
					<Member						key={uuidv4()}
						name={member.name}
						username={member.username}
						rol={member.rol}
						photo = {member.photo}
					/>
				))}
			</div>
		</>
	);
}