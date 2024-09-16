import type { NextPage } from "next";
import FrameComponent2 from "../components/frame-component2";
import CostCardList from "../components/cost-card-list";
import EstimatesAggregate from "../components/estimates-aggregate";

const CommonApplianceActive5min3: NextPage = () => {
  return (
    <div className="w-full relative rounded-6xl bg-ghostwhite overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[46px] box-border leading-[normal] tracking-[normal]">
      <FrameComponent2 />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-5 max-w-full text-left text-base text-schemes-primary font-montserrat">
        <div className="w-[414px] flex flex-row items-start justify-start py-0 pl-4 pr-0 box-border max-w-full">
          <div className="flex-1 relative leading-[109%] font-medium inline-block max-w-[960px]">
            Slide to adjust usage duration
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-center">
          <div className="w-full h-4 rounded-2xl bg-schemes-secondary-container flex flex-col items-end justify-center relative max-w-[960px]">
            <div className="self-stretch h-4 relative rounded-2xl bg-schemes-secondary-container hidden z-[0]" />
            <div className="w-[5px] h-[38px] absolute !m-[0] bottom-[-16px] left-[46px] rounded-sm bg-schemes-primary overflow-hidden shrink-0 z-[1]">
              <div className="absolute h-full w-full top-[0px] right-[62px] bottom-[0px] left-[-62px] rounded bg-m3-state-layers-light-on-primary-opacity-008 hidden" />
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-0 px-5 box-border [transform:_rotate(180deg)] max-w-[960px] gap-[-120px]">
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="flex flex-row items-center justify-start py-0 px-[13px]">
                <div className="h-1 w-1 relative rounded-[50%] bg-schemes-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-center [transform:_rotate(180deg)]">
                <div className="flex-1 relative leading-[109%] font-medium">
                  <p className="m-0">1</p>
                  <p className="m-0">day</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-0 px-[7px] gap-5">
              <div className="flex flex-row items-center justify-start py-0 px-[19px]">
                <div className="h-1 w-1 relative rounded-[50%] bg-schemes-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-center [transform:_rotate(180deg)]">
                <div className="flex-1 relative leading-[109%] font-medium">
                  <p className="m-0">60</p>
                  <p className="m-0">mins</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-0 px-[7px] gap-5">
              <div className="flex flex-row items-center justify-start py-0 px-[19px]">
                <div className="h-1 w-1 relative rounded-[50%] bg-schemes-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-center [transform:_rotate(180deg)]">
                <div className="flex-1 relative leading-[109%] font-medium">
                  <p className="m-0">30</p>
                  <p className="m-0">mins</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-0 px-[7px] gap-5">
              <div className="flex flex-row items-center justify-start py-0 px-[19px]">
                <div className="h-1 w-1 relative rounded-[50%] bg-schemes-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-center [transform:_rotate(180deg)]">
                <div className="flex-1 relative leading-[109%] font-medium">
                  <p className="m-0">10</p>
                  <p className="m-0">mins</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-0 px-[7px] gap-5">
              <div className="flex flex-row items-center justify-start py-0 px-[19px]">
                <div className="h-1 w-1 relative rounded-[50%] bg-schemes-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-center [transform:_rotate(180deg)]">
                <div className="flex-1 relative leading-[109%] font-medium">
                  <p className="m-0">5</p>
                  <p className="m-0">mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch h-[573px] flex flex-col items-center justify-start max-w-full">
        <CostCardList
          costCardListAlignSelf="unset"
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

export default CommonApplianceActive5min3;
