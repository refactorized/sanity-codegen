#Images in <<platform>>

## image container design (theme integrated for breakpoints)

_these are musings caught, mid-flight, in a commit_

- simple props interface
  - specify image by some base url or id
  - specify an aspect ratio, or array of aspect ratios (per breakpoints)
    - consider fixed list of aspect ratios for more asset reuse
  - specify array of widths at each breakpoint (default to next breakpoint width)
  - using this information construct responsive image requests with
    - optimzed width per breakpoint
    - height explicitly set by aspect ratio
      - default to native a/r in absence
- art direction to be handled by an array of base urls
- have the ability to explicitly specify aspect ratio
  - this should be preferred to using
