// components/RatingDistribution.tsx
import React, { CSSProperties } from "react";

interface RatingDistributionProps {
  /**
   * Array of 5 numbers: index 0 = count of 1★, …, index 4 = count of 5★
   * e.g. [0, 0, 0, 7, 80]
   */
  counts: [number, number, number, number, number];
  /** Tailwind height class for bars */
  barSize?: "h-1" | "h-2" | "h-3";
  /** Filled-bar color */
  barColor?: string;
  /** Track color */
  trackColor?: string;
}

const RatingDistribution: React.FC<RatingDistributionProps> = ({
  counts,
  barSize = "h-2",
  barColor = "bg-green-700",
  trackColor = "bg-gray-200",
}) => {
  const total = counts.reduce((a, b) => a + b, 0) || 1;

  return (
    <div className="space-y-2">
      {/** loop star levels 5 → 1 */}
      {counts
        .slice() // copy
        .reverse() // [5★,4★,3★,2★,1★]
        .map((count, idx) => {
          const stars = 5 - idx;
          const pct = (count / total) * 100;
          const pctStyle: CSSProperties = { width: `${pct}%` };

          return (
            <div key={stars} className="flex items-center">
              {/* star label */}
              <div className="flex items-center gap-1 me-2.5">
                <span className="text-[#080808]">{stars}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M12.5855 3.21742L14.1988 6.44409C14.4188 6.89325 15.0055 7.32409 15.5005 7.40659L18.4247 7.89242C20.2947 8.20409 20.7347 9.56075 19.3872 10.8991L17.1138 13.1724C16.7288 13.5574 16.518 14.2999 16.6372 14.8316L17.288 17.6458C17.8013 19.8733 16.6188 20.7349 14.648 19.5708L11.9072 17.9483C11.4122 17.6549 10.5963 17.6549 10.0922 17.9483L7.35134 19.5708C5.38967 20.7349 4.19801 19.8641 4.71134 17.6458L5.36217 14.8316C5.48134 14.2999 5.27051 13.5574 4.88551 13.1724L2.61217 10.8991C1.27384 9.56075 1.70467 8.20409 3.57467 7.89242L6.49884 7.40659C6.98467 7.32409 7.57134 6.89325 7.79134 6.44409L9.40467 3.21742C10.2847 1.46659 11.7147 1.46659 12.5855 3.21742Z"
                    fill="#FF9900"
                  />
                </svg>
              </div>

              {/* bar */}
              <div
                className={`flex-1 rounded-full overflow-hidden ${trackColor} ${barSize}`}
              >
                <div
                  className={`${barColor} h-full transition-[width] duration-300 rounded-full`}
                  style={pctStyle}
                />
              </div>

              {/* count */}
              <div className="fs-18 text-[#7F7F7F] text-right ms-4">
                {String(count).padStart(2, "0")}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RatingDistribution;
