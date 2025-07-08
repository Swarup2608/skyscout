import Link from "next/link";
import Image from "next/image";

type SocialMediaItem = {
  Icon: string; 
  Link: string;
  Title: string;
};

export default function SocialMedia({
  socialMediaList,
  isMobileView,
}: {
  socialMediaList: SocialMediaItem[];
  isMobileView: Boolean;
}) {
  return (
    <div className="flex items-start justify-center gap-3">
      {socialMediaList?.map((socialMedia, idx) => (
        <Link key={idx} href={socialMedia.Link} className={`p-[6px] border group ${isMobileView ?'border-black' : 'border-white'} rounded-full flex items-center justify-center w-[24px] h-[24px]  ${isMobileView ?'hover:bg-black' : 'hover:bg-white'} `}>
          <Image
            src={`/svg/${socialMedia.Icon}`}
            alt={socialMedia.Title}
            width={12} 
            height={12}
            className={`group-hover:invert-100 ${isMobileView ?'invert-100' : ''}`}
          />
        </Link>
      ))}
    </div>
  );
}
