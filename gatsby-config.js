module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};

// module.exports = {
//   siteMetadata: {
//     siteUrl: "https://www.yourdomain.tld",
//     title: "My First Gatsby Site",
//   },
//   plugins: [
//     {
//       resolve: `gatsby-plugin-sharp`,
//       options: {
//         // Defaults used for gatsbyImageData and StaticImage
//         defaults: {},
//         // Set to false to allow builds to continue on image errors
//         failOnError: true,
//         // deprecated options and their defaults:
//         base64Width: 20,
//         forceBase64Format: `jpg`, // valid formats: png,jpg,webp
//         useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
//         stripMetadata: true,
//         defaultQuality: 50,
//       },
//     },
//   ],
// };

// module.exports = {
//   siteMetadata: {
//     title: "My First Gatsby Site",
//   },
//   plugins: [
//     {
//       resolve: "plugin-name",
//       options: {
//         // Check the plugin README for what options go in here
//       }
//     },
//   ]
// }