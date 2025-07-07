export function Title(
    {
        title,
        isDark

    }: {
            title: string;
            isDark: boolean;
        }
) {
    return (
        <h1 className={`${isDark ? 'text-white' : 'text-[#111720]'} text-[14px] font-[500]`}>
            {title}
            <span className="block w-8 h-[2px] bg-[#AEE656] mt-1"></span>
        </h1>
    )
}

export function SubTitle(
    {
        isDark,
        subtitle
    }: {

        isDark: boolean;
        subtitle?: React.ReactNode;
    }
) {
    return (
        <h1 className={`${isDark ? 'text-white' : 'text-[#111720]'} text-[44px] max-sm:text-[35px] font-bold mt-[32px]`}>
            {subtitle}
        </h1>
    )
}