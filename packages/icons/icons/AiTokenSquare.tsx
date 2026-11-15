import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTokenSquare = forwardRef<SVGSVGElement, IconProps>(function IconAiTokenSquare(
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
      {variant === "Broken" ? (
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
            d="m5.21 15.46-.99-.99a3.5 3.5 0 0 1 0-4.95l5.3-5.3a3.5 3.5 0 0 1 4.95 0l5.3 5.3a3.5 3.5 0 0 1 0 4.95l-5.3 5.3a3.5 3.5 0 0 1-4.95 0l-2.61-2.61"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.4c.32 2.38 1.22 3.28 3.6 3.6-2.38.32-3.28 1.22-3.6 3.6-.32-2.38-1.22-3.28-3.6-3.6 2.38-.32 3.28-1.22 3.6-3.6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : !fill ? (
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
            d="m14.48 4.22 5.3 5.3a3.5 3.5 0 0 1 0 4.96l-5.3 5.3a3.5 3.5 0 0 1-4.96 0l-5.3-5.3a3.5 3.5 0 0 1 0-4.95l5.3-5.3a3.5 3.5 0 0 1 4.95 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.4c.32 2.38 1.22 3.28 3.6 3.6-2.38.32-3.28 1.22-3.6 3.6-.32-2.38-1.22-3.28-3.6-3.6 2.38-.32 3.28-1.22 3.6-3.6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M15 3.7 20.3 9a4.6 4.6 0 0 1 1.25 3 4.6 4.6 0 0 1-1.24 3L15 20.3a4.6 4.6 0 0 1-3 1.26 4.6 4.6 0 0 1-3-1.24L3.7 15a4.6 4.6 0 0 1-1.26-3 4.6 4.6 0 0 1 1.24-3L9 3.7a4.6 4.6 0 0 1 3-1.26 4.6 4.6 0 0 1 3 1.24z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 8c.16 1.26.46 2.03 1.01 2.59.56.56 1.33.85 2.6 1.01a.4.4 0 0 1 0 .8c-1.27.16-2.04.46-2.6 1.01-.56.56-.85 1.33-1.01 2.6a.4.4 0 0 1-.8 0c-.16-1.27-.46-2.04-1.01-2.6-.56-.56-1.33-.85-2.6-1.01a.4.4 0 0 1 0-.8c1.27-.16 2.04-.46 2.6-1.01.56-.56.85-1.33 1.01-2.6a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M15 3.7 20.3 9a4.6 4.6 0 0 1 1.25 3 4.6 4.6 0 0 1-1.24 3L15 20.3a4.6 4.6 0 0 1-3 1.26 4.6 4.6 0 0 1-3-1.24L3.7 15a4.6 4.6 0 0 1-1.26-3 4.6 4.6 0 0 1 1.24-3L9 3.7a4.6 4.6 0 0 1 3-1.26 4.6 4.6 0 0 1 3 1.24zm-3 3.95a.4.4 0 0 0-.4.35c-.16 1.26-.46 2.03-1.01 2.59-.56.56-1.33.85-2.6 1.01a.4.4 0 0 0 0 .8c1.27.16 2.04.46 2.6 1.01.56.56.85 1.33 1.01 2.6a.4.4 0 0 0 .8 0c.16-1.27.46-2.04 1.01-2.6.56-.56 1.33-.85 2.6-1.01a.4.4 0 0 0 0-.8c-1.27-.16-2.04-.46-2.6-1.01-.56-.56-.85-1.33-1.01-2.6a.4.4 0 0 0-.4-.34z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiTokenSquare;
