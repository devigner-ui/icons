import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHospital = forwardRef<SVGSVGElement, IconProps>(function IconHospital(
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
            d="M22 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 22V6c0-1.89 0-2.83-.59-3.41C15.83 2 14.9 2 13 2h-2c-1.89 0-2.83 0-3.41.59C7 3.17 7 4.1 7 6v16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 22v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 12h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5.5 11H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5.5 14H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 11h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 14h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5.5 8H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 8h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 9V5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7h-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.25 8.5a.75.75 0 0 0 1.5 0zm-.14-3.16-.42.62h0zm.55.55-.62.42h0zm1.09 6.61a.75.75 0 0 0-1.5 0zM17.5 5.75c.72 0 1.2 0 1.57.04.35.03.52.1.62.17l.84-1.25q-.6-.37-1.31-.41-.69-.06-1.72-.05zm4.25 2.75q.01-1.03-.05-1.72a3 3 0 0 0-.41-1.3l-1.25.83c.07.1.14.27.17.62.04.37.04.85.04 1.57zm-2.06-2.54q.21.14.35.35l1.25-.84q-.3-.46-.76-.76zm.56 6.54V22h1.5v-9.5z"
            fill="currentColor"
          />
          <path
            d="m3.89 5.34.42.62h0zm-.55.55.62.42h0zM3.75 17a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM6.5 4.25q-1.03-.01-1.72.05a3 3 0 0 0-1.3.41l.83 1.25c.1-.07.27-.14.62-.17.37-.04.85-.04 1.57-.04zM3.75 8.5c0-.72 0-1.2.04-1.57.03-.35.1-.52.17-.62l-1.25-.84q-.37.6-.41 1.31-.06.69-.05 1.72zm-.28-3.79q-.46.3-.76.76l1.25.84q.14-.21.35-.35zM2.25 17v5h1.5v-5zm0-8.5V13h1.5V8.5z"
            fill="currentColor"
          />
          <path
            d="M10 15h.5m3.5 0h-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M22 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 22V6c0-1.89 0-2.83-.59-3.41C15.83 2 14.9 2 13 2h-2c-1.89 0-2.83 0-3.41.59C7 3.17 7 4.1 7 6v16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21 22V8.5c0-1.4 0-2.1-.34-2.61a2 2 0 0 0-.55-.55C19.61 5 18.91 5 17.5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3 22V8.5c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55C4.39 5 5.09 5 6.5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 22v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 12h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.5 11H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.5 14H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 11h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 14h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.5 8H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 8h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 15h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 9V5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7h-4"
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
            d="M10.75 2h2c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v15.25h5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h5V6c0-1.89 0-2.83.59-3.41C7.92 2 8.86 2 10.75 2m1 2.25c.41 0 .75.34.75.75v1.25h1.25a.75.75 0 0 1 0 1.5H12.5V9A.75.75 0 0 1 11 9V7.75H9.75a.75.75 0 0 1 0-1.5H11V5c0-.41.34-.75.75-.75M9 12c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 12m0 3c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 15m2.75 3.25c.41 0 .75.34.75.75v2.25H11V19c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.91 5.89c.34.5.34 1.2.34 2.61v12.75h.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h.5V8.5c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55C3.58 5.04 5.68 5 6.76 5v2.25H4.24a.75.75 0 1 0 0 1.5h2.5v1.5h-2.5a.75.75 0 0 0 0 1.5h2.5v1.5h-2.5a.75.75 0 0 0 0 1.5h2.5v6.5h10v-6.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-1.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-1.5h2.5a.75.75 0 0 0 0-1.5h-2.5V5c1.08 0 3.17.04 3.61.34a2 2 0 0 1 .55.55"
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
            d="M21.5 8.5c0-1.4 0-2.1-.34-2.61a2 2 0 0 0-.55-.55c-.44-.3-1.03-.33-2.11-.34v2.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5H17V6c0-1.89 0-2.83-.59-3.41C15.83 2 14.9 2 13 2h-2c-1.89 0-2.83 0-3.41.59C7 3.17 7 4.1 7 6v15.25H5.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V5.01c-1.08 0-1.67.03-2.11.33a2 2 0 0 0-.55.55c-.34.5-.34 1.2-.34 2.61v12.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5zM12 4.25c.41 0 .75.34.75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V9a.75.75 0 0 1-1.5 0V7.75H10a.75.75 0 0 1 0-1.5h1.25V5c0-.41.34-.75.75-.75M9.25 12c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M12 18.25c.41 0 .75.34.75.75v2.25h-1.5V19c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHospital;
