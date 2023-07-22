import { useMemo } from "react";
import _ from "lodash";

const usePageRage = (current: number, total: number) => {
  const maxTabs = 5;

  return useMemo(() => {
    // Range too small
    if (maxTabs >= total) {
      return [_.tail(_.initial(_.range(1, total + 1))), false, false] as const;
    }

    // Show dots if current too far from bounds
    const leftDots = current > 3;
    const rightDots = current < total - 2;

    // Calculate tab range around current
    const middle = _.range(
      Math.max(1, current - 1),
      Math.min(total, current + 1) + 1
    );

    // Check how many missing tabs due to overlap with lower/upper bounds & out of bounds
    const remaining = maxTabs - _.union([1], middle, [total]).length;

    // Add extra tabs to overlapped side
    const padMiddle = leftDots
      ? _.concat(_.range(middle[0] - remaining, middle[0]), middle)
      : _.concat(middle, _.range(5 - remaining, 5));

    return [
      _.tail(_.initial(_.union([1], padMiddle, [total]))),
      leftDots,
      rightDots,
    ] as const;
  }, [current, total]);
};

export default usePageRage;
