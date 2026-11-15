import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiAlgorithm = forwardRef<SVGSVGElement, IconProps>(function IconAiAlgorithm(
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

  /* TwoTone and Bulk mask the connectors with the diamond and circles, so
     each connector stops at their edge instead of sitting over them. One
     tone skips it: there the overlap is invisible, and a mask would leave a
     hairline seam. */
  const cut = useId();

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
            d="m12 10 2.7 2.7-2.7 2.7-2.7-2.7zm4 8.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zm-9.36-2.23A2.5 2.5 0 0 0 3 18.5a2.5 2.5 0 1 0 4.98-.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.6V10m-2.7 2.7H7a1.5 1.5 0 0 0-1.5 1.5V16m9.2-3.3H17a1.5 1.5 0 0 1 1.5 1.5V16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 1.9c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="m12 10 2.7 2.7-2.7 2.7-2.7-2.7Zm-9 8.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0Zm13 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0Z" stroke="black" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </mask>
          <path
            d="m12 10 2.7 2.7-2.7 2.7-2.7-2.7Zm-9 8.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0Zm13 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            mask={duotone ? `url(#${cut})` : undefined}
            d="M12 8.6V10m-2.7 2.7H7a1.5 1.5 0 0 0-1.5 1.5V16m9.2-3.3H17a1.5 1.5 0 0 1 1.5 1.5V16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 1.9c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M15.23 12.17c.3.3.3.77 0 1.06l-2.7 2.7c-.3.3-.77.3-1.06 0l-2.7-2.7a.75.75 0 0 1 0-1.06l2.7-2.7c.3-.3.77-.3 1.06 0zM5.5 15.25c.84 0 1.75.4 2.3.95s.95 1.46.95 2.3-.4 1.75-.95 2.3-1.46.95-2.3.95-1.75-.4-2.3-.95a3.5 3.5 0 0 1-.95-2.3c0-.84.4-1.75.95-2.3a3.5 3.5 0 0 1 2.3-.95zm13 0c.84 0 1.75.4 2.3.95s.95 1.46.95 2.3-.4 1.75-.95 2.3-1.46.95-2.3.95-1.75-.4-2.3-.95a3.5 3.5 0 0 1-.95-2.3c0-.84.4-1.75.95-2.3a3.5 3.5 0 0 1 2.3-.95z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.23 12.17c.3.3.3.77 0 1.06l-2.7 2.7c-.3.3-.77.3-1.06 0l-2.7-2.7a.75.75 0 0 1 0-1.06l2.7-2.7c.3-.3.77-.3 1.06 0zM5.5 15.25c.84 0 1.75.4 2.3.95s.95 1.46.95 2.3-.4 1.75-.95 2.3-1.46.95-2.3.95-1.75-.4-2.3-.95a3.5 3.5 0 0 1-.95-2.3c0-.84.4-1.75.95-2.3a3.5 3.5 0 0 1 2.3-.95zm13 0c.84 0 1.75.4 2.3.95s.95 1.46.95 2.3-.4 1.75-.95 2.3-1.46.95-2.3.95-1.75-.4-2.3-.95a3.5 3.5 0 0 1-.95-2.3c0-.84.4-1.75.95-2.3a3.5 3.5 0 0 1 2.3-.95z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            mask={`url(#${cut})`}
            d="M12 7.85c.41 0 .75.34.75.75V10a.75.75 0 0 1-1.5 0V8.6c0-.41.34-.75.75-.75zm-2.7 5.6H7.39c-.42 0-.84-.01-1.06.4-.11.23-.08.48-.08.71V16a.75.75 0 0 1-1.5 0c0-.8-.14-1.74.11-2.5q.08-.25.23-.48c.35-.57.94-.96 1.6-1.05.34-.05.7-.02 1.06-.02H9.3a.75.75 0 0 1 0 1.5zm5.4-1.5h1.55c.35 0 .72-.03 1.06.02a2.3 2.3 0 0 1 1.83 1.53c.24.76.1 1.71.1 2.5a.75.75 0 0 1-1.5 0v-1.43c0-.24.04-.5-.07-.71-.22-.42-.64-.4-1.06-.4H14.7a.75.75 0 0 1 0-1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 1.5c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.32-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87S9.93 5.02 9 4.9a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
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
            d="M12.53 15.93c-.3.3-.77.3-1.06 0l-2.48-2.48h-1.6c-.42 0-.84-.01-1.06.4-.11.23-.08.48-.08.71v.79c.6.15 1.16.46 1.55.85.54.55.95 1.46.95 2.3s-.4 1.75-.95 2.3-1.46.95-2.3.95-1.75-.4-2.3-.95a3.5 3.5 0 0 1-.95-2.3c0-.84.4-1.75.95-2.3.38-.38.94-.7 1.53-.85a5 5 0 0 1 .13-1.85q.08-.25.23-.48c.34-.57.94-.96 1.6-1.05.34-.05.7-.02 1.05-.02H9l2.26-2.26v-1.1a.75.75 0 0 1 1.5 0v1.1l2.26 2.26h1.24c.35 0 .72-.03 1.06.02a2.3 2.3 0 0 1 1.83 1.53c.18.56.15 1.23.13 1.85.59.16 1.15.47 1.53.85.54.55.95 1.46.95 2.3s-.4 1.75-.95 2.3-1.46.95-2.3.95-1.75-.4-2.3-.95a3.5 3.5 0 0 1-.95-2.3c0-.84.4-1.75.95-2.3.39-.38.95-.7 1.55-.85v-.79c0-.23.03-.48-.08-.7-.22-.43-.64-.41-1.06-.41h-1.6zM12.4 1.5c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.32-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87S9.93 5.02 9 4.9a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiAlgorithm;
