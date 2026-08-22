import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuspension = forwardRef<SVGSVGElement, IconProps>(
  function IconSuspension(
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
              d="M16 18.5H8m8-13H8m4 13v-13"
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
              d="M12.75 17.75V6.25H16v-1.5H8v1.5h3.25v11.5H8v1.5h8v-1.5z"
              fill="currentColor"
            />
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
              d="M3 6.5v-2c0-.46 0-.7.04-.89A2 2 0 0 1 4.6 2.04C4.81 2 5.04 2 5.5 2s.7 0 .89.04A2 2 0 0 1 7.96 3.6c.04.2.04.43.04.89v.25h8V4.5c0-.46 0-.7.04-.89a2 2 0 0 1 1.57-1.57c.2-.04.43-.04.89-.04s.7 0 .89.04a2 2 0 0 1 1.57 1.57c.04.2.04.43.04.89v2c0 .47 0 .7-.04.9a2 2 0 0 1-1.57 1.56c-.2.04-.43.04-.89.04s-.7 0-.89-.04a2 2 0 0 1-1.57-1.57C16 7.2 16 6.97 16 6.5v-.25h-3.25v11.5H16v-.25c0-.46 0-.7.04-.89a2 2 0 0 1 1.57-1.57c.2-.04.43-.04.89-.04s.7 0 .89.04a2 2 0 0 1 1.57 1.57c.04.2.04.43.04.89v2c0 .47 0 .7-.04.9a2 2 0 0 1-1.57 1.56c-.2.04-.43.04-.89.04s-.7 0-.89-.04a2 2 0 0 1-1.57-1.57c-.04-.2-.04-.42-.04-.89v-.25H8v.25c0 .47 0 .7-.04.9a2 2 0 0 1-1.57 1.56c-.2.04-.43.04-.89.04s-.7 0-.89-.04a2 2 0 0 1-1.57-1.57C3 20.2 3 19.97 3 19.5v-2c0-.46 0-.7.04-.89a2 2 0 0 1 1.57-1.57c.2-.04.43-.04.89-.04s.7 0 .89.04a2 2 0 0 1 1.57 1.57c.04.2.04.43.04.89v.25h3.25V6.25H8v.25c0 .47 0 .7-.04.9A2 2 0 0 1 6.4 8.95C6.19 9 5.96 9 5.5 9s-.7 0-.89-.04A2 2 0 0 1 3.04 7.4C3 7.2 3 6.97 3 6.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSuspension;
