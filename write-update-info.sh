#!/bin/bash
set -x

platform=$1
repository=$2
depNameSanitized=$3
currentVersion=$4
newVersion=$5

echo $

updateInfoFile="update-info.txt"

echo "DEPNAME=${depNameSanitized}" > ${updateInfoFile}
echo "CURR_VERSION=${currentVersion}" >> ${updateInfoFile}
echo "NEW_VERSION=${newVersion}" >> ${updateInfoFile}
