import { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {
	console.log(event.url.searchParams);
	return resolve(event);
};
