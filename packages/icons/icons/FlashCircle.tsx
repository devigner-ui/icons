import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFlashCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconFlashCircle(
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
            d="M8.68 12.72h1.74v4.05c0 .6.74.88 1.14.43l4.26-4.84a.65.65 0 0 0-.49-1.08H13.6V7.23c0-.6-.74-.88-1.14-.43L8.2 11.64a.65.65 0 0 0 .5 1.08Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M4 6a10 10 0 1 0 3.97-3.15"
            strokeWidth={strokeWidth}
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.68 11.91 1.65.41-.95 3.84c-.22.9.22 1.2.98.67l5.18-3.59c.63-.44.54-.95-.21-1.14l-1.65-.41.95-3.84c.22-.9-.22-1.2-.98-.67l-5.18 3.59c-.63.44-.54.95.21 1.14"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="m8.68 11.91 1.65.41-.95 3.84c-.22.9.22 1.2.98.67l5.18-3.59c.63-.44.54-.95-.21-1.14l-1.65-.41.95-3.84c.22-.9-.22-1.2-.98-.67l-5.18 3.59c-.63.44-.54.95.21 1.14"
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
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m3.53 11.23-5.18 3.59c-.76.53-1.2.22-.98-.67l.95-3.84-1.65-.41c-.75-.18-.84-.7-.21-1.14l5.18-3.59c.76-.53 1.2-.22.98.67l-.95 3.84 1.65.41c.75.19.84.7.21 1.14"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFlashCircle;
