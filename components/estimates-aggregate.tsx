import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type EstimatesAggregateType = {
  className?: string;

  /** Style props */
  estimatesAggregateAlignSelf?: CSSProperties["alignSelf"];
  estimatesAggregateFlex?: CSSProperties["flex"];
};

const EstimatesAggregate: NextPage<EstimatesAggregateType> = ({
  className = "",
  estimatesAggregateAlignSelf,
  estimatesAggregateFlex,
}) => {
  const estimatesAggregateStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: estimatesAggregateAlignSelf,
      flex: estimatesAggregateFlex,
    };
  }, [estimatesAggregateAlignSelf, estimatesAggregateFlex]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-[15px] box-border max-w-full text-left text-base text-gray-100 font-montserrat ${className}`}
      style={estimatesAggregateStyle}
    >
      <div className="flex-1 relative leading-[29px] inline-block max-w-full">
        Based on tariff rates of $0.31/kWh.
      </div>
    </div>
  );
};

export default EstimatesAggregate;
