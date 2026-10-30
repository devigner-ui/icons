import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEmojiNormal = forwardRef<SVGSVGElement, IconProps>(
  function IconEmojiNormal(
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
            d="M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7 8.25c1 1 2.63 1 3.64 0"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.36 8.25c1 1 2.63 1 3.64 0"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.4 13h7.2c.5 0 .9.4.9.9a4.5 4.5 0 1 1-9 0c0-.5.4-.9.9-.9Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 8.25c1 1 2.63 1 3.64 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.36 8.25c1 1 2.63 1 3.64 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.4 13h7.2c.5 0 .9.4.9.9a4.5 4.5 0 1 1-9 0c0-.5.4-.9.9-.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
              fill="currentColor"
            />
            <path
              d="M8.82 9.75a3.3 3.3 0 0 1-2.35-.97.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0c.71.71 1.87.71 2.58 0a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06-.65.64-1.5.97-2.35.97"
              fill="currentColor"
            />
            <path
              d="M15.18 9.75a3.3 3.3 0 0 1-2.35-.97.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0c.71.71 1.87.71 2.58 0a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06-.65.64-1.5.97-2.35.97"
              fill="currentColor"
            />
            <path
              d="M15.6 12.62H8.4c-.7 0-1.27.57-1.27 1.28a4.89 4.89 0 0 0 9.76 0 1.3 1.3 0 0 0-1.29-1.28"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M6.47 7.72a.75.75 0 0 1 1.06 0c.71.71 1.87.71 2.58 0a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06a3.3 3.3 0 0 1-4.7 0 .75.75 0 0 1 0-1.06M12 18.78a4.9 4.9 0 0 1-4.88-4.88c0-.7.57-1.28 1.27-1.28h7.2c.7 0 1.27.57 1.27 1.28A4.86 4.86 0 0 1 12 18.78m5.53-10a3.3 3.3 0 0 1-4.7 0 .75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0c.71.71 1.87.71 2.58 0a.75.75 0 0 1 1.06 0c.29.29.29.76 0 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEmojiNormal;
