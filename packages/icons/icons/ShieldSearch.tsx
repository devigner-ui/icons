import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShieldSearch = forwardRef<SVGSVGElement, IconProps>(
  function IconShieldSearch(
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
            d="M3.21 11.02v3.54c0 1.18.78 2.73 1.73 3.44l4.3 3.21c.7.53 1.63.79 2.56.79"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.39 10.55V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87a5 5 0 0 0-3.02 0L5.3 4.11a3.5 3.5 0 0 0-2.09 3.01"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19.8 16a4 4 0 1 1-2.31-3.61"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.8 21z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.29 10.55V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87a5 5 0 0 0-3.02 0L5.2 4.11a3.5 3.5 0 0 0-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c.7.54 1.63.8 2.56.8"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.7 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeWidth={Number(strokeWidth) * 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.7 21h.02"
              opacity={duotone ? "0.4" : "1"}
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
              d="m9.71 2.11-5.5 2.06A3.2 3.2 0 0 0 2.3 6.94v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11a3.3 3.3 0 0 0 1.18-2.36v-8.1c0-1.12-.86-2.37-1.91-2.76l-5.5-2.06a3.4 3.4 0 0 0-2.07-.01"
              fill="currentColor"
            />
            <path
              d="M15.75 11.51a4.5 4.5 0 1 0 .01 9.01 4.5 4.5 0 0 0-.01-9.01"
              fill="currentColor"
            />
            <path
              d="M20.75 22q-.41-.01-.71-.29-.07-.07-.12-.16l-.09-.17-.06-.18-.02-.2a1 1 0 0 1 .08-.38q.07-.19.21-.33a1 1 0 0 1 1.26-.12q.09.05.16.12.13.14.21.33a1 1 0 0 1 .08.38q-.01.4-.29.71l-.16.12-.17.09-.19.06z"
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
              d="M19.2 6.94v2.51c0 .71-.72 1.17-1.39.92a6 6 0 0 0-2.75-.33 6.5 6.5 0 0 0-5.22 4.92 6 6 0 0 0 1.51 5.11 1 1 0 0 1-.63 1.66c-.69.08-1.37.06-1.75-.22l-5.5-4.11a3.3 3.3 0 0 1-1.18-2.37V6.94A3.2 3.2 0 0 1 4.2 4.17l5.5-2.06a3.5 3.5 0 0 1 2.08 0l5.5 2.06a3.2 3.2 0 0 1 1.92 2.77"
              fill="currentColor"
            />
            <path
              d="M15.75 11.51a4.5 4.5 0 1 0 .01 9.01 4.5 4.5 0 0 0-.01-9.01"
              fill="currentColor"
            />
            <path
              d="M20.75 22q-.41-.01-.71-.29-.07-.07-.12-.16l-.09-.17-.06-.18-.02-.2a1 1 0 0 1 .08-.38q.07-.19.21-.33a1 1 0 0 1 1.26-.12q.09.05.16.12.13.14.21.33a1 1 0 0 1 .08.38q-.01.4-.29.71l-.16.12-.17.09-.19.06z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShieldSearch;
