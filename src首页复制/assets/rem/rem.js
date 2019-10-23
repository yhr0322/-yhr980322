function rem() {
  document.documentElement.style.fontSize = document.documentElement.clientWidth /6.0 + 'px';
}
rem();
window.onresize = rem;