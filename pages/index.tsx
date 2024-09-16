import type { NextPage } from "next";
import TopNav from "../components/top-nav";
import TopBar from "../components/top-bar";
import Tab from "../components/tab";
import Divider from "../components/divider";
import FrameComponent3 from "../components/frame-component3";
import CostCardList from "../components/cost-card-list";
import EstimatesAggregate from "../components/estimates-aggregate";

const CommonApplianceActive5min4: NextPage = () => {
  return (
    <div className="w-full relative rounded-6xl bg-ghostwhite overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-16 box-border leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border max-w-full text-center text-sm text-schemes-on-surface-variant font-m3-title-small">
        <header className="self-stretch flex flex-col items-center justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <TopNav
              ohmsweetohmFontFamily="Montserrat"
              ohmsweetohmFontWeight="900"
            />
          </div>
        </header>
        <TopBar
          pharrowLeftBold="/estimate-bills-icon.svg"
          estimateBills="Common Appliance"
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
            ⚡Here are estimates of how much energy common appliances uses and
            how much they may cost you.
          </div>
        </div>
      </section>
      <FrameComponent3 />
      <footer className="self-stretch h-[573px] flex flex-col items-center justify-start max-w-full">
        <CostCardList
          header8="Electric Kettles"
          header8="Electric Stoves"
          header8="Fans"
          header8="Microwave Ovens"
          header8="Refrigerators"
          header8="Rice Cookers"
          header8="Televisions"
          header8="Vacuum Cleaners"
          header8="Washing Machines"
          propWidth8="14.125rem"
          propWidth8="14.125rem"
          propWidth8="13.188rem"
          propWidth8="14.125rem"
          propWidth8="13.188rem"
          propWidth8="14.125rem"
          propWidth8="13.188rem"
          propWidth8="14.125rem"
          propWidth8="14.125rem"
          prop8="$0.039 – $0.065"
          prop8="$0.026 – $0.065"
          prop8="$0.001 – $0.005"
          prop8="$0.016 – $0.031"
          prop8="$0.003 – $0.018"
          prop8="$0.008 – $0.018"
          prop8="$0.003 – $0.008"
          prop8="$0.013 – $0.031"
          prop8="$0.013 – $0.039"
          kWh8="0.13 – 0.21 kWh"
          kWh8="0.13 – 0.21 kWh"
          kWh8="0.08 – 0.2 kWh"
          kWh8="0.05 – 0.1 kWh"
          kWh8="0.008 – 0.058 kWh"
          kWh8="0.025 – 0.058 kWh"
          kWh8="0.008 – 0.058 kWh"
          kWh8="0.042 – 0.1 kWh"
          kWh8="0.042 – 0.125 kWh"
          commonCostHorizontalCardAlign8="unset"
          commonCostHorizontalCardAlign8="unset"
          commonCostHorizontalCardAlign8="unset"
          commonCostHorizontalCardAlign8="unset"
          commonCostHorizontalCardAlign8="unset"
          commonCostHorizontalCardAlign8="unset"
          commonCostHorizontalCardAlign8="unset"
          commonCostHorizontalCardAlign8="unset"
          commonCostHorizontalCardAlign8="unset"
          header1="Washing Machines"
          prop1="$0.013 – $0.039"
          kWh1="0.042 – 0.125 kWh"
          commonCostHorizontalCardWidth1="100%"
          commonCostHorizontalCardWidth2="100%"
          commonCostHorizontalCardWidth3="100%"
          commonCostHorizontalCardWidth4="100%"
          commonCostHorizontalCardWidth5="100%"
          commonCostHorizontalCardWidth6="100%"
          commonCostHorizontalCardWidth7="100%"
          commonCostHorizontalCardWidth8="100%"
          commonCostHorizontalCardWidth9="100%"
          contentAlignSelf="unset"
          subheadTextDecoration="unset"
        />
      </footer>
      <div className="w-full flex flex-row items-start justify-start py-2.5 px-0 box-border max-w-[960px]">
        <EstimatesAggregate
          estimatesAggregateAlignSelf="unset"
          estimatesAggregateFlex="1"
        />
      </div>
    </div>
  );
};

export default CommonApplianceActive5min4;
