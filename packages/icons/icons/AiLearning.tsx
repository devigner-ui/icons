import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiLearning = forwardRef<SVGSVGElement, IconProps>(function IconAiLearning(
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
            d="M21.5 13.67V5.5c0-.6-.4-1-1-1-3.9.1-6.7.9-8.5 2.5-1.8-1.6-4.6-2.4-8.5-2.5-.6 0-1 .4-1 1v12c0 .5.4 1 1 1 3.5.1 6.3.9 8.5 2.5 2.2-1.6 5-2.4 8.5-2.5.6 0 1-.5 1-1v-1.43"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7v13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 9.3c.2 1.45.75 2 2.2 2.2-1.45.2-2 .75-2.2 2.2-.2-1.45-.75-2-2.2-2.2 1.45-.2 2-.75 2.2-2.2Z"
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
            d="M12 7c-1.8-1.6-4.6-2.4-8.5-2.5-.6 0-1 .4-1 1v12c0 .5.4 1 1 1 3.5.1 6.3.9 8.5 2.5 2.2-1.6 5-2.4 8.5-2.5.6 0 1-.5 1-1v-12c0-.6-.4-1-1-1-3.9.1-6.7.9-8.5 2.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 7v14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M16.5 9.3c.2 1.45.75 2 2.2 2.2-1.45.2-2 .75-2.2 2.2-.2-1.45-.75-2-2.2-2.2 1.45-.2 2-.75 2.2-2.2Z"
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
            d="M20.5 3.75c.44.03.98.22 1.25.5.28.27.47.81.5 1.25v12c-.03.39-.2.91-.48 1.2a2 2 0 0 1-1.25.55c-3.4.09-6 .81-8.08 2.36a.75.75 0 0 1-.88 0c-2.08-1.55-4.65-2.27-8.06-2.36-.47-.04-1-.27-1.27-.55a2 2 0 0 1-.48-1.2v-12c.03-.44.22-.98.5-1.26.27-.27.83-.46 1.27-.49 4 .11 6.53.87 8.48 2.3 1.95-1.43 4.5-2.19 8.5-2.3z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.44 21.61a.75.75 0 0 1-.88 0l-.31-.22V5.55q.38.24.75.5.36-.26.75-.5V21.4z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.9 8.9c.1.8.27 1.25.61 1.59s.8.51 1.6.61a.4.4 0 0 1 0 .8c-.8.1-1.26.27-1.6.61s-.51.8-.61 1.6a.4.4 0 0 1-.8 0c-.1-.8-.27-1.26-.61-1.6s-.8-.51-1.6-.61a.4.4 0 0 1 0-.8c.8-.1 1.26-.27 1.6-.61s.51-.8.61-1.6a.4.4 0 0 1 .8 0z"
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
            d="M20.5 3.75c.44.03.98.22 1.25.5.28.27.47.81.5 1.25v12c-.03.39-.2.91-.48 1.2a2 2 0 0 1-1.25.55c-3.4.09-6 .81-8.08 2.36a.75.75 0 0 1-.88 0c-2.08-1.55-4.65-2.27-8.06-2.36-.47-.04-1-.27-1.27-.55a2 2 0 0 1-.48-1.2v-12c.03-.44.22-.98.5-1.26.27-.27.83-.46 1.27-.49 3.5.1 5.88.7 7.73 1.8V20a.75.75 0 0 0 1.5 0V5.55c1.85-1.1 4.25-1.7 7.75-1.8zm-4 4.8a.4.4 0 0 0-.4.35c-.1.8-.27 1.25-.61 1.59s-.8.51-1.6.61a.4.4 0 0 0 0 .8c.8.1 1.26.27 1.6.61s.51.8.61 1.6a.4.4 0 0 0 .8 0c.1-.8.27-1.26.61-1.6s.8-.51 1.6-.61a.4.4 0 0 0 0-.8c-.8-.1-1.26-.27-1.6-.61s-.51-.8-.61-1.6a.4.4 0 0 0-.4-.34z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiLearning;
