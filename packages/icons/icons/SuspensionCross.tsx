import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuspensionCross = forwardRef<SVGSVGElement, IconProps>(
  function IconSuspensionCross(
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
              d="M8 6.5v-2c0-.46 0-.7-.04-.89A2 2 0 0 0 6.4 2.04C6.19 2 5.96 2 5.5 2s-.7 0-.89.04A2 2 0 0 0 3.04 3.6C3 3.81 3 4.04 3 4.5v2c0 .47 0 .7.04.9A2 2 0 0 0 4.6 8.95c.2.04.43.04.89.04s.7 0 .89-.04A2 2 0 0 0 7.96 7.4C8 7.2 8 6.97 8 6.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M21 6.5v-2c0-.46 0-.7-.04-.89a2 2 0 0 0-1.57-1.57C19.19 2 18.96 2 18.5 2s-.7 0-.89.04a2 2 0 0 0-1.57 1.57c-.04.2-.04.43-.04.89v2c0 .47 0 .7.04.9a2 2 0 0 0 1.57 1.56c.2.04.43.04.89.04s.7 0 .89-.04a2 2 0 0 0 1.57-1.57c.04-.2.04-.42.04-.89"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 19.5v-2c0-.46 0-.7-.04-.89a2 2 0 0 0-1.57-1.57C6.19 15 5.96 15 5.5 15s-.7 0-.89.04a2 2 0 0 0-1.57 1.57c-.04.2-.04.43-.04.89v2c0 .47 0 .7.04.9a2 2 0 0 0 1.57 1.56c.2.04.43.04.89.04s.7 0 .89-.04a2 2 0 0 0 1.57-1.57c.04-.2.04-.42.04-.89"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M21 19.5v-2c0-.46 0-.7-.04-.89a2 2 0 0 0-1.57-1.57c-.2-.04-.43-.04-.89-.04s-.7 0-.89.04a2 2 0 0 0-1.57 1.57c-.04.2-.04.43-.04.89v2c0 .47 0 .7.04.9a2 2 0 0 0 1.57 1.56c.2.04.43.04.89.04s.7 0 .89-.04a2 2 0 0 0 1.57-1.57c.04-.2.04-.42.04-.89"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 18.5H8m8-13H8M12 8V5.5m0 13V16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m14 10-4 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m10 10 4 4"
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
              d="M8 6.5v-2c0-.46 0-.7-.04-.89A2 2 0 0 0 6.4 2.04C6.19 2 5.96 2 5.5 2s-.7 0-.89.04A2 2 0 0 0 3.04 3.6C3 3.81 3 4.04 3 4.5v2c0 .47 0 .7.04.9A2 2 0 0 0 4.6 8.95c.2.04.43.04.89.04s.7 0 .89-.04A2 2 0 0 0 7.96 7.4C8 7.2 8 6.97 8 6.5"
              fill="currentColor"
            />
            <path
              d="M21 6.5v-2c0-.46 0-.7-.04-.89a2 2 0 0 0-1.57-1.57C19.19 2 18.96 2 18.5 2s-.7 0-.89.04a2 2 0 0 0-1.57 1.57c-.04.2-.04.43-.04.89v2c0 .47 0 .7.04.9a2 2 0 0 0 1.57 1.56c.2.04.43.04.89.04s.7 0 .89-.04a2 2 0 0 0 1.57-1.57c.04-.2.04-.42.04-.89"
              fill="currentColor"
            />
            <path
              d="M8 19.5v-2c0-.46 0-.7-.04-.89a2 2 0 0 0-1.57-1.57C6.19 15 5.96 15 5.5 15s-.7 0-.89.04a2 2 0 0 0-1.57 1.57c-.04.2-.04.43-.04.89v2c0 .47 0 .7.04.9a2 2 0 0 0 1.57 1.56c.2.04.43.04.89.04s.7 0 .89-.04a2 2 0 0 0 1.57-1.57c.04-.2.04-.42.04-.89"
              fill="currentColor"
            />
            <path
              d="M21 19.5v-2c0-.46 0-.7-.04-.89a2 2 0 0 0-1.57-1.57c-.2-.04-.43-.04-.89-.04s-.7 0-.89.04a2 2 0 0 0-1.57 1.57c-.04.2-.04.43-.04.89v2c0 .47 0 .7.04.9a2 2 0 0 0 1.57 1.56c.2.04.43.04.89.04s.7 0 .89-.04a2 2 0 0 0 1.57-1.57c.04-.2.04-.42.04-.89"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8 6.25v-1.5h8v1.5h-3.25V8a.75.75 0 0 1-1.5 0V6.25z"
                fill="currentColor"
              />
              <path
                d="M8 19.25h8v-1.5h-3.25V16a.75.75 0 0 0-1.5 0v1.75H8z"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.47 9.47c.3-.3.77-.3 1.06 0L12 10.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 12l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 13.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 12l-1.47-1.47a.75.75 0 0 1 0-1.06"
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
              d="M8 6.5v-2c0-.46 0-.7-.04-.89A2 2 0 0 0 6.4 2.04C6.19 2 5.96 2 5.5 2s-.7 0-.89.04A2 2 0 0 0 3.04 3.6C3 3.81 3 4.04 3 4.5v2c0 .47 0 .7.04.9A2 2 0 0 0 4.6 8.95c.2.04.43.04.89.04s.7 0 .89-.04A2 2 0 0 0 7.96 7.4C8 7.2 8 6.97 8 6.5"
              fill="currentColor"
            />
            <path
              d="M21 6.5v-2c0-.46 0-.7-.04-.89a2 2 0 0 0-1.57-1.57C19.19 2 18.96 2 18.5 2s-.7 0-.89.04a2 2 0 0 0-1.57 1.57c-.04.2-.04.43-.04.89v2c0 .47 0 .7.04.9a2 2 0 0 0 1.57 1.56c.2.04.43.04.89.04s.7 0 .89-.04a2 2 0 0 0 1.57-1.57c.04-.2.04-.42.04-.89"
              fill="currentColor"
            />
            <path
              d="M8 19.5v-2c0-.46 0-.7-.04-.89a2 2 0 0 0-1.57-1.57C6.19 15 5.96 15 5.5 15s-.7 0-.89.04a2 2 0 0 0-1.57 1.57c-.04.2-.04.43-.04.89v2c0 .47 0 .7.04.9a2 2 0 0 0 1.57 1.56c.2.04.43.04.89.04s.7 0 .89-.04a2 2 0 0 0 1.57-1.57c.04-.2.04-.42.04-.89"
              fill="currentColor"
            />
            <path
              d="M21 19.5v-2c0-.46 0-.7-.04-.89a2 2 0 0 0-1.57-1.57c-.2-.04-.43-.04-.89-.04s-.7 0-.89.04a2 2 0 0 0-1.57 1.57c-.04.2-.04.43-.04.89v2c0 .47 0 .7.04.9a2 2 0 0 0 1.57 1.56c.2.04.43.04.89.04s.7 0 .89-.04a2 2 0 0 0 1.57-1.57c.04-.2.04-.42.04-.89"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 4.75v1.5h-3.25V8a.75.75 0 0 1-1.5 0V6.25H8v-1.5zm-4 10.5c.41 0 .75.34.75.75v1.75H16v1.5H8v-1.5h3.25V16c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.47 9.47c.3-.3.77-.3 1.06 0L12 10.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 12l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 13.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 12l-1.47-1.47a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSuspensionCross;
