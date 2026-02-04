import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { parseReferenceUrl } from '$lib/services/NavigationService';

export const load: PageLoad = async ({ params }) => {
    // Parse the reference from the URL
    const selection = parseReferenceUrl(params.ref);

    if (!selection) {
        error(404, 'Invalid Bible reference');
    }

    return {
        selection
    };
};
