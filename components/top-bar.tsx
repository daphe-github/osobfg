import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TopBarType = {
  className?: string;
  pharrowLeftBold?: string;
  estimateBills?: string;

  /** Style props */
  frameDivGap?: CSSProperties["gap"];
  frameDivRowGap?: CSSProperties["rowGap"];
  frameDivWidth?: CSSProperties["width"];
  frameDivPadding?: CSSProperties["padding"];
  pharrowLeftBoldIconHeight?: CSSProperties["height"];
  pharrowLeftBoldIconWidth?: CSSProperties["width"];
  pharrowLeftBoldIconOverflow?: CSSProperties["overflow"];
  estimateBillsFlex?: CSSProperties["flex"];
  estimateBillsDisplay?: CSSProperties["display"];
};

const TopBar: NextPage<TopBarType> = ({
  className = "",
  frameDivGap,
  frameDivRowGap,
  frameDivWidth,
  frameDivPadding,
  pharrowLeftBold,
  pharrowLeftBoldIconHeight,
  pharrowLeftBoldIconWidth,
  pharrowLeftBoldIconOverflow,
  estimateBills,
  estimateBillsFlex,
  estimateBillsDisplay,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
      rowGap: frameDivRowGap,
    };
  }, [frameDivGap, frameDivRowGap]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      padding: frameDivPadding,
    };
  }, [frameDivWidth, frameDivPadding]);

  const estimateBillsIconStyle: CSSProperties = useMemo(() => {
    return {
      height: pharrowLeftBoldIconHeight,
      width: pharrowLeftBoldIconWidth,
      overflow: pharrowLeftBoldIconOverflow,
    };
  }, [
    pharrowLeftBoldIconHeight,
    pharrowLeftBoldIconWidth,
    pharrowLeftBoldIconOverflow,
  ]);

  const estimateBillsStyle: CSSProperties = useMemo(() => {
    return {
      flex: estimateBillsFlex,
      display: estimateBillsDisplay,
    };
  }, [estimateBillsFlex, estimateBillsDisplay]);

  return (
    <div
      className={`self-stretch bg-schemes-primary overflow-hidden flex flex-col items-end justify-start py-3.5 px-4 box-border max-w-full text-left text-xl text-ghostwhite font-montserrat ${className}`}
    >
      <div
        className="self-stretch flex flex-row items-center justify-between max-w-full gap-0 [row-gap:20px]"
        style={frameDivStyle}
      >
        <div
          className="w-[374px] flex flex-row items-center justify-start gap-2.5 max-w-[calc(100%_-_24px)]"
          style={frameDiv1Style}
        >
          <img
            className="h-[15.8px] w-[18.8px] relative"
            alt=""
            src={pharrowLeftBold}
            style={estimateBillsIconStyle}
          />
          <div
            className="flex-1 relative leading-[125%] font-medium inline-block max-w-[calc(100%_-_29px)]"
            style={estimateBillsStyle}
          >
            {estimateBills}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[9px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/fluentsave24regular.svg"
          />
          <img className="h-6 w-6 relative" alt="" src="/more-vert.svg" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
