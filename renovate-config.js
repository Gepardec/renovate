module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Gepardec/renovate-playground"
    ],
    prHourlyLimit: 0,
    separateMajorMinor: false,
    packageRules: [
        {
            matchPackagePrefixes: ["io.quarkus"],
            groupName: "quarkus",
            groupSlug: "quarkus#{{currentVersion}}#{{newVersion}}"
        },
    ],
    recreateWhen: "always"
}
