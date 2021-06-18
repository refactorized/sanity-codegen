# Work in Progress

this is hella-WIP and will be changing/expanding

# Data Layer

This layer exists to contain the bulk of data/api functionality and reasonably
decouple that functionality from the rest of the web application

## Sanity Client

`sanityClient.ts` exports a client to be used by the data layer and preconfigured
for our project. The client defaults to using the `production` dataset but this
can be overridden by setting the `SANITY_DATASET` env variable.
