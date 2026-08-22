import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPinList = forwardRef<SVGSVGElement, IconProps>(function IconPinList(
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
            d="m13.63 8.22-.36-.36c-1.53-1.53-2.3-2.3-3.13-2.3a2 2 0 0 0-.79.17C8.6 6.05 8.2 7.06 7.4 9.07l-.06.14c-.22.57-.34.86-.52 1.09a2 2 0 0 1-.5.44c-.24.16-.53.24-1.12.41-.92.26-1.38.4-1.58.67a1 1 0 0 0-.19.71c.05.34.38.68 1.06 1.35l3.13 3.13c.67.68 1 1.01 1.35 1.05a1 1 0 0 0 .71-.18c.28-.2.4-.66.67-1.58.16-.59.25-.88.4-1.13a2 2 0 0 1 .45-.5c.23-.17.51-.29 1.08-.51l.15-.06c2.01-.8 3.02-1.2 3.34-1.96a2 2 0 0 0 .17-.8c0-.82-.77-1.59-2.3-3.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.35 18.14 2.7-2.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 8h-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 12.5h-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 17h-9"
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
            d="m12.95 8.6-.36-.36C11.07 6.74 10.3 6 9.49 6q-.41 0-.79.16c-.75.32-1.15 1.3-1.94 3.26l-.06.14c-.23.56-.34.83-.52 1.06q-.2.26-.49.43c-.24.16-.54.24-1.12.4-.9.25-1.36.38-1.56.65a1 1 0 0 0-.19.7c.04.33.38.66 1.04 1.31l1.02 1 1.05 1.03.01.02 1.03 1c.67.66 1 1 1.34 1.03a1 1 0 0 0 .71-.18c.27-.2.4-.64.66-1.53.17-.58.25-.87.4-1.1q.19-.29.45-.49c.23-.18.5-.29 1.07-.5l.15-.07c2-.78 3-1.17 3.32-1.9q.15-.37.16-.78c0-.8-.76-1.55-2.28-3.04"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.27 18.79 2.67-2.63-.01-.02-1.05-1.03-2.66 2.64c-.3.29-.3.75 0 1.04.29.28.76.28 1.05 0"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 8.38c0 .4-.33.73-.74.73h-4.97a.74.74 0 0 1-.74-.73c0-.4.33-.73.74-.73h4.97c.4 0 .74.32.74.73"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12.77c0 .4-.33.73-.74.73h-3.97a.74.74 0 0 1-.75-.73c0-.4.34-.74.75-.74h3.97c.4 0 .74.33.74.74"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 17.15c0 .4-.33.74-.74.74h-8.94a.74.74 0 0 1-.74-.74c0-.4.33-.73.74-.73h8.94c.4 0 .74.33.74.73"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 8.38c0 .4-.33.73-.74.73h-4.97a.74.74 0 0 1-.74-.73c0-.4.33-.73.74-.73h4.97c.4 0 .74.32.74.73"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12.77c0 .4-.33.73-.74.73h-3.97a.74.74 0 0 1-.75-.73c0-.4.34-.74.75-.74h3.97c.4 0 .74.33.74.74"
            fill="currentColor"
          />
          <path
            d="m12.59 8.24.36.36c1.52 1.49 2.28 2.23 2.28 3.04q0 .4-.16.77c-.33.74-1.33 1.13-3.32 1.91l-.15.06c-.56.22-.84.33-1.07.51q-.27.21-.44.48c-.16.24-.24.53-.4 1.1-.27.9-.4 1.34-.67 1.54a1 1 0 0 1-.71.18c-.34-.04-.67-.37-1.34-1.02l-1.03-1.01-2.67 2.63a.75.75 0 0 1-1.05 0 .7.7 0 0 1 0-1.04l2.66-2.64-1.02-1c-.66-.65-1-.98-1.04-1.31a1 1 0 0 1 .19-.7c.2-.27.65-.4 1.56-.65.58-.16.88-.24 1.12-.4q.28-.17.5-.43c.17-.23.28-.5.51-1.06l.06-.14c.8-1.96 1.19-2.94 1.94-3.26Q9.08 6 9.5 6c.82 0 1.58.75 3.1 2.24"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 17.15c0 .4-.33.74-.74.74h-8.94a.74.74 0 0 1-.74-.74c0-.4.33-.73.74-.73h8.94c.4 0 .74.33.74.73"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPinList;
