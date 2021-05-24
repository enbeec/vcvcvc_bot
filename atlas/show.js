import { getEntries } from "./data.js";

export const atlasShow = (args) => {
	const entries = getEntries();
	const name = args.shift();
	const entry = entries.find((e) => e.name === name);
	let notes = "";
	if (args.length > 0 && args.shift() === "notes") {
		notes = `
${entry.notes}`;
	}

	return `${entry.name} is located at ${entry.x},${entry.y},${entry.z}
	${notes || ""}
	`;
};
