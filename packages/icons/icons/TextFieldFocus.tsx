import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextFieldFocus = forwardRef<SVGSVGElement, IconProps>(
  function IconTextFieldFocus(
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
              d="M8.25 15.5a.75.75 0 0 0 1.5 0zm3.41-6.75.5-.56zm-.41 1.68a.75.75 0 0 0 1.5 0zm.5-1.6.56-.5zm-5.41-.08-.5-.56zm-1.09 1.68a.75.75 0 0 0 1.5 0zm1-1.6-.56-.5zM7 14.76a.75.75 0 0 0 0 1.5zm4 1.5a.75.75 0 0 0 0-1.5zm-3.07-7H9v-1.5H7.92zm1.07 0h1.07v-1.5H9zm.75 6.25v-7h-1.5v7zm.32-6.25c.46 0 .73 0 .93.03.17.02.18.05.17.03l1-1.12c-.3-.27-.66-.36-.99-.4q-.47-.05-1.1-.04zm2.68 1.18q.01-.64-.04-1.11a1.7 1.7 0 0 0-.4-.98l-1.12 1c-.02-.02.01-.01.03.16.03.2.03.47.03.93zM11.17 9.3l.02.02 1.12-1-.15-.14zM7.93 7.75q-.64-.01-1.11.04a1.7 1.7 0 0 0-.98.4l1 1.12c-.02.02-.01-.01.16-.03.2-.03.47-.03.92-.03zm-1.18 2.68c0-.46 0-.73.03-.93.02-.17.05-.18.03-.17l-1.12-1c-.27.3-.36.66-.4.99q-.05.47-.04 1.1zm-.91-2.24-.15.15 1.12 1 .02-.03zM7 16.25h4v-1.5H7z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 4h-2C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h2m3-16c3.11.01 4.77.1 5.83 1.17C22 6.34 22 8.23 22 12s0 5.66-1.17 6.83C19.77 19.89 18.1 19.99 15 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15 2v20"
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
              d="M3.17 18.83C4.34 20 6.23 20 10 20h5.75c2.64-.03 4.1-.2 5.08-1.17C22 17.66 22 15.77 22 12s0-5.66-1.17-6.83c-.98-.97-2.46-1.14-5.1-1.17H10C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 1.25c.41 0 .75.34.75.75v20a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M6.82 7.79q.45-.05 1.06-.04h2.24q.6-.01 1.06.04a1.7 1.7 0 0 1 1.13.55c.27.3.36.65.4.98q.05.46.04 1.06v.05a.75.75 0 0 1-1.5 0c0-.46 0-.73-.03-.93S11 9.28 11 9.28c-.2-.03-.47-.03-.93-.03h-.32v5.5H11a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h1.25v-5.5h-.33c-.45 0-.72 0-.92.03 0 0-.2.03-.22.22-.03.2-.03.47-.03.93a.75.75 0 0 1-1.5 0v-.05q-.01-.6.04-1.06a1.7 1.7 0 0 1 .55-1.13c.3-.27.65-.36.98-.4"
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
              d="M15.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-2c2.64-.03 4.1-.2 5.08-1.17C22 17.66 22 15.77 22 12s0-5.66-1.17-6.83c-.98-.97-2.44-1.14-5.08-1.16z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 20c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12s0-5.66 1.17-6.83S6.23 4 10 4h3v16zM6.82 7.79q.45-.05 1.06-.04h2.24q.6-.01 1.06.04a1.7 1.7 0 0 1 1.13.55c.27.3.36.65.4.98q.05.46.04 1.06v.05a.75.75 0 0 1-1.5 0c0-.46 0-.73-.03-.93S11 9.28 11 9.28c-.2-.03-.47-.03-.93-.03h-.32v5.5H11a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h1.25v-5.5h-.33c-.45 0-.72 0-.92.03 0 0-.2.03-.22.22-.03.2-.03.47-.03.93a.75.75 0 0 1-1.5 0v-.05q-.01-.6.04-1.06a1.7 1.7 0 0 1 .55-1.13c.3-.27.65-.36.98-.4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextFieldFocus;
