// This is needed to get StencilJS to pick up the type definitions from awsdk
// and add the import statement to the components.d.ts file, probably a bug and can
// maybe be removed in a future version of StencilJS
export { default as awsdk } from 'awsdk';
