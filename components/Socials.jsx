import Link from "next/link";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { ImTelegram } from 'react-icons/im';

const socials = [
    {icon:<FaGithub />, path: "https://github.com/Oscar-Medrano"},
    {icon:<FaLinkedinIn />, path: "https://www.linkedin.com/in/oscar-medrano-y"},
    {icon:<FaWhatsapp />, path: "https://wa.me/584120819925"},
    {icon:<ImTelegram />, path: "https://t.me/@OscarAMedrano"},
];

const Socials = ( {containerStyles, iconStyles} ) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link 
                key={index} 
                href={item.path} 
                className={iconStyles}
                target="_blank"
                rel="noopener noreferrer"
                >
                    {item.icon}
                </Link>
            )
        } )}
    </div>
}

export default Socials;