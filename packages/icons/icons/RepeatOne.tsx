import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRepeatOne = forwardRef<SVGSVGElement, IconProps>(
  function IconRepeatOne(
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
              d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM9.5 18.25H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28-2-2-1.06 1.06 2 2zM1.25 12A7.75 7.75 0 0 0 9 19.75v-1.5A6.25 6.25 0 0 1 2.75 12zm1.5 0c0-3.45 2.8-6.25 6.25-6.25v-1.5A7.75 7.75 0 0 0 1.25 12z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zm.5 14h-2v1.5h2zm-2.53 1.28 2 2 1.06-1.06-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12c0 3.45-2.8 6.25-6.25 6.25v1.5A7.75 7.75 0 0 0 22.75 12zm1.5 0A7.75 7.75 0 0 0 15 4.25v1.5c3.45 0 6.25 2.8 6.25 6.25z"
              fill="currentColor"
            />
            <path
              d="M10.5 11.5 12 10v4"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.53 2.47a.75.75 0 0 0-1.06 1.06l.72.72H9a7.75 7.75 0 1 0 0 15.5h.5a.75.75 0 0 0 0-1.5H9a6.25 6.25 0 0 1 0-12.5h2a.75.75 0 0 0 .53-1.28zm4.97 1.78a.75.75 0 0 0 0 1.5h.5a6.25 6.25 0 1 1 0 12.5h-2a.75.75 0 0 0-.53 1.28l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H15a7.75 7.75 0 0 0 0-15.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.75 10a.75.75 0 0 0-1.28-.53l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.22-.22V14a.75.75 0 0 0 1.5 0z"
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
              d="M8.47 2.47c.3-.3.77-.3 1.06 0l2 2A.75.75 0 0 1 11 5.75H9a6.25 6.25 0 1 0 0 12.5h.5a.75.75 0 0 1 0 1.5H9a7.75 7.75 0 0 1 0-15.5h.19l-.72-.72a.75.75 0 0 1 0-1.06M13.75 5c0-.41.34-.75.75-.75h.5a7.75 7.75 0 0 1 0 15.5h-.19l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 .53-1.28h2a6.25 6.25 0 1 0 0-12.5h-.5a.75.75 0 0 1-.75-.75m-1.46 4.3c.28.12.46.4.46.7v4a.75.75 0 0 1-1.5 0v-2.19l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.8.8 0 0 1 .82-.16"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRepeatOne;
