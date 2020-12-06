module.exports = (grunt) => {
  grunt.initConfig({
    ts: {
      default: {
        outDir: 'dist/',
        tsconfig: './tsconfig.json',
        src: ['src/**/*.ts'],
      },

      options: {
        declaration: true,
        rootDir: 'src',
        sourceMap: false,
      },
    },
  });
  grunt.loadNpmTasks('grunt-ts');
  grunt.registerTask('default', ['ts']);
};
