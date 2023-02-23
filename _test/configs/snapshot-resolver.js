module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace("src/", "_test/snapshots/") + snapshotExtension,

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace("_test/__snapshots__", "src/")
      .slice(0, -snapshotExtension.length),

  testPathForConsistencyCheck: "<root>/_test/consistency-check.test.tsx",
};
