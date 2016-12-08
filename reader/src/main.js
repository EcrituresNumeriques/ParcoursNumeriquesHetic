import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

// components import
import App from './App'
import ReaderBook from './components/ReaderBook.vue'
import ReaderChapter from './components/ReaderChapter.vue'
import ErrorVue from './components/Error.vue'

// HTTP requests Configuration
Vue.use(Resource)

Vue.http.options.root = '/'
// Vue.http.options.emulateJSON = true+
// Vue.http.options.emulateHTTP = true
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'

// router settings
Vue.use(Router)

export var router = new Router({
  history: false,
  type: 'hash'
})

router.map({
  '/:livre': {
    component: ReaderBook,
    name: 'book',
    subRoutes: {
      '/chapitre/:chapitre': {
        component: ReaderChapter,
        name: 'chapter'
      }
    }
  },
  '/error/:code': {
    component: ErrorVue,
    name: 'error'
  }
  // @TODO: prévoir redirection + livre manquant
})

router.redirect({
  '/:livre': '/:livre/chapitre/0',
  '/:livre/chapitre/': '/:livre/chapitre/0',
  '*': '/error/404'
})

/* eslint-disable no-new */
router.start(App, 'app')
