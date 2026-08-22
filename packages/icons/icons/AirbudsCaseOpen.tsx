import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirbudsCaseOpen = forwardRef<SVGSVGElement, IconProps>(
  function IconAirbudsCaseOpen(
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
              d="M3 12.83c0-.78 0-1.17.2-1.44l.2-.18c.26-.21.65-.21 1.43-.21h14.34c.78 0 1.17 0 1.44.2l.18.2c.21.26.21.65.21 1.43V13c0 3.75 0 5.62-.95 6.94a5 5 0 0 1-1.11 1.1C17.62 22 15.75 22 12 22s-5.62 0-6.94-.95a5 5 0 0 1-1.1-1.11C3 18.62 3 16.75 3 13z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.5 5.94V4.62A2.6 2.6 0 0 1 6.13 2a4.37 4.37 0 0 1 4.37 4.38V11H6.8V9.24a.8.8 0 0 0-.83-.83A2.47 2.47 0 0 1 3.5 5.94"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.5 5.94V4.62A2.63 2.63 0 0 0 17.88 2a4.4 4.4 0 0 0-4.38 4.38V11h3.7V9.24c0-.46.37-.83.83-.83 1.36 0 2.47-1.1 2.47-2.47"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 11c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2"
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
              d="M3.2 11.4c-.2.26-.2.65-.2 1.43V13c0 3.75 0 5.62.95 6.94a5 5 0 0 0 1.11 1.1C6.38 22 8.25 22 12 22s5.62 0 6.94-.95a5 5 0 0 0 1.1-1.11C21 18.62 21 16.75 21 13v-.17c0-.78 0-1.17-.2-1.44l-.2-.18c-.26-.21-.65-.21-1.43-.21h-2.42A2.75 2.75 0 0 1 14 13.75h-4A2.75 2.75 0 0 1 7.25 11H4.83c-.78 0-1.17 0-1.44.2z"
              fill="currentColor"
            />
            <path
              d="M8.75 11c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 13.75A2.75 2.75 0 0 0 16.75 11h-1.5c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 13.75z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M3.5 4.63v1.31c0 1.37 1.1 2.47 2.47 2.47.46 0 .82.37.82.83V11h3.71V6.38A4.37 4.37 0 0 0 6.13 2 2.6 2.6 0 0 0 3.5 4.63"
                fill="currentColor"
              />
              <path
                d="M20.5 4.63v1.31c0 1.37-1.1 2.47-2.47 2.47a.8.8 0 0 0-.82.83V11H13.5V6.38A4.4 4.4 0 0 1 17.87 2a2.6 2.6 0 0 1 2.63 2.63"
                fill="currentColor"
              />
            </g>
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
              d="M3.5 4.63v1.31c0 1.37 1.1 2.47 2.47 2.47.46 0 .82.37.82.83V10h3.71V6.38A4.37 4.37 0 0 0 6.13 2 2.6 2.6 0 0 0 3.5 4.63"
              fill="currentColor"
            />
            <path
              d="M20.5 4.63v1.31c0 1.37-1.1 2.47-2.47 2.47a.8.8 0 0 0-.82.83V10H13.5V6.38A4.4 4.4 0 0 1 17.87 2a2.6 2.6 0 0 1 2.63 2.63"
              fill="currentColor"
            />
            <path
              d="M3.2 11.4c-.2.26-.2.65-.2 1.43V13c0 3.75 0 5.62.95 6.94a5 5 0 0 0 1.11 1.1C6.38 22 8.25 22 12 22s5.62 0 6.94-.95a5 5 0 0 0 1.1-1.11C21 18.62 21 16.75 21 13v-.17c0-.78 0-1.17-.2-1.44l-.2-.18c-.26-.21-.65-.21-1.43-.21h-2.42A2.75 2.75 0 0 1 14 13.75h-4A2.75 2.75 0 0 1 7.25 11H4.83c-.78 0-1.17 0-1.44.2z"
              fill="currentColor"
            />
            <path
              d="M8.75 11c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAirbudsCaseOpen;
