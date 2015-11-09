
var tests = require.context(".", true, /\.spec\.ts$/);
tests.keys().forEach(tests);
