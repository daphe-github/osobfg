import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TopNavType = {
  className?: string;

  /** Style props */
  ohmsweetohmFontFamily?: CSSProperties["fontFamily"];
  ohmsweetohmFontWeight?: CSSProperties["fontWeight"];
};

const TopNav: NextPage<TopNavType> = ({
  className = "",
  ohmsweetohmFontFamily,
  ohmsweetohmFontWeight,
}) => {
  const ohmsweetohmStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: ohmsweetohmFontFamily,
      fontWeight: ohmsweetohmFontWeight,
    };
  }, [ohmsweetohmFontFamily, ohmsweetohmFontWeight]);

  return (
    <div
      className={`self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] bg-white flex flex-row items-center justify-center py-1.5 px-6 box-border max-w-full text-left text-base text-schemes-primary font-bohemian-soul ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5">
        <a
          className="[text-decoration:none] relative leading-[48px] text-[inherit]"
          style={ohmsweetohmStyle}
        >
          ohmsweetohm
        </a>
        <img
          className="h-[15px] w-[23px] relative object-contain"
          loading="lazy"
          alt=""
          src="/union@2x.png"
        />
      </div>
    </div>
  );
};

export default TopNav;
