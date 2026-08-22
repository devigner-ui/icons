import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFavoriteChart = forwardRef<SVGSVGElement, IconProps>(
  function IconFavoriteChart(
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
              d="M22.67 13V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8 14.49 2.38-3.09a1 1 0 0 1 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.15 15.82.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15a1.2 1.2 0 0 0-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0"
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
              d="M22.67 7.81v7.35a4 4 0 0 0-.97-.3l-.31-.05-.26-.54c-.55-1.12-1.45-1.77-2.46-1.77s-1.91.65-2.46 1.77l-.27.54-.3.05c-1.19.2-2.05.86-2.36 1.8-.3.95.01 1.99.86 2.85l.31.31-.03.12c-.2.89-.12 1.57.07 2.06H8.48c-3.64 0-5.81-2.17-5.81-5.81V7.81C2.67 4.17 4.84 2 8.48 2h8.38c3.64 0 5.81 2.17 5.81 5.81"
              fill="currentColor"
            />
            <path
              d="m19.79 14.94.32.65c.16.32.57.62.91.68l.43.07c1.31.22 1.61 1.18.68 2.12l-.4.4c-.27.27-.41.79-.33 1.17l.05.24c.36 1.58-.48 2.19-1.85 1.36l-.29-.18a1.4 1.4 0 0 0-1.28 0l-.29.18c-1.38.83-2.21.22-1.85-1.36l.05-.24c.08-.37-.06-.9-.33-1.17l-.4-.4c-.93-.95-.63-1.9.68-2.12l.43-.07c.35-.06.75-.36.91-.68l.32-.65c.62-1.25 1.62-1.25 2.24 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.8 7.92c.33.25.39.72.13 1.05l-2.31 2.98c-.6.76-1.7.9-2.46.3l-1.83-1.44a.25.25 0 0 0-.36.05L7.6 13.95a.75.75 0 0 1-1.18-.92L8.8 9.94c.59-.77 1.7-.9 2.46-.31l1.83 1.44c.11.08.28.06.36-.04l2.3-2.98a.75.75 0 0 1 1.06-.13"
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
              d="m19.79 14.94.32.65c.16.32.57.62.91.68l.43.07c1.31.22 1.61 1.18.68 2.12l-.4.4c-.27.27-.41.79-.33 1.17l.05.24c.36 1.58-.48 2.19-1.85 1.36l-.29-.18a1.4 1.4 0 0 0-1.28 0l-.29.18c-1.38.83-2.21.22-1.85-1.36l.05-.24c.08-.37-.06-.9-.33-1.17l-.4-.4c-.93-.95-.63-1.9.68-2.12l.43-.07c.35-.06.75-.36.91-.68l.32-.65c.62-1.25 1.62-1.25 2.24 0"
              fill="currentColor"
            />
            <path
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.38c0 3.64 2.17 5.81 5.81 5.81h5.28c.35 0 .6-.36.56-.71a4 4 0 0 1 .1-1.35.2.2 0 0 0-.06-.21l-.22-.22c-.85-.86-1.16-1.9-.86-2.85.31-.94 1.17-1.6 2.36-1.8l.3-.05.27-.54c.55-1.12 1.45-1.77 2.46-1.77s1.91.65 2.46 1.77l.15.31a.5.5 0 0 0 .37.28l.27.06c.35.09.75-.19.75-.56V7.81C22.67 4.17 20.5 2 16.86 2m.07 6.96-2.31 2.98q-.45.57-1.17.66c-.46.06-.93-.07-1.29-.36l-1.83-1.42a.2.2 0 0 0-.19-.05q-.07-.01-.17.1l-2.38 3.09a.76.76 0 0 1-1.2-.92l2.38-3.09a1.76 1.76 0 0 1 2.47-.31l1.83 1.44c.07.06.14.05.19.05q.07.01.17-.1l2.31-2.98a.74.74 0 0 1 1.05-.13c.34.25.39.72.14 1.04"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFavoriteChart;
