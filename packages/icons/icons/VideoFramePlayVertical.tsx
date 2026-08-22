import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoFramePlayVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoFramePlayVertical(
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.75 2.5a.75.75 0 0 0-1.5 0zm-1.5 19a.75.75 0 0 0 1.5 0zm-8.5-19a.75.75 0 0 0-1.5 0zm-1.5 19a.75.75 0 0 0 1.5 0zM17 11.25a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zm-20-1.5a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zm-4.5-6.5a.75.75 0 0 0 0 1.5zM7 7.75a.75.75 0 0 0 0-1.5zm10-1.5a.75.75 0 0 0 0 1.5zm4.5 1.5a.75.75 0 0 0 0-1.5zm-4.5 8.5a.75.75 0 0 0 0 1.5zm4.5 1.5a.75.75 0 0 0 0-1.5zm-19-1.5a.75.75 0 0 0 0 1.5zm4.5 1.5a.75.75 0 0 0 0-1.5zM16.25 2.5v19h1.5v-19zm-10 0v19h1.5v-19zM17 12.75h5v-1.5h-5zm-15 0h5v-1.5H2zm.5-5H7v-1.5H2.5zm14.5 0h4.5v-1.5H17zm0 10h4.5v-1.5H17zm-14.5 0H7v-1.5H2.5z"
              fill="currentColor"
            />
            <path
              d="m12.41 10.4.42-.62zm0 3.2.42.62zM12 11.03c.55.37.9.6 1.1.8l.16.16V12h1.5c0-.57-.3-.97-.64-1.28q-.5-.44-1.28-.94zm.84 3.19c.5-.34.96-.65 1.28-.94.34-.3.64-.71.64-1.28h-1.5l-.16.18c-.2.2-.55.42-1.1.8zM10.75 12c0-.74 0-1.22.04-1.55.05-.35.11-.3.02-.24L10 8.96c-.5.33-.63.87-.68 1.3q-.07.69-.06 1.74zm2.08-2.22c-.51-.34-.98-.66-1.36-.84-.4-.18-.95-.33-1.48.02l.82 1.25c-.13.09-.22-.02.03.1.25.11.6.34 1.15.72zM9.25 12q-.02 1.06.06 1.74c.05.43.19.97.68 1.3l.82-1.25c.1.06.03.1-.02-.24-.04-.33-.04-.81-.04-1.55zm2.74.97c-.56.38-.9.6-1.15.72s-.16.01-.03.1L10 15.04c.53.35 1.09.2 1.48.02s.85-.5 1.36-.84z"
              fill="currentColor"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
              fill="currentColor"
            />
            <path
              d="M14 12c0-.53-.53-.88-1.59-1.6-1.07-.72-1.6-1.08-2.01-.81-.4.26-.4.98-.4 2.41s0 2.15.4 2.41.94-.1 2.01-.81S14 12.53 14 12"
              fill="currentColor"
            />
            <path
              d="M6.25 6.25H2.22c.2-1.22.56-2.1 1.24-2.79a4.8 4.8 0 0 1 2.79-1.24z"
              fill="currentColor"
            />
            <path
              d="M21.78 6.25a4.8 4.8 0 0 0-1.24-2.79 4.8 4.8 0 0 0-2.79-1.24v4.03z"
              fill="currentColor"
            />
            <path
              d="M22 11.25q.01-2.04-.07-3.5h-4.18v3.5z"
              fill="currentColor"
            />
            <path
              d="M20.54 20.54a4.8 4.8 0 0 1-2.79 1.24v-4.03h4.03a4.8 4.8 0 0 1-1.24 2.79"
              fill="currentColor"
            />
            <path
              d="M22 12.75q.01 2.04-.07 3.5h-4.18v-3.5z"
              fill="currentColor"
            />
            <path
              d="M6.25 17.75v4.03a4.8 4.8 0 0 1-2.79-1.24 4.8 4.8 0 0 1-1.24-2.79z"
              fill="currentColor"
            />
            <path
              d="M6.25 16.25H2.07q-.08-1.46-.07-3.5h4.25z"
              fill="currentColor"
            />
            <path
              d="M6.25 11.25H2q-.01-2.04.07-3.5h4.18z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2q2.54-.02 4.25.07v19.86q-1.72.09-4.25.07-2.54.02-4.25-.07V2.07Q9.47 1.98 12 2m.41 8.4c1.06.72 1.59 1.07 1.59 1.6s-.53.88-1.59 1.6c-1.07.72-1.6 1.08-2.01.81-.4-.26-.4-.98-.4-2.41s0-2.15.4-2.41.94.1 2.01.81"
              fill="currentColor"
            />
            <path
              d="M6.25 6.25H2.22c.2-1.22.56-2.1 1.24-2.79a4.8 4.8 0 0 1 2.79-1.24z"
              fill="currentColor"
            />
            <path
              d="M21.78 6.25a4.8 4.8 0 0 0-1.24-2.79 4.8 4.8 0 0 0-2.79-1.24v4.03z"
              fill="currentColor"
            />
            <path
              d="M22 11.25q.01-2.04-.07-3.5h-4.18v3.5z"
              fill="currentColor"
            />
            <path
              d="M20.54 20.54a4.8 4.8 0 0 1-2.79 1.24v-4.03h4.03a4.8 4.8 0 0 1-1.24 2.79"
              fill="currentColor"
            />
            <path
              d="M22 12.75q.01 2.04-.07 3.5h-4.18v-3.5z"
              fill="currentColor"
            />
            <path
              d="M6.25 17.75v4.03a4.8 4.8 0 0 1-2.79-1.24 4.8 4.8 0 0 1-1.24-2.79z"
              fill="currentColor"
            />
            <path
              d="M6.25 16.25H2.07q-.08-1.46-.07-3.5h4.25z"
              fill="currentColor"
            />
            <path
              d="M6.25 11.25H2q-.01-2.04.07-3.5h4.18z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoFramePlayVertical;
