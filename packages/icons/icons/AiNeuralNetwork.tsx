import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiNeuralNetwork = forwardRef<SVGSVGElement, IconProps>(function IconAiNeuralNetwork(
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
            d="M2.8 18a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 0 0-3.4 0zm7.5-12a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 0 0-3.4 0zm0 12a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 0 0-3.4 0zM4.9 4.35a1.7 1.7 0 1 0 1.29 1.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.1 6h2.3M5.88 8.2l4.74 7.6m-4.74 0 4.74-7.6M7.1 18h2.3m4.63-10.38 3.05 2.44m-3.05 6.32 3.05-2.44"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 9.4c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M2.8 6a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 1 0-3.4 0Zm0 12a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 1 0-3.4 0Zm7.5-12a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 1 0-3.4 0Zm0 12a1.7 1.7 0 1 0 3.4 0 1.7 1.7 0 1 0-3.4 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.1 6h2.3M5.88 8.2l4.74 7.6m-4.74 0 4.74-7.6M7.1 18h2.3m4.63-10.38 3.05 2.44m-3.05 6.32 3.05-2.44"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 9.4c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M4.5 3.55c.62 0 1.33.32 1.73.72s.72 1.1.72 1.73-.31 1.33-.72 1.73-1.1.72-1.73.72-1.33-.31-1.73-.72-.72-1.1-.72-1.73.32-1.33.72-1.73 1.1-.72 1.73-.72zm0 12c.62 0 1.33.32 1.73.72s.72 1.1.72 1.73-.31 1.33-.72 1.73-1.1.72-1.73.72-1.33-.31-1.73-.72-.72-1.1-.72-1.73.32-1.33.72-1.73 1.1-.72 1.73-.72zm7.5-12c.62 0 1.33.32 1.73.72s.72 1.1.72 1.73-.31 1.33-.72 1.73-1.1.72-1.73.72-1.33-.31-1.73-.72-.72-1.1-.72-1.73.32-1.33.72-1.73 1.1-.72 1.73-.72zm0 12c.62 0 1.33.32 1.73.72s.72 1.1.72 1.73-.31 1.33-.72 1.73-1.1.72-1.73.72-1.33-.31-1.73-.72-.72-1.1-.72-1.73.32-1.33.72-1.73 1.1-.72 1.73-.72z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M17.55 9.47a.75.75 0 0 1-.94 1.18l-3.26-2.6q.66-.45.94-1.18zM9.13 12l2.27 3.62c-.5.13-.95.41-1.27.8l-1.88-3-1.88 3a2.5 2.5 0 0 0-1.27-.8L7.37 12 5.1 8.38c.5-.13.95-.41 1.27-.8l1.88 3 1.88-3q.5.6 1.27.8zm7.48 1.35a.75.75 0 0 1 .94 1.18l-3.26 2.6a2.5 2.5 0 0 0-.94-1.17zM6.95 6q0-.39-.12-.75h2.84a2.5 2.5 0 0 0 0 1.5H6.83q.12-.36.12-.75m0 12q0-.39-.12-.75h2.84a2.5 2.5 0 0 0 0 1.5H6.83q.12-.36.12-.75"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 9c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.33-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
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
            d="M2.05 6a2.45 2.45 0 0 1 4.78-.75h2.84a2.45 2.45 0 1 1 4.62 1.62l3.26 2.6a.75.75 0 0 1-.94 1.18l-3.26-2.6a2.4 2.4 0 0 1-1.95.33L9.13 12l2.27 3.62a2.5 2.5 0 0 1 1.95.34l3.26-2.6a.75.75 0 0 1 .94 1.17l-3.26 2.6A2.44 2.44 0 0 1 12 20.45c-1.1 0-2.02-.71-2.33-1.7H6.83a2.45 2.45 0 1 1-1.73-3.13L7.37 12 5.1 8.38A2.46 2.46 0 0 1 2.05 6m6.2 4.58 1.88-3q-.3-.36-.46-.83H6.83q-.15.46-.46.83zm0 2.84-1.88 3q.3.36.46.83h2.84q.15-.46.46-.83zM19.9 9c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.33-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiNeuralNetwork;
