import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSIMCard = forwardRef<SVGSVGElement, IconProps>(function IconSIMCard(
  { className, variant = "Outline", strokeWidth = "1.5", ...rest },
  ref,
) {
  /* The four drawings are two booleans: filled or stroked, and whether the
     secondary shapes drop to half tone. */
  const fill = variant === "Bold" || variant === "Bulk";
  const duotone = variant === "TwoTone" || variant === "Bulk";

  /* Decorative by default: an icon sitting beside its own text label is read
     out twice otherwise. Naming it with aria-label or aria-labelledby promotes
     it to an image instead. */
  const labelled =
    rest["aria-label"] != null || rest["aria-labelledby"] != null;
  const a11y: SVGProps<SVGSVGElement> = labelled
    ? { role: "img" }
    : { "aria-hidden": true };

  return (
    <>
      {!fill ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12c0-.34 0-.51-.02-.69a4 4 0 0 0-1.4-2.72l-5.17-5.17a4 4 0 0 0-2.73-1.4C12.52 2 12.35 2 12 2 7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 12h-.5c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C8 13.39 8 14.09 8 15.5c0 1.4 0 2.1.34 2.61a2 2 0 0 0 .55.55c.5.34 1.2.34 2.61.34h.5m0-7h.5c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.34.5.34 1.2.34 2.61M12 12v3.5m0 3.5h.5c1.4 0 2.1 0 2.61-.34a2 2 0 0 0 .55-.55c.34-.5.34-1.2.34-2.61M12 19v-3.5m0 0h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </svg>
      ) : duotone ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c.34 0 .51 0 .69.02a4 4 0 0 1 2.72 1.4l5.17 5.17A4 4 0 0 1 22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22"
            fill="currentColor"
          />
          <path
            d="M8.89 18.66c.5.34 1.2.34 2.61.34v-7c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C8 13.39 8 14.09 8 15.5c0 1.4 0 2.1.34 2.61a2 2 0 0 0 .55.55"
            fill="currentColor"
          />
          <path
            d="M15.11 18.66c-.5.34-1.2.34-2.61.34v-3H16c0 1.08-.04 1.67-.34 2.11a2 2 0 0 1-.55.55"
            fill="currentColor"
          />
          <path
            d="M12.5 12c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.3.44.33 1.03.34 2.11h-3.5z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c.34 0 .51 0 .69.02a4 4 0 0 1 2.72 1.4l5.17 5.17A4 4 0 0 1 22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22m-3.11-3.34c.5.34 1.2.34 2.61.34v-7c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C8 13.39 8 14.09 8 15.5c0 1.4 0 2.1.34 2.61a2 2 0 0 0 .55.55m6.22 0c-.5.34-1.2.34-2.61.34v-3H16c0 1.08-.04 1.67-.34 2.11a2 2 0 0 1-.55.55M12.5 12c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.3.44.33 1.03.34 2.11h-3.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSIMCard;
