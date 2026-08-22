import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolleyball = forwardRef<SVGSVGElement, IconProps>(
  function IconVolleyball(
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
              d="m11.57 12.55.6.46zm-.26-8.9.7.28zm7.24 10.86a.75.75 0 0 0-1.1-1.01zm-.84-.19-.56-.5zm3.53-3.58.54-.52zm.21 1.29a.75.75 0 0 0 1.07-1.06zM5.73 19.04a.75.75 0 0 0 0 1.5zM3.5 15.75a.75.75 0 0 0 0 1.5zm4.7-12.4a.75.75 0 0 0-1.4-.57zM6.8 15.3a.75.75 0 1 0 1.4-.58zM11 5.75a.75.75 0 0 0 0 1.5zm8.88 11.17a.75.75 0 1 0 1.24-.84zM12 12.75h.1v-1.5H12zm-.6-1.21-.42.55 1.18.92.43-.55zm-.1-9.83-.68 1.65 1.39.57.68-1.64zm6.15 11.79-.3.32 1.11 1 .3-.31zm3.26-2.23.74.76 1.07-1.06-.74-.75zm-3.56 2.55a16 16 0 0 1-11.42 5.22v1.5c4.7 0 9.4-2.27 12.53-5.71zM10.62 3.36a9.9 9.9 0 0 0 .74 9.04l1.28-.8A8.4 8.4 0 0 1 12 3.93zm.36 8.73a9.5 9.5 0 0 1-7.48 3.66v1.5c3.39 0 6.58-1.56 8.66-4.24zM6.8 2.78a16.2 16.2 0 0 0 0 12.5l1.38-.57a14.7 14.7 0 0 1 0-11.35zM11 7.25c3.64 0 7.14 1.45 9.71 4.02l1.06-1.06A15.2 15.2 0 0 0 11 5.75zm1.1 5.5a9.4 9.4 0 0 1 7.78 4.17l1.24-.84a10.9 10.9 0 0 0-9.03-4.83z"
              fill="currentColor"
            />
            <path
              d="M12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.94 4.81 10.75 10.75 10.75zM21.25 12c0 5.1-4.14 9.25-9.25 9.25v1.5c5.94 0 10.75-4.81 10.75-10.75zM12 2.75c5.1 0 9.25 4.14 9.25 9.25h1.5c0-5.94-4.81-10.75-10.75-10.75zm0-1.5A10.75 10.75 0 0 0 1.25 12h1.5c0-5.1 4.14-9.25 9.25-9.25z"
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
              d="M10.58 12.4a11 11 0 0 1-3.38 2.84A16.4 16.4 0 0 1 6.88 3.4a10 10 0 0 1 3.48-1.28l-.18.43a11 11 0 0 0 .57 9.62z"
              fill="currentColor"
            />
            <path
              d="M4.86 5a10 10 0 0 0-1.8 11.5q1.44-.15 2.77-.64a18 18 0 0 1-.97-10.87z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.6" : "1"}>
              <path
                d="M12.02 13c1.92.04 3.77.6 5.36 1.56a18.6 18.6 0 0 1-11.16 5.6 10 10 0 0 1-2.3-2.26 12.4 12.4 0 0 0 7.84-4.57z"
                fill="currentColor"
              />
              <path
                d="M20.44 17.37a10 10 0 0 1-12.07 3.95c3.9-.87 7.57-3 10.25-5.88q1.02.84 1.82 1.93"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m21.62 11.36.38.37a10 10 0 0 1-.8 4.18 12.3 12.3 0 0 0-9.12-4.41 9.4 9.4 0 0 1-1.25-4.69c4.05.08 7.92 1.7 10.8 4.55"
                fill="currentColor"
              />
              <path
                d="M10.95 5.31q.17-1.1.62-2.17L12.05 2a10 10 0 0 1 9.6 7.35 17.3 17.3 0 0 0-10.7-4.04"
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
              d="M12.02 13c1.92.04 3.77.6 5.36 1.56a18.6 18.6 0 0 1-11.16 5.6 10 10 0 0 1-2.3-2.26 12.4 12.4 0 0 0 7.84-4.57z"
              fill="currentColor"
            />
            <path
              d="M20.44 17.37a10 10 0 0 1-12.07 3.95c3.9-.87 7.57-3 10.25-5.88q1.02.84 1.82 1.93"
              fill="currentColor"
            />
            <path
              d="m21.62 11.36.38.37a10 10 0 0 1-.8 4.18 12.3 12.3 0 0 0-9.12-4.41 9.4 9.4 0 0 1-1.25-4.69c4.05.08 7.92 1.7 10.8 4.55"
              fill="currentColor"
            />
            <path
              d="M10.95 5.31q.17-1.1.62-2.17L12.05 2a10 10 0 0 1 9.6 7.35 17.3 17.3 0 0 0-10.7-4.04"
              fill="currentColor"
            />
            <path
              d="M10.58 12.4a11 11 0 0 1-3.38 2.84A16.4 16.4 0 0 1 6.88 3.4a10 10 0 0 1 3.48-1.28l-.18.43a11 11 0 0 0 .57 9.62z"
              fill="currentColor"
            />
            <path
              d="M4.86 5a10 10 0 0 0-1.8 11.5q1.44-.15 2.77-.64a18 18 0 0 1-.97-10.87z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVolleyball;
