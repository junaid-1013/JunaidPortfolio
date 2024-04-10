"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomMobileLink = ({ href, title, className = "", toggle }: any) => {
    const pathname = usePathname();

    const handleClick = (e: any) => {
        e.preventDefault();
        toggle();
    };

    return (
        <Link href={href} className={`${className} relative group text-light dark:text-dark my-2`}>
            <button onClick={handleClick} className="w-full text-left">
                {title}
                <span
                    className={`
                    h-[1px] inline-block w-0 bg-light 
                    absolute left-0 -bottom-0.5 
                    group-hover:w-full transition-[width] ease duration-300
                    ${pathname === href ? "w-full" : "w-0"}
                    dark:bg-dark`}
                >
                    &nbsp;
                </span>
            </button>
        </Link>
    );
};

export default CustomMobileLink;
