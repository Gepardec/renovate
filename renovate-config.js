module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Gepardec/renovate-angular-playground"
    ],
    prHourlyLimit: 0,
    postUpgradeTasks: {
        commands: ["/github-action/quarkus-update {{branchName}} {{currentVersion}} {{newVersion}} {{newMajor}}.{{newMinor}} {{platform}} {{repository}}"],
        fileFilters: ["**/*", "**/.*"],
        executionMode: "branch"
    },
    allowedPostUpgradeCommands: [
        "^/github-action/quarkus-update {{branchName}} {{currentVersion}} {{newVersion}} {{newMajor}}.{{newMinor}} {{platform}} {{repository}}$"
    ],
    recreateWhen: "always"
}
