import type { NextPage } from "next";

export type TabType = {
  className?: string;
  showBadge?: boolean;
};

const Tab: NextPage<TabType> = ({ className = "", showBadge = false }) => {
  return (
    <div
      className={`flex-1 bg-schemes-surface overflow-hidden flex flex-col items-center justify-end min-w-[140px] text-center text-sm text-schemes-on-surface-variant font-m3-title-small ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-end py-0 px-[57px]">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-3.5 px-0 gap-1">
          <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium">
            Phantom Usage
          </div>
          {showBadge && (
            <div className="h-1.5 w-1.5 rounded-81xl bg-schemes-error hidden flex-row items-center justify-center p-0.5 box-border">
              <div className="h-0.5 w-0.5 relative overflow-hidden shrink-0" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab;
