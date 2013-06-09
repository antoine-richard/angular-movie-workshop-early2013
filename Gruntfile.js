module.exports = function (grunt) {

  grunt.initConfig({

    // variables

    src: {
      root: 'src',
      css:  ['src/css/*.css'],
      js:   ['src/js/**/*.js'],
      test: ['test/unit/**/*.js'],
      img:  'src/img'
    },
    
    dest: {
      root:   'dist',
      index:  'dist/index.html',
      img:    'dist/img'
    },

    // tasks configuration

    clean: {
      dist: ['<%= dest.root %>']
    },

    copy: {
      html: {
        files: [
          { expand: true, cwd: '<%= src.root %>', src: ['**/*.html'], dest: '<%= dest.root %>' }
        ]
      },
      img: {
        files: [
          { expand: true, cwd: '<%= src.img %>', src: ['**'], dest: '<%= dest.img %>' }
        ]
      }
    },

    /* auto configuration of concat, uglify et cssmin */
    useminPrepare: {
      html: '<%= dest.index %>'
    },

    usemin: {
      html: ['<%= dest.index %>'],
      options: {
        dirs: ['<%= dest.root %>']
      }
    },

    jshint: {
      options: {
        undef: true,
        curly: true,
        browser: true,
        globals: {
          angular: true
        },
      },
      files: ['<%= src.js %>', '<%= src.test %>']
    },

    csslint: {
      options: {
        'adjoining-classes': false,
        'unique-headings': false,
        'ids': false,
        'important': false,
        'box-model': false,
        'font-sizes': false
      },
      src: ['<%= src.css %>']
    },

    karma: {
      unit: {
        configFile : 'test/config/karma-unit.conf.js'
      }
    },

    // watch configuration
    
    watch: {
      /* continuous linting */
      lint: {
        files: ['<%= src.js %>', '<%= src.test %>', '<%= src.css %>'],
        tasks: ['lint']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('lint',    ['jshint', 'csslint']);
  grunt.registerTask('test',    ['lint', 'karma:unit']);
  grunt.registerTask('dist',    ['clean', 'copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);
  grunt.registerTask('release', ['test', 'dist']);
  //grunt.registerTask('default', ['test']);

};
