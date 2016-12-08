// import Vue from 'vue'
import $ from 'jquery'

// const host = 'http://parcours-numeriques.dev/reader/src/mock/'
const host = process.env.NODE_ENV === 'production' ? '../static/' : '/static/'
/**
Params : String, Function(), Function()
response : results of the HTTP request
If you use vue-resource ...
**/
// exports.findBook = function (bookName, success, fail) {
//   Vue.resource(host + bookName + '.json').get().then((response) => {
//     success(response)
//   }, (response) => {
//     fail(response)
//   })
// }

// same with local mock
exports.findBook = function (bookName, success, fail) {
  $.getJSON(host + bookName + '.json').done(function (response) {
    success(response)
  }).fail(function (response) {
    fail(response)
  })
}
