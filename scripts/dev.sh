#!/bin/bash
set -e

# Get the absolute path to the project and scripts directory.
projectPath=$(realpath .)
scriptPath="${projectPath}/scripts"

# @TODO: add some style or color.
if [[ ! -d "${scriptPath}" ]]; then
    printf "\nUse the command 'yarn run dev' to run this script.\n\n"
    exit 1
fi

yarn run css

concurrently "yarn run dev:only" "yarn run css:watch"