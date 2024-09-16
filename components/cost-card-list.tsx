import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CostCardListType = {
  className?: string;
  header8?: string;
  propWidth8?: string;
  prop8?: string;
  kWh8?: string;
  commonCostHorizontalCardAlign8?: string;
  header1?: string;
  prop1?: string;
  kWh1?: string;
  commonCostHorizontalCardWidth1?: string;
  commonCostHorizontalCardWidth2?: string;
  commonCostHorizontalCardWidth3?: string;
  commonCostHorizontalCardWidth4?: string;
  commonCostHorizontalCardWidth5?: string;
  commonCostHorizontalCardWidth6?: string;
  commonCostHorizontalCardWidth7?: string;
  commonCostHorizontalCardWidth8?: string;
  commonCostHorizontalCardWidth9?: string;
  contentAlignSelf?: string;
  subheadTextDecoration?: string;

  /** Style props */
  costCardListAlignSelf?: CSSProperties["alignSelf"];
  costCardListPadding?: CSSProperties["padding"];
  costCardListMarginLeft?: CSSProperties["marginLeft"];
  costCardListBorderRadius?: CSSProperties["borderRadius"];
  costCardListBorder?: CSSProperties["border"];
  costCardListOverflow?: CSSProperties["overflow"];
};

const CostCardList: NextPage<CostCardListType> = ({
  className = "",
  costCardListAlignSelf,
  costCardListPadding,
  costCardListMarginLeft,
  costCardListBorderRadius,
  costCardListBorder,
  costCardListOverflow,
  header8,
  propWidth8,
  prop8,
  kWh8,
  commonCostHorizontalCardAlign8,
  header1,
  prop1,
  kWh1,
  commonCostHorizontalCardWidth1,
  commonCostHorizontalCardWidth2,
  commonCostHorizontalCardWidth3,
  commonCostHorizontalCardWidth4,
  commonCostHorizontalCardWidth5,
  commonCostHorizontalCardWidth6,
  commonCostHorizontalCardWidth7,
  commonCostHorizontalCardWidth8,
  commonCostHorizontalCardWidth9,
  contentAlignSelf,
  subheadTextDecoration,
}) => {
  const costCardsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: costCardListAlignSelf,
      padding: costCardListPadding,
      marginLeft: costCardListMarginLeft,
      borderRadius: costCardListBorderRadius,
      border: costCardListBorder,
      overflow: costCardListOverflow,
    };
  }, [
    costCardListAlignSelf,
    costCardListPadding,
    costCardListMarginLeft,
    costCardListBorderRadius,
    costCardListBorder,
    costCardListOverflow,
  ]);

  return (
    <div
      className={`w-full flex-1 flex flex-col items-center justify-start py-0 px-4 box-border gap-[7px] max-w-[960px] text-left text-base text-schemes-primary font-montserrat ${className}`}
      style={costCardsStyle}
    >
      <div className="w-full flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq399:flex-wrap">
                <div className="w-[226px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                  Air Conditioners
                </div>
                <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-gray-200 text-right inline-block shrink-0 mq373:ml-0">
                  <p className="m-0 font-semibold">$0.025 – $0.103</p>
                  <p className="m-0 text-sm">0.08 – 0.33 kWh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq399:flex-wrap">
                <div className="w-[226px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                  Electric Kettles
                </div>
                <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq373:ml-0">
                  <p className="m-0">
                    <span>
                      <span className="font-semibold">$0.039 – $0.065</span>
                    </span>
                  </p>
                  <p className="m-0 text-sm">
                    <span>
                      <span>0.13 – 0.21 kWh</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq399:flex-wrap">
                <div className="w-[226px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                  Electric Stoves
                </div>
                <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq373:ml-0">
                  <p className="m-0">
                    <span>
                      <span className="font-semibold">$0.026 – $0.065</span>
                    </span>
                  </p>
                  <p className="m-0 text-sm">
                    <span>
                      <span>0.13 – 0.21 kWh</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq416:flex-wrap">
                <div className="w-[211px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                  Fans
                </div>
                <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq359:ml-0">
                  <p className="m-0">
                    <span>
                      <span className="font-semibold">$0.001 – $0.005</span>
                    </span>
                  </p>
                  <p className="m-0 text-sm">
                    <span>
                      <span>0.08 – 0.2 kWh</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq399:flex-wrap">
                <div className="w-[226px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                  Microwave Ovens
                </div>
                <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq373:ml-0">
                  <p className="m-0">
                    <span>
                      <span className="font-semibold">$0.016 – $0.031</span>
                    </span>
                  </p>
                  <p className="m-0 text-sm">
                    <span>
                      <span>0.05 – 0.1 kWh</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq416:flex-wrap">
                <div className="w-[211px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                  Refrigerators
                </div>
                <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq359:ml-0">
                  <p className="m-0">
                    <span>
                      <span className="font-semibold">$0.003 – $0.018</span>
                    </span>
                  </p>
                  <p className="m-0 text-sm">
                    <span>
                      <span>0.008 – 0.058 kWh</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq399:flex-wrap">
                <div className="w-[226px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                  Rice Cookers
                </div>
                <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq373:ml-0">
                  <p className="m-0">
                    <span>
                      <span className="font-semibold">$0.008 – $0.018</span>
                    </span>
                  </p>
                  <p className="m-0 text-sm">
                    <span>
                      <span>0.025 – 0.058 kWh</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq416:flex-wrap">
                <div className="w-[211px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                  Televisions
                </div>
                <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq359:ml-0">
                  <p className="m-0">
                    <span>
                      <span className="font-semibold">$0.003 – $0.008</span>
                    </span>
                  </p>
                  <p className="m-0 text-sm">
                    <span>
                      <span>0.008 – 0.058 kWh</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq399:flex-wrap">
                <div className="w-[226px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                  Vacuum Cleaners
                </div>
                <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq373:ml-0">
                  <p className="m-0">
                    <span>
                      <span className="font-semibold">$0.013 – $0.031</span>
                    </span>
                  </p>
                  <p className="m-0 text-sm">
                    <span>
                      <span>0.042 – 0.1 kWh</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq399:flex-wrap">
                <div className="w-[226px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                  Washing Machines
                </div>
                <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq373:ml-0">
                  <p className="m-0">
                    <span>
                      <span className="font-semibold">$0.013 – $0.039</span>
                    </span>
                  </p>
                  <p className="m-0 text-sm">
                    <span>
                      <span>0.042 – 0.125 kWh</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCardList;
