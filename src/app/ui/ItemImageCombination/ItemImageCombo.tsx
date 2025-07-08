import React from "react";
import { SubTitle, Title } from "../Title/Title";

export default function ItemImageCombo({
    title,
    isDark,
    subtitle,
    data,
    images,
    isLeft,
}: {
    title: string;
    isDark: boolean;
    subtitle?: React.ReactNode;
    data?: React.ReactNode;
    images?: React.ReactNode;
    isLeft: boolean;
}) {
    return (
        <div className={`lg:px-[60px] py-[80px] space-y-2 flex px-[30px] items-center justify-center ${isLeft ? 'flex-col lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'} gap-[50px] `}>
            {/* New stylable heading */}

            <div className="lg:w-[55%] w-[100%]">
                {/* Original title with underline */}
                <Title isDark={isDark} title={title} />
                <SubTitle isDark={isDark} subtitle={subtitle} />


                {data}

            </div>
            <div className="flex-1">
                {images}
            </div>
        </div>
    );
}
