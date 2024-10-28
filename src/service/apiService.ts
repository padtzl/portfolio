import axiosInstance from '@/service/axiosService';

const wpApi = '/wp/v2';
const acfApi = 'acf/v3';
const formAPI = 'contact-form/v1/submit';

export const getHeroContent = async () => {
    return await axiosInstance.get(`${wpApi}/components?slug=hero`);
};

export const getAboutContent = async () => {
    return await axiosInstance.get(`${wpApi}/components?slug=about`);
};

export const getBannerContent = async () => {
    return await axiosInstance.get(`${wpApi}/components?slug=banner`);
};

export const getSkillContent = async () => {
    return await axiosInstance.get(`${wpApi}/components?slug=skills`);
};

export const getPortfolioContent = async () => {
    return await axiosInstance.get(`${wpApi}/components?slug=portfolio`);
};

export const getContactContent = async () => {
    return await axiosInstance.get(`${wpApi}/components?slug=contact`);
};

export const getReferences = async () => {
    return await axiosInstance.get(`${wpApi}/referenz`);
};

export const getProjects = async () => {
    return await axiosInstance.get(`${wpApi}/projects`);
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

export const postFormSubmit = async (data: any) => {
    return await axiosInstance.post(`${formAPI}`, data);
};

export const getImprint = async () => {
    return await axiosInstance.get(`${wpApi}/pages?slug=impressum`);
};
