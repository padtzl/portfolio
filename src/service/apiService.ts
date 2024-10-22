import axiosInstance from '@/service/axiosService';

const wpApi = '/wp/v2';
const acfApi = 'acf/v3';

export const getHeroContent = async () => {
    return await axiosInstance.get(`${wpApi}/components?slug=hero`);
};

export const getAboutContent = async () => {
    return await axiosInstance.get(`${wpApi}/components?slug=about`);
};

export const getSkillContent = async () => {
    return await axiosInstance.get(`${wpApi}/components?slug=skills`);
};

export const getContactContent = async () => {
    return await axiosInstance.get(`${wpApi}/components?slug=contact`);
};

export const getReferences = async () => {
    return await axiosInstance.get(`${wpApi}/referenz`);
};

export const getSkills = async () => {
    return await axiosInstance.get(`${wpApi}/skill`);
};

export const getMediaById = async (mediaId: number) => {
    return await axiosInstance.get(`${wpApi}/media/${mediaId}`);
};

export const getSocialLinks = async () => {
    return await axiosInstance.get(`/options/social-links`);
};
