import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-5 max-w-full text-left text-base text-schemes-primary font-montserrat ${className}`}
    >
      <div className="w-[414px] flex flex-row items-start justify-start py-0 pl-4 pr-0 box-border max-w-full">
        <div className="flex-1 relative leading-[109%] font-medium inline-block max-w-[960px]">
          Slide to adjust usage duration
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-center">
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
    </section>
  );
};

export default FrameComponent3;
