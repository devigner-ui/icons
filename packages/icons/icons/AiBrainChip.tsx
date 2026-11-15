import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBrainChip = forwardRef<SVGSVGElement, IconProps>(function IconAiBrainChip(
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
            d="M10.6 9h2.8c.88 0 1.6.72 1.6 1.6v2.8c0 .88-.72 1.6-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 13.4v-2.8c0-.88.72-1.6 1.6-1.6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.5c.13.99.51 1.37 1.5 1.5-.99.13-1.37.51-1.5 1.5-.13-.99-.51-1.37-1.5-1.5.99-.13 1.37-.51 1.5-1.5Z"
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
            d="M10.6 9h2.8c.88 0 1.6.72 1.6 1.6v2.8c0 .88-.72 1.6-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 13.4v-2.8c0-.88.72-1.6 1.6-1.6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.5c.13.99.51 1.37 1.5 1.5-.99.13-1.37.51-1.5 1.5-.13-.99-.51-1.37-1.5-1.5.99-.13 1.37-.51 1.5-1.5Z"
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
            d="M10.6 8.25h2.8c.6.03 1.28.3 1.66.69.39.38.66 1.07.69 1.66v2.8c-.03.6-.3 1.28-.69 1.66-.38.39-1.07.66-1.66.69h-2.8c-.6-.03-1.28-.3-1.66-.69a2.7 2.7 0 0 1-.69-1.66v-2.8c.03-.6.3-1.28.69-1.66a2.7 2.7 0 0 1 1.66-.69zm1.4 1.5a.4.4 0 0 0-.4.35c-.07.56-.18.86-.41 1.09s-.53.34-1.1.41a.4.4 0 0 0 0 .8c.57.07.87.18 1.1.41s.34.53.41 1.1a.4.4 0 0 0 .8 0c.07-.57.18-.87.41-1.1s.53-.34 1.1-.41a.4.4 0 0 0 0-.8c-.57-.07-.87-.18-1.1-.41s-.34-.53-.41-1.1a.4.4 0 0 0-.4-.34z"
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
            d="M9.5 21.45a4.6 4.6 0 0 1-4.54-3.48 3.2 3.2 0 0 1-1.82-1.36A4.5 4.5 0 0 1 2.25 14c0-1.03.26-1.64.65-2.3-.57-.71-.65-1.27-.65-2.2 0-1.7.9-2.97 2.16-3.77a4.35 4.35 0 0 1 6.65-2.99q.5.34.94.86.42-.52.94-.85a4.5 4.5 0 0 1 2.36-.7 4.34 4.34 0 0 1 4.3 3.68 4.4 4.4 0 0 1 2.15 3.77c0 .93-.26 1.55-.65 2.2.38.66.65 1.27.65 2.3 0 .93-.36 1.92-.9 2.6a4 4 0 0 1-1.82 1.37 3.7 3.7 0 0 1-1.46 2.36 5 5 0 0 1-3.07 1.12c-.94 0-1.84-.38-2.5-.9-.66.52-1.56.9-2.5.9zM8.94 8.94a2.7 2.7 0 0 0-.69 1.66v2.8c.03.6.3 1.28.69 1.66.38.39 1.07.66 1.66.69h2.8c.6-.03 1.28-.3 1.66-.69.39-.38.66-1.06.69-1.66v-2.8c-.03-.6-.3-1.28-.69-1.66a2.7 2.7 0 0 0-1.66-.69h-2.8c-.6.03-1.28.3-1.66.69zm3.46 1.16c.07.56.18.86.41 1.09s.53.34 1.1.41a.4.4 0 0 1 0 .8c-.57.07-.87.18-1.1.41s-.34.53-.41 1.1a.4.4 0 0 1-.8 0c-.07-.57-.18-.87-.41-1.1s-.53-.34-1.1-.41a.4.4 0 0 1 0-.8c.57-.07.87-.18 1.1-.41s.34-.53.41-1.1a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiBrainChip;
