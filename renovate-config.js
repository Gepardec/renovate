module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Gepardec/renovate-angular-playground"
    ],
    prHourlyLimit: 0,
    separateMajorMinor: false,
    packageRules: [
        {
            matchPackagePrefixes: ["@angular/**"],
            groupName: "angular",
            groupSlug: "angular_{{currentVersion}}_{{newVersion}}"
        },
    ],
    recreateWhen: "always"
}
