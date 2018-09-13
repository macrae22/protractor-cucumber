<#
.SYNOPSIS
    Runs TS Lint on selected TypeScript file paths.
.DESCRIPTION
    Helps keep code maintainable. Not part of node scripts in package.json,
    due to the odd way in which TS Lint needs to be invoked.
    https://palantir.github.io/tslint/
.PARAMETER Fix
    Whether to auto-fix many of the problems found.
    Warning: this will alter files, but save you doing so yourself!
#>
Param(
  [switch]$Fix=$false
)

$fixFlag = If ($Fix) { "--fix" } Else { "" }

./node_modules/.bin/tslint `
    --project tsconfig.json `
    --config tslint.json `
    '{pages,stepdefinitions}/**/*.ts' `
    $fixFlag
