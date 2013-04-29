module.exports = function (grunt) {

  grunt.initConfig({

    // variables

    src: {
      root: 'app'
      css:  ['app/css/*.css'],
      js:   ['app/js/**/*.js'],
      test: ['test/**/*.js'],
      img:  'app/img'
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
      files: ['<%= src.js %>', '<%= src.test %>'],
      options: {
        curly:   true,
        eqeqeq:  true,
        immed:   true,
        latedef: true,
        newcap:  true,
        noarg:   true,
        sub:     true,
        undef:   true,
        unused:  true,
        boss:    true,
        eqnull:  true,
        browser: true,
        globals: {
          'angular': false
        }
      }
    },

    csslint: {
      app: {
        src: ['<%= src.css %>'],
        rules: {
          'overqualified-elements': 3
        }
      }
    },

    karma: {
      unit: {
        configFile : 'test/config/karma.conf.js'
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
  //grunt.registerTask('test',    ['lint', 'karma:dev']);
  grunt.registerTask('release', ['clean', 'copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);
  //grunt.registerTask('default', ['test']);

};
