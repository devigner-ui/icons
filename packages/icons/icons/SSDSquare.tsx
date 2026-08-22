import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSSDSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconSSDSquare(
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
              d="M19 17v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.5 17v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 17v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.5 17v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m19 5.12.72-.21v-.02zm-14 0-.72-.23v.01zM2.89 20.64l.43-.6zm-.55-.58.63-.4zm19.32 0-.63-.4zm-.55.58-.43-.6zm0-6.7-.43.62zm.55.59-.63.4zM2.9 13.95l.43.6zm-.55.58.63.4zM7.5 3.75h9v-1.5h-9zm9 0q.63 0 1.02.3c.27.21.54.6.76 1.3l1.44-.46a4 4 0 0 0-1.28-2.02 3 3 0 0 0-1.94-.62zm-9-1.5c-.68 0-1.35.16-1.94.62q-.87.68-1.28 2.02l1.44.45c.22-.7.5-1.08.76-1.29q.4-.3 1.02-.3zm10.78 3.08 2.85 9.83 1.44-.41-2.85-9.84zm-14-.42-2.85 9.84 1.44.41 2.85-9.83zm1.22 9.43h13v-1.5h-13zm13 5.91h-13v1.5h13zm-13 0c-.72 0-1.2 0-1.56-.04-.35-.04-.51-.1-.62-.18l-.86 1.23c.4.28.84.39 1.32.44q.69.06 1.72.05zm-4.25-2.96q-.01 1.09.05 1.82a3 3 0 0 0 .4 1.35l1.27-.8a1.5 1.5 0 0 1-.18-.7c-.04-.4-.04-.9-.04-1.67zm2.07 2.74q-.2-.15-.35-.37l-1.27.8q.3.47.76.8zm17.93-2.74c0 .76 0 1.28-.04 1.67s-.1.57-.18.7l1.27.8a3 3 0 0 0 .4-1.35q.06-.73.05-1.82zm-2.75 4.46q1.03.01 1.72-.05a3 3 0 0 0 1.32-.44l-.86-1.23c-.1.08-.27.14-.62.18-.36.04-.84.04-1.56.04zm2.53-2.1q-.15.23-.35.38l.86 1.23q.45-.33.76-.8zm-2.53-5.31c.72 0 1.2 0 1.56.04.35.04.51.1.62.18l.86-1.23a3 3 0 0 0-1.32-.44q-.69-.06-1.72-.05zm4.25 2.95q.01-1.08-.05-1.8a3 3 0 0 0-.4-1.36l-1.27.8c.08.13.14.31.18.7s.04.9.04 1.66zm-2.07-2.73q.2.15.35.37l1.27-.8q-.3-.47-.76-.8zM5.5 12.84q-1.03-.01-1.72.05a3 3 0 0 0-1.32.44l.86 1.23c.1-.08.27-.14.62-.18.36-.04.84-.04 1.56-.04zm-2.75 4.45c0-.75 0-1.27.04-1.66s.1-.57.18-.7l-1.27-.8a3 3 0 0 0-.4 1.35q-.06.73-.05 1.81zm-.3-3.96q-.45.33-.75.8l1.27.8q.15-.23.35-.37z"
              fill="currentColor"
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
              d="M16.5 3h-9c-1.1 0-2 .53-2.5 2.12l-2.84 9.8q.06-.2.18-.4.22-.34.55-.57c.5-.36 1.2-.36 2.61-.36h13c1.4 0 2.1 0 2.61.36q.33.23.55.58.12.2.2.43L19 5.12C18.5 3.52 17.6 3 16.5 3"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 13.59h13c1.4 0 2.1 0 2.61.35q.33.24.55.59.12.2.2.43c.14.5.14 1.2.14 2.33 0 1.49 0 2.23-.34 2.77q-.21.35-.55.58c-.5.36-1.2.36-2.61.36h-13c-1.4 0-2.1 0-2.61-.36q-.33-.23-.55-.58C2 19.52 2 18.78 2 17.29a10 10 0 0 1 .16-2.36q.06-.22.18-.4.22-.35.55-.59c.5-.35 1.2-.35 2.61-.35M19 16.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75m-1.75.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM14 16.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75m-1.75.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0z"
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
              d="M7.5 3h9c1.1 0 2 .53 2.5 2.12l2.25 7.76a3 3 0 0 0-1-.24q-.7-.06-1.7-.05H5.45q-1-.01-1.7.05-.51.04-1 .24L5 5.12C5.5 3.52 6.4 3 7.5 3"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.66 14.53q.12.18.19.4v.03c.15.5.15 1.2.15 2.33 0 1.03 0 1.7-.11 2.2l-.03.12q-.07.26-.2.45-.21.35-.55.58c-.5.36-1.2.36-2.61.36h-13c-1.4 0-2.1 0-2.61-.36q-.33-.23-.55-.58C2 19.52 2 18.78 2 17.29c0-1.07 0-1.76.13-2.26V15l.02-.04q.06-.24.19-.43.22-.35.55-.59c.5-.35 1.2-.35 2.61-.35h13c1.4 0 2.1 0 2.61.35q.33.24.55.59M12.25 17a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm1.75-.75c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75m3.25.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm2.5 0a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSSDSquare;
