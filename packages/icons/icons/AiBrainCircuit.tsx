import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBrainCircuit = forwardRef<SVGSVGElement, IconProps>(function IconAiBrainCircuit(
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
            d="M12 5c-.6-1.4-1.9-2.2-3.3-2.2-1.9 0-3.5 1.5-3.6 3.4C3.8 6.8 3 8 3 9.5c0 .8.3 1.6.8 2.2a3.6 3.6 0 0 0-.65 3.3m1.39 1.9q.48.35 1.06.5a3.9 3.9 0 0 0 3.9 3.3c1.1 0 2-.5 2.5-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5v14.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8h3l1.5-1.5M12 12h6.5M12 16h3l1.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4 5.3a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 1 0-2.6 0Zm2.3 6.7a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 1 0-2.6 0Zm-2.3 6.7a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 1 0-2.6 0Z"
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
            d="M12 5c-.6-1.4-1.9-2.2-3.3-2.2-1.9 0-3.5 1.5-3.6 3.4C3.8 6.8 3 8 3 9.5c0 .8.3 1.6.8 2.2-.5.6-.8 1.4-.8 2.3 0 1.6 1.1 3 2.6 3.4a3.9 3.9 0 0 0 3.9 3.3c1.1 0 2-.5 2.5-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5v14.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8h3l1.5-1.5M12 12h6.5M12 16h3l1.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4 5.3a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 1 0-2.6 0Zm2.3 6.7a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 1 0-2.6 0Zm-2.3 6.7a1.3 1.3 0 1 0 2.6 0 1.3 1.3 0 1 0-2.6 0Z"
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
            d="M12.61 19.94a4.1 4.1 0 0 1-3.11 1.51 4.6 4.6 0 0 1-4.54-3.48 3.2 3.2 0 0 1-1.82-1.36A4.5 4.5 0 0 1 2.25 14c0-1.03.26-1.64.65-2.3-.57-.71-.65-1.27-.65-2.2 0-1.7.9-2.97 2.16-3.77a4.35 4.35 0 0 1 6.65-2.99 5 5 0 0 1 1.63 1.96q.06.15.06.3v14.5q0 .23-.14.43z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12 4.25c.41 0 .75.34.75.75v2.25h1.94l1.14-1.14a2 2 0 0 1-.18-.81c0-.51.27-1.12.6-1.45s.94-.6 1.45-.6 1.12.27 1.45.6.6.94.6 1.45-.27 1.12-.6 1.45-.94.6-1.45.6a2 2 0 0 1-.8-.18l-1.37 1.36a.8.8 0 0 1-.53.22h-2.25v2.5h5.36q.17-.42.44-.7c.33-.33.94-.6 1.45-.6s1.12.27 1.45.6.6.94.6 1.45-.27 1.12-.6 1.45-.94.6-1.45.6-1.12-.27-1.45-.6a2 2 0 0 1-.44-.7h-5.36v2.5H15a.7.7 0 0 1 .53.22l1.36 1.36q.4-.16.81-.18c.51 0 1.12.27 1.45.6s.6.94.6 1.45-.27 1.12-.6 1.45-.94.6-1.45.6-1.12-.27-1.45-.6-.6-.93-.6-1.45q0-.4.18-.8l-1.14-1.15h-1.94v2.75a.75.75 0 0 1-1.5 0V5c0-.41.34-.75.75-.75z"
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
            d="M9.5 21.45a4.6 4.6 0 0 1-4.54-3.48 3.2 3.2 0 0 1-1.82-1.36A4.5 4.5 0 0 1 2.25 14c0-1.03.26-1.64.65-2.3-.57-.71-.65-1.27-.65-2.2 0-1.7.9-2.97 2.16-3.77a4.35 4.35 0 0 1 6.65-2.99 5 5 0 0 1 1.61 1.92q.08.15.08.34v2.25h1.94l1.14-1.14a2 2 0 0 1-.18-.81c0-.51.27-1.12.6-1.45s.94-.6 1.45-.6 1.12.27 1.45.6.6.94.6 1.45-.27 1.12-.6 1.45-.94.6-1.45.6a2 2 0 0 1-.8-.18l-1.37 1.36a.8.8 0 0 1-.53.22h-2.25v2.5h5.36q.17-.42.44-.7c.33-.33.94-.6 1.45-.6s1.12.27 1.45.6.6.94.6 1.45-.27 1.12-.6 1.45-.94.6-1.45.6-1.12-.27-1.45-.6a2 2 0 0 1-.44-.7h-5.36v2.5H15a.7.7 0 0 1 .53.22l1.36 1.36q.4-.16.81-.18c.51 0 1.12.27 1.45.6s.6.94.6 1.45-.27 1.12-.6 1.45-.94.6-1.45.6-1.12-.27-1.45-.6-.6-.94-.6-1.45q0-.4.18-.8l-1.14-1.15h-1.94v2.75q0 .29-.18.5a4.1 4.1 0 0 1-3.07 1.45z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiBrainCircuit;
