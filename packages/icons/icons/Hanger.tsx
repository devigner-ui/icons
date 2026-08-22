import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHanger = forwardRef<SVGSVGElement, IconProps>(function IconHanger(
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
            d="M9.54 6.9c0-1.05.95-1.9 2.12-1.9s2.12.85 2.12 1.9q-.01.77-.49 1.3c-.6.65-1.49 1.3-1.49 2.15v.28m0 0c.73 0 1.47.2 2.08.61l7.44 5.01c1.3.88.61 2.75-1.02 2.75H3.7c-1.61 0-2.32-1.84-1.04-2.73l7.1-5c.6-.41 1.32-.63 2.04-.64"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8 9.88a4.4 4.4 0 0 1 2.5.74l7.44 5c.95.65 1.2 1.7.87 2.6a2.4 2.4 0 0 1-2.31 1.53H3.7a2.4 2.4 0 0 1-2.3-1.51c-.34-.88-.1-1.93.82-2.58l7.1-5a4.4 4.4 0 0 1 2.47-.78m1.67 1.98a3 3 0 0 0-1.66-.48 3 3 0 0 0-1.63.51l-7.1 5c-.34.24-.38.55-.28.81.1.28.4.55.9.55h16.6c.5 0 .8-.28.9-.56.1-.26.05-.58-.3-.82z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.29 6.9c0-.56.53-1.15 1.37-1.15s1.37.6 1.37 1.16q0 .47-.29.78l-.38.38-.08.09q-.26.24-.53.55c-.26.31-.55.73-.66 1.23a5 5 0 0 1 1.6.02l.2-.28.44-.46.08-.07.43-.45c.45-.48.7-1.11.7-1.8 0-1.53-1.37-2.65-2.88-2.65S8.79 5.37 8.79 6.91a.75.75 0 0 0 1.5 0"
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
            d="M11.66 5.75c-.84 0-1.37.6-1.37 1.16a.75.75 0 1 1-1.5 0c0-1.54 1.36-2.66 2.87-2.66s2.87 1.12 2.87 2.66c0 .68-.24 1.31-.69 1.8l-.43.44-.08.07a8 8 0 0 0-.64.74q.87.16 1.61.66l7.44 5c.95.65 1.2 1.7.87 2.6a2.4 2.4 0 0 1-2.31 1.53H3.7a2.4 2.4 0 0 1-2.3-1.51c-.34-.88-.1-1.93.82-2.58l7.1-5a4 4 0 0 1 1.77-.72c.1-.5.4-.92.66-1.23a9 9 0 0 1 .61-.64l.38-.38q.29-.3.3-.78c0-.57-.54-1.16-1.38-1.16m1.8 6.11a3 3 0 0 0-1.65-.48 3 3 0 0 0-1.63.51l-7.1 5c-.34.24-.38.55-.28.81.1.28.4.55.9.55h16.6c.5 0 .8-.28.9-.56.1-.26.05-.58-.3-.82z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHanger;
