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
            matchDatasources: ["npm"],
            matchPackageNames: ["@angular/**"],
            groupName: "Angular",
            groupSlug: "angular_{{currentVersion}}_{{newVersion}}"
        },
    ],
    recreateWhen: "always"
}
