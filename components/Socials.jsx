import Link from "next/link";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
    {icon:<FaGithub />, path: "https://github.com/Oscar-Medrano"},
    {icon:<FaLinkedinIn />, path: "https://www.linkedin.com/in/oscar-medrano-697a13325/"},
];

const Socials = ( {containerStyles, iconStyles} ) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        } )}
    </div>
}

export default Socials;