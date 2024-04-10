import Link from "next/link";
import { Layout } from "./Layout";

export const Footer = () => {
    return (
        <footer className="w-full sm:text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light text-base">
            <Layout className="flex items-center justify-between flex-col lg:!py-8 lg:flex-row !py-6">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className="flex items-center lg:py-2">
                    Build with{" "}
                    <span className="px-1 text-2xl text-primary dark:text-primaryDark">
                        &#9825;
                    </span>
                    by&nbsp;
                    <Link
                        href="https://www.instagram.com/junaid.ali1014/"
                        className="underline underline-offset-2"
                        target={"_blank"}
                    >
                        Junaid Ali Bhatti
                    </Link>
                </div>
                <Link
                    href="https://www.instagram.com/junaid.ali1014/"
                    className="underline underline-offset-2"
                    target={"_blank"}
                >
                    Say hello
                </Link>
            </Layout>
        </footer>
    );
};
