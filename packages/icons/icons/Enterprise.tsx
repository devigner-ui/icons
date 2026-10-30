import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEnterprise = forwardRef<SVGSVGElement, IconProps>(
  function IconEnterprise(
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
            strokeLinejoin="round"
          />
          <path
            d="M17 22V6c0-1.89 0-2.83-.59-3.41-.47-.48-1.17-.57-2.42-.59m-3.5 0c-1.55.01-2.37.06-2.9.59C7 3.17 7 4.1 7 6v16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 22V11.5c0-1.4 0-2.1-.34-2.61q-.22-.33-.55-.55C19.61 8 18.91 8 17.5 8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 22V11.5c0-1.4 0-2.1.34-2.61q.22-.33.55-.55C4.39 8 5.09 8 6.5 8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 5h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 8h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 14h4"
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
              d="M21 22V11.5c0-1.4 0-2.1-.34-2.61a2 2 0 0 0-.55-.55C19.61 8 18.91 8 17.5 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3 22V11.5c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55C4.39 8 5.09 8 6.5 8"
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
              d="M10 5h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 8h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 11h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 14h4"
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
              d="M21.16 5.49c.34.5.34 1.2.34 2.61v12.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.5V8.1c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55c.44-.3 2.54-.34 3.62-.34v2.25H4.49a.75.75 0 0 0 0 1.5h2.5v1.5h-2.5a.75.75 0 0 0 0 1.5h2.5v1.5h-2.5a.75.75 0 0 0 0 1.5h2.5v6.5h10v-6.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-1.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-1.5h2.5a.75.75 0 0 0 0-1.5h-2.5V4.61c1.08 0 3.17.03 3.61.33a2 2 0 0 1 .55.55"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 1.6h2c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v15.25h5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h5V5.6c0-1.89 0-2.83.59-3.41.58-.59 1.52-.59 3.41-.59m1 16.25c.41 0 .75.34.75.75v2.25h-1.5V18.6c0-.41.34-.75.75-.75m-2-4.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-.75-2.25c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M10 8.1a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-.75-2.25c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
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
              d="M21.5 8.1c0-1.4 0-2.1-.34-2.61a2 2 0 0 0-.55-.55c-.44-.3-1.03-.33-2.11-.34v2.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5H17V5.6c0-1.89 0-2.83-.59-3.41-.58-.59-1.52-.59-3.41-.59h-2c-1.89 0-2.83 0-3.41.59C7 2.77 7 3.71 7 5.6v15.25H5.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V4.61c-1.08 0-1.67.03-2.11.33a2 2 0 0 0-.55.55c-.34.5-.34 1.2-.34 2.61v12.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5zM9.25 11.35c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m2.75 3.5c.41 0 .75.34.75.75v2.25h-1.5V18.6c0-.41.34-.75.75-.75m-2.75-12c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEnterprise;
