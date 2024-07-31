import { SanityClient } from "@sanity/client";

export const client = sanityClient({
    productId: '9vhlk1gm',
    dataset: 'production',
    useCdn: true,

});