#!/bin/bash
set -x

platform=$1
repository=$2
groupName=$3
currentVersion=$4
newVersion=$5

echo $

updateInfoFile="/tmp/renovate/repos/${platform}/${repository}/update-info.txt"

if [[ "${groupName}" == "quarkus.platform.version" ]]; then
  echo "DEPNAME=${groupName}" > ${updateInfoFile}
  echo "CURR_VERSION=${currentVersion}" >> ${updateInfoFile}
  echo "NEW_VERSION=${newVersion}" >> ${updateInfoFile}
fi
