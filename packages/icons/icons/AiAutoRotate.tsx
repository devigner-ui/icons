import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiAutoRotate = forwardRef<SVGSVGElement, IconProps>(function IconAiAutoRotate(
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
            d="M19.99 14.9a8.5 8.5 0 0 1-15.35 1.35M4 9.09a8.5 8.5 0 0 1 8.06-5.59m2.36.36a8.5 8.5 0 0 1 4.93 3.89"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m19.9 5.2-.54 2.55-2.47-.8M4.09 18.79l.55-2.54 2.47.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.8c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
            d="M4.01 9.1a8.5 8.5 0 0 1 15.35-1.35m.63 7.16a8.5 8.5 0 0 1-15.35 1.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m19.9 5.2-.54 2.55-2.47-.8M4.09 18.79l.55-2.54 2.47.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.8c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
            d="M3.3 8.84q.6-1.62 1.72-2.9a9.33 9.33 0 0 1 12.6-1.29 9 9 0 0 1 2.4 2.72.75.75 0 0 1-1.3.75 8 8 0 0 0-4.32-3.49 7.8 7.8 0 0 0-9.68 4.72.75.75 0 1 1-1.41-.52zm17.4 6.32a9 9 0 0 1-1.72 2.9 9.33 9.33 0 0 1-12.6 1.29 9 9 0 0 1-2.4-2.72.75.75 0 0 1 1.3-.75 8 8 0 0 0 4.32 3.49 7.8 7.8 0 0 0 9.68-4.72.75.75 0 1 1 1.41.51z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M20.06 4.47c.4.09.66.49.58.9L20.1 7.9l-.01.04a.8.8 0 0 1-.35.46.7.7 0 0 1-.62.06l-2.46-.8a.75.75 0 0 1 .46-1.43l1.68.55.37-1.73c.09-.4.48-.66.89-.58zM3.94 19.53a.75.75 0 0 1-.58-.9l.54-2.53.01-.04a.8.8 0 0 1 .35-.46.7.7 0 0 1 .62-.06l2.46.8a.75.75 0 0 1-.46 1.43l-1.68-.55-.37 1.73a.75.75 0 0 1-.89.58z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 8.4c.15 1.13.4 1.8.9 2.3s1.18.76 2.3.9a.4.4 0 0 1 0 .8c-1.12.15-1.8.4-2.3.9s-.75 1.18-.9 2.3a.4.4 0 0 1-.8 0c-.15-1.12-.4-1.8-.9-2.3s-1.18-.75-2.3-.9a.4.4 0 0 1 0-.8c1.12-.14 1.8-.4 2.3-.9s.75-1.17.9-2.3a.4.4 0 0 1 .8 0z"
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
            d="M3.3 8.84q.6-1.62 1.72-2.9a9.33 9.33 0 0 1 12.6-1.29q.75.57 1.36 1.29l.19-.89a.75.75 0 0 1 1.47.31L20.1 7.9l-.01.05a.8.8 0 0 1-.35.46.7.7 0 0 1-.62.06l-2.46-.8a.75.75 0 0 1 .46-1.43l.1.03a7.5 7.5 0 0 0-2.82-1.63 7.8 7.8 0 0 0-9.68 4.72.75.75 0 1 1-1.41-.52zm17.4 6.32a9 9 0 0 1-1.72 2.9 9.33 9.33 0 0 1-12.6 1.29q-.75-.57-1.36-1.29l-.19.89a.75.75 0 0 1-1.47-.31l.54-2.54.01-.04a.8.8 0 0 1 .35-.46.7.7 0 0 1 .62-.06l2.46.8a.75.75 0 0 1-.46 1.43l-.1-.03a7.5 7.5 0 0 0 2.82 1.63 7.8 7.8 0 0 0 9.68-4.72.75.75 0 1 1 1.41.52zM12.4 8.4c.15 1.13.4 1.8.9 2.3s1.18.76 2.3.9a.4.4 0 0 1 0 .8c-1.12.15-1.8.4-2.3.9s-.75 1.18-.9 2.3a.4.4 0 0 1-.8 0c-.15-1.12-.4-1.8-.9-2.3s-1.18-.75-2.3-.9a.4.4 0 0 1 0-.8c1.12-.14 1.8-.4 2.3-.9s.75-1.17.9-2.3a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiAutoRotate;
