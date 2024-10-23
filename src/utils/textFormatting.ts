export const formatHtmlEntities = (text: string): string => {
    const htmlEntitiesMap: { [key: string]: string } = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#8211;': '–', // En dash
        '&#8212;': '—', // Em dash
    };

    return text.replace(/&[a-zA-Z0-9#]+;/g, (entity) => htmlEntitiesMap[entity] || entity);
};
