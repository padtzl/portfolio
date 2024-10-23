import { getMediaById } from '@/service/apiService';

/**
 * Fetch media details by ID from WordPress API
 * @param mediaId - The ID of the media item to fetch
 * @returns A promise that resolves to media details (e.g., URL, alt text)
 */
export const loadMediaById = async (mediaId: number) => {
    try {
        const response = await getMediaById(mediaId);
        return {
            url: response.data.source_url,
            alt: response.data.alt_text || '',
        };
    } catch (error) {
        console.error(`Failed to load media with ID ${mediaId}:`, error);
        return null; // Return null or handle the error appropriately
    }
};
