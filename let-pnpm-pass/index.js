/** This file runs when package is depended on by pnpm. The npm package manager
 * ignores the `path:` modifier in github-hosted packages. */

export default function () {
    console.error(`This package is a dependency to help prevent npm from being run within the project.`)
}