import fetch from "node-fetch";

const atlas = {
	entries: [],
	authors: [],
	worlds: [],
};

const stringify = (thing) => JSON.stringify(thing, null, "\t");
export const atlasDump = () => stringify(atlas);

export const atlasInit = (jsonURL) => {
	return fetch(jsonURL)
		.then((res) => res.json())
		.then((json) => {
			if (json.entries) atlas.entries = json.entries;
			if (json.authors) atlas.authors = json.authors;
			if (json.worlds) atlas.worlds = json.worlds;
		});
};

export const getEntries = () => atlas.entries.map((e) => ({ ...e }));
