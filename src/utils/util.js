let util = {};
util.title = function (title) {
  title = title ? title + ' - by kp' : 'project';
  window.document.title = title;
};
export default util;
