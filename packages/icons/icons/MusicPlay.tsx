import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicPlay = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicPlay(
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
              d="M6.15 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81a3.6 3.6 0 0 1-3.57 3.57 3.6 3.6 0 0 1-3.57-3.57v-6.16a9.9 9.9 0 0 1 9.95-10.17c5.62 0 10.05 4.55 10.05 10.06v6.16a3.6 3.6 0 0 1-3.57 3.57 3.6 3.6 0 0 1-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.2 9.12h-.81a.6.6 0 0 0-.53.32l-.75 1.5a.3.3 0 0 1-.53 0l-1.84-3.67c-.11-.21-.41-.22-.52-.01l-.84 1.55q-.17.3-.52.31h-.73"
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
              d="M13.85 11.86c-.4 0-.76-.22-.93-.58l-1.45-2.89-.42.78c-.23.43-.69.7-1.18.7h-.73a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.64l.79-1.46c.19-.34.57-.57.93-.55.39 0 .74.23.92.57l1.43 2.86.34-.69c.23-.46.68-.74 1.2-.74h.81c.41 0 .75.34.75.75s-.34.75-.75.75h-.71l-.71 1.41c-.18.37-.53.59-.93.59"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.42 18.65a.76.76 0 0 1-.75-.75v-5.7a9.94 9.94 0 0 1 9.95-10.15c5.54 0 10.05 4.51 10.05 10.05v5.7c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-5.7A8.56 8.56 0 0 0 6.58 6.06a8.4 8.4 0 0 0-2.41 6.12v5.71c0 .42-.33.76-.75.76"
              fill="currentColor"
            />
            <path
              d="M6.61 12.45h-.13a3.8 3.8 0 0 0-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
              fill="currentColor"
            />
            <path
              d="M18.86 12.45h-.13a3.8 3.8 0 0 0-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
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
              d="M13.85 11.86c-.4 0-.76-.22-.93-.58l-1.45-2.89-.42.78c-.23.43-.69.7-1.18.7h-.73a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.64l.79-1.46c.19-.34.57-.57.93-.55.39 0 .74.23.92.57l1.43 2.86.34-.69c.23-.46.68-.74 1.2-.74h.81c.41 0 .75.34.75.75s-.34.75-.75.75h-.71l-.71 1.41c-.18.37-.53.59-.93.59"
              fill="currentColor"
            />
            <path
              d="M3.42 18.65a.76.76 0 0 1-.75-.75v-5.7a9.94 9.94 0 0 1 9.95-10.15c5.54 0 10.05 4.51 10.05 10.05v5.7c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-5.7A8.56 8.56 0 0 0 6.58 6.06a8.4 8.4 0 0 0-2.41 6.12v5.71c0 .42-.33.76-.75.76"
              fill="currentColor"
            />
            <path
              d="M6.61 12.45h-.13a3.8 3.8 0 0 0-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
              fill="currentColor"
            />
            <path
              d="M18.86 12.45h-.13a3.8 3.8 0 0 0-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicPlay;
