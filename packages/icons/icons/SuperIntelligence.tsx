import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligence = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligence(
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
            d="M8.79 21H7.5A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-5.31"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.92 9.44C11.83 8 8.02 8 7.48 10.08c-.44 1.44 5.44 1.76 5.44 3.84-.54 2.08-4.35 2.08-5.44.64M16.52 8v8"
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
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.92 9.44C11.83 8 8.02 8 7.48 10.08c-.44 1.44 5.44 1.76 5.44 3.84-.54 2.08-4.35 2.08-5.44.64M16.52 8v8"
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
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 2.25h9c1.4.03 2.8.63 3.71 1.54.91.9 1.5 2.31 1.54 3.71v9a5.6 5.6 0 0 1-1.54 3.71c-.9.91-2.31 1.5-3.71 1.54h-9a5.6 5.6 0 0 1-3.71-1.54 5.6 5.6 0 0 1-1.54-3.71v-9c.03-1.4.63-2.8 1.54-3.71.9-.91 2.31-1.5 3.71-1.54z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.32 9.9c-.66-.82-2.14-.86-3.05-.57a2 2 0 0 0-.9.58l-.1.26c.47.33 1.02.52 1.56.72.78.28 1.58.55 2.3.96.79.43 1.43 1.04 1.53 1.95a1 1 0 0 1-.03.37c-.69 2.14-3.5 2.55-5.36 1.83a3.3 3.3 0 0 1-1.39-1 .75.75 0 1 1 1.2-.9c.66.8 2.12.85 3.03.56.45-.14.87-.4 1.05-.83a1 1 0 0 0-.28-.36c-.3-.26-.68-.44-1.05-.6-1.04-.46-2.19-.72-3.17-1.3-.61-.36-1.05-.9-.92-1.65.16-.9.98-1.6 1.8-1.93 1.59-.64 3.85-.4 4.98.99a.75.75 0 1 1-1.2.9zm4.2-2.65c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M7.5 2.25h9c1.4.03 2.8.63 3.71 1.54.91.9 1.5 2.31 1.54 3.71v9a5.6 5.6 0 0 1-1.54 3.71c-.9.91-2.31 1.5-3.71 1.54h-9a5.6 5.6 0 0 1-3.71-1.54 5.6 5.6 0 0 1-1.54-3.71v-9c.03-1.4.63-2.8 1.54-3.71.9-.91 2.31-1.5 3.71-1.54zm5.87 7.79c.33-.25.4-.72.15-1.05-1.13-1.4-3.39-1.63-4.98-.99-.82.33-1.63 1.02-1.8 1.93-.13.75.31 1.29.92 1.65.98.58 2.13.84 3.17 1.3q.57.22 1.06.6c.1.1.23.21.27.36-.18.44-.6.7-1.04.83-.92.29-2.38.25-3.04-.56a.75.75 0 0 0-1.2.9q.56.68 1.39.99c1.86.72 4.68.31 5.36-1.83a1 1 0 0 0 .03-.37c-.1-.91-.74-1.52-1.52-1.95-.73-.4-1.53-.68-2.3-.96-.55-.2-1.1-.39-1.57-.72l.1-.26c.22-.3.56-.47.9-.58.92-.3 2.4-.25 3.05.56.25.33.72.4 1.05.15zM15.77 8v8a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligence;
