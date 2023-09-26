export class Storage {
  static add (key, value) {
    try {
      const store = JSON.stringify(value)
      localStorage.setItem(key, store)
    } catch {
      return null
    }
  }

  static get (key) {
    try {
      const store = localStorage.getItem(key)
      return store ? JSON.parse(store) : null
    } catch {
      return null
    }
  }

  static remove (key) {
    if (key) return localStorage.removeItem(key)
    localStorage.clear()
  }
}
