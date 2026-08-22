import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPassword = forwardRef<SVGSVGElement, IconProps>(function IconPassword(
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
            d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h4c3.77 0 5.66 0 6.83 1.17S22 8.23 22 12s0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 10v4m-1.73-3 3.46 2m0-2-3.46 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6.73 10v4M5 11l3.46 2m0-2L5 13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17.27 10v4m-1.73-3L19 13m0-2-3.46 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h4c3.77 0 5.66 0 6.83 1.17S22 8.23 22 12s0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12"
            fill="currentColor"
          />
          <path
            d="M12.75 10a.75.75 0 1 0-1.5 0v.7l-.6-.35a.75.75 0 1 0-.76 1.3l.61.35-.6.35a.75.75 0 1 0 .74 1.3l.61-.35v.7a.75.75 0 1 0 1.5 0v-.7l.6.35a.75.75 0 0 0 .76-1.3L13.5 12l.6-.35a.75.75 0 0 0-.74-1.3l-.61.35z"
            fill="currentColor"
          />
          <path
            d="M6.73 9.25c.42 0 .75.34.75.75v.7l.6-.35a.75.75 0 0 1 .76 1.3l-.6.35.6.35a.75.75 0 1 1-.75 1.3l-.6-.35v.7a.75.75 0 0 1-1.5 0v-.7l-.61.35a.75.75 0 0 1-.75-1.3l.6-.35-.6-.35a.75.75 0 1 1 .75-1.3l.6.35V10c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M18.02 10a.75.75 0 1 0-1.5 0v.7l-.6-.35a.75.75 0 1 0-.76 1.3l.6.35-.6.35a.75.75 0 0 0 .75 1.3l.6-.35v.7a.75.75 0 0 0 1.5 0v-.7l.61.35a.75.75 0 0 0 .75-1.3l-.6-.35.6-.35a.75.75 0 1 0-.75-1.3l-.6.35z"
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
            d="M3.17 5.17C2 6.34 2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h4c3.77 0 5.66 0 6.83-1.17S22 15.77 22 12s0-5.66-1.17-6.83S17.77 4 14 4h-4C6.23 4 4.34 4 3.17 5.17M12.75 10a.75.75 0 1 0-1.5 0v.7l-.6-.35a.75.75 0 0 0-.76 1.3l.61.35-.6.35a.75.75 0 1 0 .74 1.3l.61-.35v.7a.75.75 0 0 0 1.5 0v-.7l.6.35a.75.75 0 0 0 .76-1.3L13.5 12l.6-.35a.75.75 0 0 0-.74-1.3l-.61.35zm-6.02-.75c.42 0 .75.34.75.75v.7l.6-.35a.75.75 0 0 1 .76 1.3l-.6.35.6.35a.75.75 0 1 1-.75 1.3l-.6-.35v.7a.75.75 0 0 1-1.5 0v-.7l-.62.35a.75.75 0 0 1-.75-1.3l.61-.35-.6-.35a.75.75 0 1 1 .75-1.3l.6.35V10c0-.41.34-.75.75-.75m11.29.75a.75.75 0 1 0-1.5 0v.7l-.6-.35a.75.75 0 0 0-.76 1.3l.6.35-.6.35a.75.75 0 0 0 .75 1.3l.6-.35v.7a.75.75 0 0 0 1.5 0v-.7l.61.35a.75.75 0 0 0 .75-1.3l-.6-.35.6-.35a.75.75 0 0 0-.75-1.3l-.6.35z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPassword;
