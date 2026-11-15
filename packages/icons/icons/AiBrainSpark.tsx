import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBrainSpark = forwardRef<SVGSVGElement, IconProps>(function IconAiBrainSpark(
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
            d="M12 5c-.6-1.4-1.9-2.2-3.3-2.2-1.9 0-3.5 1.5-3.6 3.4C3.8 6.8 3 8 3 9.5c0 .8.3 1.6.8 2.2-.5.6-.8 1.4-.8 2.3 0 1.6 1.1 3 2.6 3.4a3.9 3.9 0 0 0 3.9 3.3c1.1 0 2-.5 2.5-1.2M12 5c.6-1.4 1.9-2.2 3.3-2.2 1.9 0 3.5 1.5 3.6 3.4C20.2 6.8 21 8 21 9.5c0 .8-.3 1.6-.8 2.2a3.6 3.6 0 0 1 .65 3.3m-1.39 1.9q-.48.35-1.06.5a3.9 3.9 0 0 1-3.9 3.3c-1.1 0-2-.5-2.5-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.4c.32 2.38 1.22 3.28 3.6 3.6-2.38.32-3.28 1.22-3.6 3.6-.32-2.38-1.22-3.28-3.6-3.6 2.38-.32 3.28-1.22 3.6-3.6Z"
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
            d="M12 5c-.6-1.4-1.9-2.2-3.3-2.2-1.9 0-3.5 1.5-3.6 3.4C3.8 6.8 3 8 3 9.5c0 .8.3 1.6.8 2.2-.5.6-.8 1.4-.8 2.3 0 1.6 1.1 3 2.6 3.4a3.9 3.9 0 0 0 3.9 3.3c1.1 0 2-.5 2.5-1.2M12 5c.6-1.4 1.9-2.2 3.3-2.2 1.9 0 3.5 1.5 3.6 3.4C20.2 6.8 21 8 21 9.5c0 .8-.3 1.6-.8 2.2.5.6.8 1.4.8 2.3 0 1.6-1.1 3-2.6 3.4a3.9 3.9 0 0 1-3.9 3.3c-1.1 0-2-.5-2.5-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.4c.32 2.38 1.22 3.28 3.6 3.6-2.38.32-3.28 1.22-3.6 3.6-.32-2.38-1.22-3.28-3.6-3.6 2.38-.32 3.28-1.22 3.6-3.6Z"
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
            d="M9.5 21.45a4.6 4.6 0 0 1-4.54-3.48 3.2 3.2 0 0 1-1.82-1.36A4.5 4.5 0 0 1 2.25 14c0-1.03.26-1.64.65-2.3-.57-.71-.65-1.27-.65-2.2 0-1.7.9-2.97 2.16-3.77a4.35 4.35 0 0 1 6.65-2.99q.5.34.94.86.42-.52.94-.85a4.5 4.5 0 0 1 2.36-.7 4.34 4.34 0 0 1 4.3 3.68 4.4 4.4 0 0 1 2.15 3.77c0 .93-.26 1.55-.65 2.2.38.66.65 1.27.65 2.3 0 .93-.36 1.92-.9 2.6a4 4 0 0 1-1.82 1.37 3.7 3.7 0 0 1-1.46 2.36 5 5 0 0 1-3.07 1.12c-.94 0-1.84-.38-2.5-.9-.66.52-1.56.9-2.5.9z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 8c.16 1.26.46 2.03 1.01 2.59.56.56 1.33.85 2.6 1.01a.4.4 0 0 1 0 .8c-1.27.16-2.04.46-2.6 1.01-.56.56-.85 1.33-1.01 2.6a.4.4 0 0 1-.8 0c-.16-1.27-.46-2.04-1.01-2.6-.56-.56-1.33-.85-2.6-1.01a.4.4 0 0 1 0-.8c1.27-.16 2.04-.46 2.6-1.01.56-.56.85-1.33 1.01-2.6a.4.4 0 0 1 .8 0z"
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
            d="M9.5 21.45a4.6 4.6 0 0 1-4.54-3.48 3.2 3.2 0 0 1-1.82-1.36A4.5 4.5 0 0 1 2.25 14c0-1.03.26-1.64.65-2.3-.57-.71-.65-1.27-.65-2.2 0-1.7.9-2.97 2.16-3.77a4.35 4.35 0 0 1 6.65-2.99q.5.34.94.86.42-.52.94-.85a4.5 4.5 0 0 1 2.36-.7 4.34 4.34 0 0 1 4.3 3.68 4.4 4.4 0 0 1 2.15 3.77c0 .93-.26 1.55-.65 2.2.38.66.65 1.27.65 2.3 0 .93-.36 1.92-.9 2.6a4 4 0 0 1-1.82 1.37 3.7 3.7 0 0 1-1.46 2.36 5 5 0 0 1-3.07 1.12c-.94 0-1.84-.38-2.5-.9-.66.52-1.56.9-2.5.9zM12 7.65a.4.4 0 0 0-.4.35c-.16 1.26-.46 2.03-1.01 2.59-.56.56-1.33.85-2.6 1.01a.4.4 0 0 0 0 .8c1.27.16 2.04.46 2.6 1.01.56.56.85 1.33 1.01 2.6a.4.4 0 0 0 .8 0c.16-1.27.46-2.04 1.01-2.6.56-.56 1.33-.85 2.6-1.01a.4.4 0 0 0 0-.8c-1.27-.16-2.04-.46-2.6-1.01-.56-.56-.85-1.33-1.01-2.6a.4.4 0 0 0-.4-.34z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiBrainSpark;
