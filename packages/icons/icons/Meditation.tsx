import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMeditation = forwardRef<SVGSVGElement, IconProps>(
  function IconMeditation(
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
              d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m3 17 2.59-1.3a.8.8 0 0 0 .41-.68 6.03 6.03 0 0 1 7-5.94c2.86.49 5 3 5 5.94 0 .28.16.54.41.67L21 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m9.5 16-1.04 1.4-.07.08a2 2 0 0 1-1.13.72l-1.49.37A2.34 2.34 0 0 0 4 20.83c0 .65.52 1.17 1.17 1.17h1.56c.6 0 .9 0 1.19-.03a5 5 0 0 0 1.93-.65c.25-.14.49-.32.97-.68l.18-.14m0 0 2-1.5m-2 1.5 2.54.95c.6.23.91.35 1.23.42q.24.06.5.09c.31.04.64.04 1.29.04h2.27c.65 0 1.17-.52 1.17-1.17 0-1.08-.73-2.01-1.77-2.27l-1.49-.37-.1-.03a2 2 0 0 1-1.03-.69l-.07-.08L14.5 16"
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
              d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.95 15.4c.33.25.4.72.15 1.05l-1.05 1.4-.07.09q-.56.7-1.42.94l-.11.03-1.5.37c-.7.18-1.2.82-1.2 1.55 0 .23.19.42.42.42h1.56c.61 0 .86 0 1.1-.03a4 4 0 0 0 1.64-.55c.2-.12.4-.26.9-.63l2.18-1.64a.75.75 0 1 1 .9 1.2l-.9.68 1.25.47c.63.24.88.33 1.14.39l.42.08c.26.03.53.03 1.2.03h2.27c.23 0 .42-.19.42-.42 0-.73-.5-1.37-1.2-1.55l-1.5-.37-.11-.03a3 3 0 0 1-1.42-.94l-.07-.1-1.05-1.39a.75.75 0 1 1 1.2-.9l1.04 1.39.05.07a1.3 1.3 0 0 0 .73.45l1.49.37a3.1 3.1 0 0 1 2.34 3c0 1.06-.86 1.92-1.92 1.92H16.5c-.6 0-.97 0-1.34-.05q-.3-.04-.57-.1c-.36-.09-.71-.22-1.28-.43l-2.2-.82c-.38.28-.63.47-.9.62q-1.03.6-2.22.74c-.33.04-.67.04-1.22.04h-1.6a1.9 1.9 0 0 1-1.93-1.92 3.1 3.1 0 0 1 2.34-3l1.49-.37.08-.02a1.3 1.3 0 0 0 .7-.5l1.04-1.39a.75.75 0 0 1 1.05-.15"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.87 9.82a5.27 5.27 0 0 0-6.12 5.2 1.5 1.5 0 0 1-.82 1.34l-2.6 1.31a.75.75 0 0 1-.67-1.34l2.59-1.3v-.01a6.78 6.78 0 0 1 7.87-6.68 6.8 6.8 0 0 1 5.63 6.68l2.59 1.31a.75.75 0 1 1-.68 1.34l-2.59-1.3a1.5 1.5 0 0 1-.82-1.35 5.3 5.3 0 0 0-4.38-5.2"
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
              d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.87 9.82a5.27 5.27 0 0 0-6.12 5.2 1.5 1.5 0 0 1-.82 1.34l-2.6 1.31a.75.75 0 0 1-.67-1.34l2.59-1.3v-.01a6.78 6.78 0 0 1 7.87-6.68 6.8 6.8 0 0 1 5.63 6.68l2.59 1.31a.75.75 0 1 1-.68 1.34l-2.59-1.3a1.5 1.5 0 0 1-.82-1.35 5.3 5.3 0 0 0-4.38-5.2M9.95 15.4c.33.25.4.72.15 1.05l-1.05 1.4-.07.09q-.56.7-1.42.94l-.11.03-1.5.37c-.7.18-1.2.82-1.2 1.55 0 .23.19.42.42.42h1.56c.61 0 .86 0 1.1-.03a4 4 0 0 0 1.64-.55c.2-.12.4-.26.9-.63l2.18-1.64a.75.75 0 1 1 .9 1.2l-.9.68 1.25.47c.63.24.88.33 1.14.39l.42.08c.26.03.53.03 1.2.03h2.27c.23 0 .42-.19.42-.42 0-.73-.5-1.37-1.2-1.55l-1.5-.37-.11-.03a3 3 0 0 1-1.42-.94l-.07-.1-1.05-1.39a.75.75 0 1 1 1.2-.9l1.04 1.39.05.07a1.3 1.3 0 0 0 .73.45l1.49.37a3.1 3.1 0 0 1 2.34 3c0 1.06-.86 1.92-1.92 1.92H16.5c-.6 0-.97 0-1.34-.05q-.3-.04-.57-.1c-.36-.09-.71-.22-1.28-.43l-2.2-.82c-.38.28-.63.47-.9.62q-1.03.6-2.22.74c-.33.04-.67.04-1.22.04h-1.6a1.9 1.9 0 0 1-1.93-1.92 3.1 3.1 0 0 1 2.34-3l1.49-.37.08-.02a1.3 1.3 0 0 0 .7-.5l1.04-1.39a.75.75 0 0 1 1.05-.15"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMeditation;
