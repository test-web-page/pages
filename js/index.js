webpackJsonp([2], {
  307: function(e, t, n) {
    e.exports = n(308)
  },
  308: function(e, t) {
    window.addEventListener("load", function() {
      var e = 0,
        t = document.querySelector(".bg").querySelectorAll("figure");
      setInterval(function() {
      11 === ++e && (e = 0), [].forEach.call(t, function(e) {
          e.classList.remove("active")
        }), t[e].classList.add("active")
      }, 6e3)
    })
  }
}, [307]);
