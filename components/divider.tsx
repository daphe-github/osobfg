import type { NextPage } from "next";

export type DividerType = {
  className?: string;
};

const Divider: NextPage<DividerType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-px flex flex-row items-start justify-start pt-px px-0 pb-0 box-border max-w-full ${className}`}
    >
      <div className="h-px flex-1 relative border-schemes-surface-container-highest border-t-[1px] border-solid box-border max-w-full" />
    </div>
  );
};

export default Divider;
