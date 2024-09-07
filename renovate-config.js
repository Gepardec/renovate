module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Gepardec/renovate-playground",
        // "Gepardec/renovate-angular-playground"
    ],
    prHourlyLimit: 0,
    postUpgradeTasks: {
        commands: ["/github-action/write-update-info.sh {{platform}} {{repository}} {{groupName}} {{currentVersion}} {{newVersion}}"],
        fileFilters: ["**/*"],
        executionMode: "branch"
    },
    allowedPostUpgradeCommands: [
        "^/github-action/write-update-info.sh {{platform}} {{repository}} {{groupName}} {{currentVersion}} {{newVersion}}$"
    ],
    /*postUpgradeTasks: {
        commands: ["/github-action/quarkus-update {{branchName}} {{currentVersion}} {{newVersion}} {{newMajor}}.{{newMinor}} {{platform}} {{repository}}"],
        fileFilters: ["** /*", "** /.*"],
        executionMode: "branch"
    },
    allowedPostUpgradeCommands: [
        "^/github-action/quarkus-update {{branchName}} {{currentVersion}} {{newVersion}} {{newMajor}}.{{newMinor}} {{platform}} {{repository}}$",
        "^npm ci --ignore-scripts$",
        "^npx ng update {{{depName}}} --from={{{currentVersion}}} --to={{{newVersion}}} --migrate-only --allow-dirty --force$"
    ],*/
    recreateWhen: "always"
}
