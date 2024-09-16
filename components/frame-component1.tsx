import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-5 max-w-full text-left text-base text-schemes-primary font-montserrat ${className}`}
    >
      <div className="w-[414px] flex flex-row items-start justify-start py-0 pl-4 pr-0 box-border max-w-full">
        <div className="flex-1 relative leading-[109%] font-medium inline-block max-w-full">
          Slide to adjust usage duration
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-center">
        <div className="w-[394px] !m-[0] absolute top-[-6px] left-[calc(50%_-_197px)] rounded-2xl bg-schemes-secondary-container flex flex-col items-end justify-center">
          <div className="self-stretch h-4 relative rounded-2xl bg-schemes-secondary-container hidden" />
        </div>
        <div className="h-[38px] w-1 absolute !m-[0] top-[-16px] left-[46px] rounded-sm bg-schemes-primary overflow-hidden shrink-0 z-[1]">
          <div className="absolute h-full w-full top-[0px] right-[62px] bottom-[0px] left-[-62px] rounded bg-m3-state-layers-light-on-primary-opacity-008 hidden" />
        </div>
        <div className="flex-1 flex flex-row items-center justify-between py-0 px-5 box-border [transform:_rotate(180deg)] max-w-full gap-[-120px] z-[2]">
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
  );
};

export default FrameComponent1;
