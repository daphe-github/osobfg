import type { NextPage } from "next";
import TopNav from "../components/top-nav";
import TopBar from "../components/top-bar";
import Tab from "../components/tab";
import Divider from "../components/divider";
import EstimatesAggregate from "../components/estimates-aggregate";

const CommonApplianceActive5min: NextPage = () => {
  return (
    <div className="w-full relative rounded-6xl bg-ghostwhite overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
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
          frameDivGap="0px"
          frameDivRowGap="20px"
          frameDivWidth="374px"
          frameDivPadding="unset"
          pharrowLeftBold="/estimate-bills-icon.svg"
          pharrowLeftBoldIconHeight="15.8px"
          pharrowLeftBoldIconWidth="18.8px"
          pharrowLeftBoldIconOverflow="unset"
          estimateBills="Common Appliance"
          estimateBillsFlex="1"
          estimateBillsDisplay="inline-block"
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
      <section className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-left text-base text-schemes-primary font-montserrat">
        <div className="w-[414px] flex flex-row items-start justify-start py-0 pl-4 pr-0 box-border max-w-full">
          <div className="flex-1 relative leading-[109%] font-medium inline-block max-w-[960px]">
            Slide to adjust usage duration
          </div>
        </div>
        <footer className="self-stretch h-[712px] flex flex-col items-start justify-start max-w-full text-center text-base text-schemes-primary font-montserrat">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <div className="w-full h-4 rounded-2xl bg-schemes-secondary-container flex flex-col items-end justify-center relative max-w-[960px]">
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
          <div className="w-full flex-1 flex flex-row items-start justify-start pt-5 px-0 pb-0 box-border max-w-[960px] text-left">
            <div className="ml-[-4px] self-stretch flex-1 rounded-[5px] border-blueviolet border-[1px] border-dashed box-border overflow-hidden flex flex-col items-start justify-start p-5 gap-[7px] shrink-0 max-w-[102%]">
              <div className="w-[398px] flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
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
              <div className="w-[398px] flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
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
                              <span className="font-semibold">
                                $0.039 – $0.065
                              </span>
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
              <div className="w-[398px] flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
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
                              <span className="font-semibold">
                                $0.026 – $0.065
                              </span>
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
              <div className="w-[398px] flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
                <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
                    <div className="flex-1 flex flex-row items-center justify-start max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq424:flex-wrap">
                        <div className="w-[211px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                          Fans
                        </div>
                        <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq359:ml-0">
                          <p className="m-0">
                            <span>
                              <span className="font-semibold">
                                $0.001 – $0.005
                              </span>
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
              <div className="w-[398px] flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
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
                              <span className="font-semibold">
                                $0.016 – $0.031
                              </span>
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
              <div className="w-[398px] flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
                <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
                    <div className="flex-1 flex flex-row items-center justify-start max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq424:flex-wrap">
                        <div className="w-[211px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                          Refrigerators
                        </div>
                        <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq359:ml-0">
                          <p className="m-0">
                            <span>
                              <span className="font-semibold">
                                $0.003 – $0.018
                              </span>
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
              <div className="w-[398px] flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
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
                              <span className="font-semibold">
                                $0.008 – $0.018
                              </span>
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
              <div className="w-[398px] flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
                <div className="flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start mix-blend-normal max-w-full">
                    <div className="flex-1 flex flex-row items-center justify-start max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[-15px] mq424:flex-wrap">
                        <div className="w-[211px] relative tracking-[0.15px] leading-[24px] font-semibold inline-block shrink-0 max-w-[225px]">
                          Televisions
                        </div>
                        <div className="w-[188px] relative tracking-[0.25px] leading-[20px] text-right inline-block shrink-0 mq359:ml-0">
                          <p className="m-0">
                            <span>
                              <span className="font-semibold">
                                $0.003 – $0.008
                              </span>
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
              <div className="w-[398px] flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
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
                              <span className="font-semibold">
                                $0.013 – $0.031
                              </span>
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
              <div className="w-[398px] flex-1 border-lightsteelblue border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-[5px] px-0 pb-[3px] max-w-[960px]">
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
                              <span className="font-semibold">
                                $0.013 – $0.039
                              </span>
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
          </div>
        </footer>
      </section>
      <div className="w-full flex flex-row items-start justify-start py-2.5 px-0 box-border max-w-[960px]">
        <EstimatesAggregate
          estimatesAggregateAlignSelf="unset"
          estimatesAggregateFlex="1"
        />
      </div>
    </div>
  );
};

export default CommonApplianceActive5min;
