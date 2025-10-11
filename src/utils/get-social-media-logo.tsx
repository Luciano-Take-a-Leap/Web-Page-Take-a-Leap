import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export const getSocialMediaLogo = (name: string) => {
    if (!name) {
        console.warn('No platform name provided, returning default icon.');
        return <TbWorld size={24} />;
    }

    if (name === 'linkedin') {
        return <FaLinkedinIn size={24} />;
    }

    if (name === 'facebook') {
        return <FaFacebookF size={24} />;
    }

    if (name === 'instagram') {
        return <FaInstagram size={24} />;
    }

    if (name === 'twitter' || name === 'x') {
        return <FaXTwitter size={24} />;
    }

    if (name === 'youtube') {
        return <FaYoutube size={24} />;
    }

    if (name === 'github') {
        return <FaGithub size={24} />;
    }

    if (name === 'tiktok') {
        return <FaTiktok size={24} />;
    }

    return <TbWorld size={24} />;
};

export default getSocialMediaLogo;