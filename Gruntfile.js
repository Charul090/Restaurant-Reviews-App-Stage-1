module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: "im",
          sizes: [
            { name: "_320", quality: 60, width: 320, separator: "" },
            { name: "_503", quality: 60, width: 503, separator: "" },
            { name: "_900", quality: 60, width: 900, separator: "" }
          ]
        },
        files: [
          {
            expand: true,
            src: ["*.{gif,jpg,png}"],
            cwd: "img/",
            dest: "images/"
          }
        ]
      }
    },

    clean: {
      dev: {
        src: ["images"]
      }
    },

    mkdir: {
      dev: {
        options: {
          create: ["images"]
        }
      }
    },

    copy: {
      dev: {
        files: [
          {
            expand: true,
            src: ["images_src/fixed/*.{gif,jpg,png}"],
            dest: "images/",
            flatten: true
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-mkdir");
  grunt.registerTask("default", [
    "clean",
    "mkdir",
    "copy",
    "responsive_images"
  ]);
};
