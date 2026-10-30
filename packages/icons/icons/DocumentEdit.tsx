import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentEdit = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentEdit(
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
            d="m17.63 8.04.46-.46a1.96 1.96 0 0 1 3.39.83c.18.71-.06 1.47-.61 1.95l-.46.46m-2.78-2.78s.06.98.93 1.85 1.85.93 1.85.93m0 0-4.26 4.26a6 6 0 0 1-.6.56q-.27.22-.6.37c-.18.09-.37.15-.76.28l-1.24.41-.4.14-.4.13a.5.5 0 0 1-.54-.13.5.5 0 0 1-.13-.54l.13-.4.14-.4.4-1.24c.14-.39.2-.58.29-.76q.15-.33.37-.6c.13-.17.27-.31.56-.6l4.26-4.26m-5.08 8.8-.94-.94"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.45 13h2.5m-2.5-4h6.5m-6.5 8h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.42 7c-.08-1.87-.33-3.02-1.14-3.83C18.11 2 16.22 2 12.45 2h-2C6.68 2 4.79 2 3.62 3.17c-.92.92-1.11 2.27-1.16 4.62m-.01 3.5V14c0 3.77 0 5.66 1.17 6.83S6.68 22 10.45 22h2c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-3"
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              d="m17.63 8.04.46-.46a1.97 1.97 0 1 1 2.78 2.78l-.46.46m-2.78-2.78s.06.98.93 1.85 1.85.93 1.85.93m0 0-4.26 4.26c-.29.29-.43.43-.6.56q-.27.22-.6.37c-.18.09-.37.15-.76.28l-1.24.41-.4.14-.4.13a.53.53 0 0 1-.67-.67l.13-.4.14-.4.4-1.24c.14-.39.2-.58.29-.76q.15-.33.37-.6c.13-.17.27-.31.56-.6l4.26-4.26m-5.08 8.8-.94-.94"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              d="M7.45 13h2.5m-2.5-4h6.5m-6.5 8h1.5"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              d="M20.42 7c-.08-1.87-.33-3.02-1.14-3.83C18.11 2 16.22 2 12.45 2h-2C6.68 2 4.79 2 3.62 3.17S2.45 6.23 2.45 10v4c0 3.77 0 5.66 1.17 6.83S6.68 22 10.45 22h2c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-3"
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
              d="M2 10c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2h2c3.77 0 5.66 0 6.83 1.17S20 6.23 20 10v4c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22h-2c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14z"
              fill="currentColor"
            />
            <path
              d="M15.52 16.5c.17-.13.33-.3.65-.61l3.96-3.96c.1-.1.05-.26-.08-.3a4.3 4.3 0 0 1-2.68-2.68.18.18 0 0 0-.3-.08l-3.96 3.96a8 8 0 0 0-.61.65q-.24.3-.41.67c-.1.2-.17.41-.31.84l-.18.55-.3.87-.27.82a.58.58 0 0 0 .74.74l.82-.27.87-.3.55-.18c.43-.14.64-.21.84-.3q.36-.18.67-.42"
              fill="currentColor"
            />
            <path
              d="M21.37 10.7a2.16 2.16 0 1 0-3.06-3.07l-.13.13a.5.5 0 0 0-.15.47l.12.45a3.5 3.5 0 0 0 2.62 2.29q.28.04.47-.15z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.25 9c0-.41.34-.75.75-.75h6.5a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 9m0 4c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
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
              d="M15.52 16.5c.17-.13.33-.3.65-.61l3.96-3.96c.1-.1.05-.26-.08-.3a4.3 4.3 0 0 1-2.68-2.68.18.18 0 0 0-.3-.08l-3.96 3.96a8 8 0 0 0-.61.65q-.24.3-.41.67c-.1.2-.17.41-.31.84l-.18.55-.3.87-.27.82a.58.58 0 0 0 .74.74l.82-.27.87-.3.55-.18c.43-.14.64-.21.84-.3q.36-.18.67-.42"
              fill="currentColor"
            />
            <path
              d="M21.37 10.7a2.16 2.16 0 1 0-3.06-3.07l-.13.13a.5.5 0 0 0-.15.47l.12.45a3.5 3.5 0 0 0 2.62 2.29q.28.04.47-.15z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17 3.17C2 4.34 2 6.23 2 10v4c0 3.77 0 5.66 1.17 6.83S6.23 22 10 22h2c3.77 0 5.66 0 6.83-1.17 1.15-1.15 1.17-3 1.17-6.65L17.18 17a5 5 0 0 1-1.68 1.27q-.41.18-.95.35l-2.3.77a2.08 2.08 0 0 1-2.64-2.63l.27-.82.48-1.43.02-.06a5 5 0 0 1 .94-1.89q.29-.36.68-.74l4-4 1.12-1.12.13-.13a3.7 3.7 0 0 1 2.59-1.07 4 4 0 0 0-1.01-2.33C17.66 2 15.77 2 12 2h-2C6.23 2 4.34 2 3.17 3.17M6.25 9c0-.41.34-.75.75-.75h6.5a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 9m0 4c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentEdit;
