
export const Layout = ({ children, className = "" }: any) => {
    return (
        <div
            className={`w-full h-full inline-block z-0 bg-light dark:bg-dark xl:p-32 lg:p-24 md:p-16 sm:p-12 p-8 ${className}`}
        >
            {children}
        </div>
    );
};
