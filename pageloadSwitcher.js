const pageloadSwitcher = {
  loading: false,

  start () {
    debugger
    this.loading = true
  },

  stop () {
    debugger
    this.loading = false
  },

  isLoading () {
    debugger
    return this.loading
  }
}

export default pageloadSwitcher

/* let loading = false

export default class PageloadSwitcher {
  static start () {
    loading = true
  }
  static stop () {
    loading = false
  }
  static isLoading () {
    return loading
  }
} */

/* export default PageloadSwitcher */

/* export default class PageloadSwitcher {
  static loading = false
  static start () {
    PageloadSwitcher.loading = true
  }
  static stop () {
    PageloadSwitcher.loading = false
  }
  static isLoading () {
    return PageloadSwitcher.loading
  }
} */

// const pageloadSwitcher = {
//   start () {
//     sessionStorage.setItem('laoding-data', true)
//   },

//   stop () {
//     sessionStorage.setItem('laoding-data', false)
//   },

//   isLoading () {
//     debugger
//     var value = sessionStorage.getItem('laoding-data')
//     if (value) {
//       return (value === 'true')
//     }
//     return false
//   }
// }

// export default pageloadSwitcher
