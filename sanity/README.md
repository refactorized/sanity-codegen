# Sanity Schema and Studio for Austen Riggs Center

## Codegen

We use the `sanity-codegen` package to generate typescript types based on our
schema for use with clientside code. Currently the codegen is run manually via
`yarn codegen`, and the resulting types are added to source control.

### Future use of the `sanity-codegen` package

Right now we are only using `sanity-codegen` to generate types. In the future we
may want to explore using the included client which is capable of returning
strongly typed results for a query.

In the meantime we are sticking with our more manual but loosely-coupled
approach as implemented in `web/data/` for a couple reasons:

- This client (like the official sanity client) does not currently expand
  references. We have code to handle this written, that would need to be ported.
- These tools are currently pre-release and subject to some pretty big changes
  coming soon.
