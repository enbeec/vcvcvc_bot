export const atlasHelp = (args) => helpText;
export const atlasAbout = () => aboutText;

const helpSearchText = `[how to use search]`;
const helpShowText = `gives you coordinates for a given atlas entry
	include "notes" to get the related notes
		ex: "_atlas show myhouse notes"`;
const helpAddText = `[how to use add]`;
const helpDelText = `[how to use del]`;
//const helpSearchText = ``

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

const helpText = `${aboutText}
--> search ${helpSearchText}
--> show ${helpShowText}
--> add ${helpAddText}
--> del ${helpDelText}
`;
