/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
console.log("hellooo")
exports.onRenderBody = () => {
  console.log("page rendered")
}
