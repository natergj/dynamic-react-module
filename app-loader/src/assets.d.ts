// Declare modules for files imported via other webpack loaders

declare module '*.less' {
  const content: any;
  export default content;
}
