import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import CostCardList from "../components/cost-card-list";
import EstimatesAggregate from "../components/estimates-aggregate";

const CommonApplianceActive5min2: NextPage = () => {
  return (
    <div className="w-full relative rounded-6xl bg-ghostwhite overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-2.5 leading-[normal] tracking-[normal]">
      <FrameComponent
        showBadge={false}
        ohmsweetohmFontFamily="'Bohemian Soul'"
        ohmsweetohmFontWeight="unset"
        pharrowLeftBold="/pharrowleftbold.svg"
        estimateBills="Common Appliance Energy Bills"
        frameDivGap="20px"
        frameDivRowGap="unset"
        frameDivWidth="179px"
        frameDivPadding="0px 0px 0px 0px"
        pharrowLeftBoldIconHeight="24px"
        pharrowLeftBoldIconWidth="24px"
        pharrowLeftBoldIconOverflow="hidden"
        estimateBillsFlex="unset"
        estimateBillsDisplay="unset"
      />
      <FrameComponent1 />
      <footer className="self-stretch h-[573px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
          <CostCardList
            costCardListAlignSelf="stretch"
            costCardListPadding="0px 16px"
            costCardListMarginLeft="unset"
            costCardListBorderRadius="unset"
            costCardListBorder="unset"
            costCardListOverflow="unset"
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
            commonCostHorizontalCardAlign8="stretch"
            commonCostHorizontalCardAlign8="stretch"
            commonCostHorizontalCardAlign8="stretch"
            commonCostHorizontalCardAlign8="stretch"
            commonCostHorizontalCardAlign8="stretch"
            commonCostHorizontalCardAlign8="stretch"
            commonCostHorizontalCardAlign8="stretch"
            commonCostHorizontalCardAlign8="stretch"
            commonCostHorizontalCardAlign8="stretch"
            header1="Washing Machines"
            prop1="$0.013 – $0.039"
            kWh1="0.042 – 0.125 kWh"
            commonCostHorizontalCardWidth1="unset"
            commonCostHorizontalCardWidth2="unset"
            commonCostHorizontalCardWidth3="unset"
            commonCostHorizontalCardWidth4="unset"
            commonCostHorizontalCardWidth5="unset"
            commonCostHorizontalCardWidth6="unset"
            commonCostHorizontalCardWidth7="unset"
            commonCostHorizontalCardWidth8="unset"
            commonCostHorizontalCardWidth9="unset"
            subheadTextDecoration="unset"
          />
        </div>
      </footer>
      <EstimatesAggregate
        estimatesAggregateAlignSelf="stretch"
        estimatesAggregateFlex="unset"
      />
    </div>
  );
};

export default CommonApplianceActive5min2;
