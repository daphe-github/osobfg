import type { NextPage } from "next";
import TopNav from "./top-nav";
import TopBar from "./top-bar";
import Tab from "./tab";
import Divider from "./divider";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border max-w-full text-center text-sm text-schemes-on-surface-variant font-m3-title-small ${className}`}
    >
      <header className="self-stretch flex flex-col items-center justify-start max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <TopNav
            ohmsweetohmFontFamily="Montserrat"
            ohmsweetohmFontWeight="900"
          />
        </div>
      </header>
      <TopBar
        frameDivGap="20px"
        frameDivRowGap="unset"
        frameDivWidth="179px"
        frameDivPadding="0px 0px 0px 0px"
        pharrowLeftBold="/pharrowleftbold.svg"
        pharrowLeftBoldIconHeight="24px"
        pharrowLeftBoldIconWidth="24px"
        pharrowLeftBoldIconOverflow="hidden"
        estimateBills="Common Appliance Energy Bills"
        estimateBillsFlex="unset"
        estimateBillsDisplay="unset"
      />
      <div className="self-stretch bg-schemes-surface flex flex-row items-start justify-start pt-0 px-0 pb-px box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-[960px] mq344:h-auto">
          <div className="self-stretch flex flex-row items-start justify-start shrink-0 [row-gap:20px] text-schemes-primary mq344:flex-wrap">
            <div className="flex-1 bg-schemes-surface overflow-hidden flex flex-row items-start justify-start min-w-[140px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-0 px-[65px]">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-3.5 px-0 relative gap-1">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium">
                    Active Usage
                  </div>
                  <div className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start pt-[11px] px-0.5 pb-0 box-border">
                    <div className="h-[3px] flex-1 relative rounded-t-81xl rounded-b-none bg-schemes-primary" />
                  </div>
                  <div className="h-1.5 w-1.5 rounded-81xl bg-schemes-error hidden flex-row items-center justify-center p-0.5 box-border z-[2]">
                    <div className="h-0.5 w-0.5 relative overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
            </div>
            <Tab showBadge={false} />
          </div>
          <div className="bg-schemes-surface overflow-hidden hidden flex-col items-center justify-end">
            <div className="overflow-hidden flex flex-col items-center justify-end py-0 px-4">
              <div className="overflow-hidden flex flex-row items-center justify-center py-3.5 px-[17px] gap-1">
                <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                  Tab
                </div>
                <div className="h-1.5 w-1.5 rounded-81xl bg-schemes-error hidden flex-row items-center justify-center p-0.5 box-border">
                  <div className="h-0.5 w-0.5 relative overflow-hidden shrink-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-schemes-surface overflow-hidden hidden flex-col items-center justify-end">
            <div className="overflow-hidden flex flex-col items-center justify-end py-0 px-4">
              <div className="overflow-hidden flex flex-row items-center justify-center py-3.5 px-[17px] gap-1">
                <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                  Tab
                </div>
                <div className="h-1.5 w-1.5 rounded-81xl bg-schemes-error hidden flex-row items-center justify-center p-0.5 box-border">
                  <div className="h-0.5 w-0.5 relative overflow-hidden shrink-0" />
                </div>
              </div>
            </div>
          </div>
          <Divider />
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-start justify-start py-5 px-4 box-border max-w-full text-left text-base text-schemes-primary font-montserrat">
        <div className="flex-1 relative leading-[150%] inline-block max-w-[960px]">
          ⚡Here are estimates of how much energy common appliances uses and how
          much they may cost you.
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
