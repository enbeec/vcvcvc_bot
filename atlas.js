const atlas = {
	entries: [],
	authors: [],
	worlds: [],
};

const aboutText = `
atlas lets you store, 
	remember and share coords 
	in our minecraft world

COMMANDS:
	show AUTHOR|WORLD|ENTRY
	search PATTERN
	add ENTRY X Y Z [-- NOTES]
	add ENTRY X Z [-- NOTES]	
	del ENTRY
`;

export const atlasInit = (json) => {
	if (typeof json === "Object") {
		const initEntries = json.entries;
		if (typeof initEntries === "Array") {
			atlas.entries = json.entries.map((e) => ({ ...e }));
		}
	}
	console.log("atlas is ready");
};

export const atlasAbout = () => aboutText;
