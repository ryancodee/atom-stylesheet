// # Your init script
// #
// # Atom will evaluate this file each time a new window is opened. It is run
// # after packages are loaded/activated and after the previous editor state
// # has been restored.
// #
// # An example hack to log to the console when each text editor is saved.
// #
// # atom.workspace.observeTextEditors (editor) ->
// #   editor.onDidSave ->
// #     console.log "Saved! #{editor.getPath()}"



(function () {
    /**
     * Unsubscribe from the gitrefresh event for every repo in the current project
     * A fix for issue: https://github.com/atom/atom/issues/9544
     */
    function disableGitRefresh() {
        atom.project.repositories.forEach(repo => {
            if (repo && repo.subscriptions && repo.subscriptions.disposables && repo.subscriptions.disposables.size) {
                repo.subscriptions.dispose()
            }
        })
    }
    // run every minute in case you change project or add a new folder
    window.setInterval(disableGitRefresh, 60000)
}).call(this);
