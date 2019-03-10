module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ['src/**/*.ts'],
                outDir: 'dist/',
            },

            options: {
                declaration: true,
                rootDir: 'src',
                sourceMap: true,
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('default', ['ts']);
};