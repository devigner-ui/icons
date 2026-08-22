import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAvalancheAvax = forwardRef<SVGSVGElement, IconProps>(
  function IconAvalancheAvax(
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
              opacity={duotone ? "0.4" : "1"}
              d="m6.73 15.58 5.61-9.61c.16-.28.56-.3.75-.04l1.56 2.09c.45.6.48 1.41.09 2.05l-3.34 5.35a1.8 1.8 0 0 1-1.54.85H7.12c-.35-.01-.57-.39-.39-.69"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.91 12.37-1.92 3.2c-.18.3.04.69.39.69h3.84c.35 0 .57-.38.39-.69l-1.92-3.2c-.17-.29-.6-.29-.78 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
            <path d="M24.67 0h-24v24h24z" fill="none" />
            <path
              d="m6.73 15.58 5.61-9.61c.16-.28.56-.3.75-.04l1.56 2.09c.45.6.48 1.41.09 2.05l-3.34 5.35a1.8 1.8 0 0 1-1.54.85H7.12c-.35-.01-.57-.39-.39-.69"
              fill="currentColor"
            />
            <path
              d="m15.91 12.37-1.92 3.2c-.18.3.04.69.39.69h3.84c.35 0 .57-.38.39-.69l-1.92-3.2c-.17-.29-.6-.29-.78 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-1.28 13.41a1.8 1.8 0 0 1-1.54.85H7.11a.45.45 0 0 1-.39-.68l5.61-9.61c.16-.28.56-.3.75-.04l1.56 2.09c.45.6.48 1.41.09 2.05zm6.83.85h-3.84a.46.46 0 0 1-.39-.69l1.92-3.2c.18-.29.6-.29.78 0l1.92 3.2c.18.3-.04.69-.39.69"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAvalancheAvax;
