module.exports = (req, res, next) => {
  globalThis.window.history.back()
}