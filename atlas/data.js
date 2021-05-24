import fetch from "node-fetch";
import Fuse from "fuse.js";

const atlas = {
	entries: [],
	authors: [],
	worlds: [],
};

const regenFuse = () => {
	atlas.entriesFuse = new Fuse(atlas.entries, { keys: ["name"] });
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
			regenFuse();
		});
};

export const getEntries = () => atlas.entries.map((e) => ({ ...e }));
export const searchEntries = (term) =>
	atlas.entriesFuse.search(term, { keys: ["name"] });
