const guards = [
  // function globalDefaultGuard(router) {
  // router.beforeEach((to, from, next) => {
  //   // to and from are both route objects. must call `next`.
  // });
  // router.afterEach((to, from) => {
  //   // to and from are both route objects.
  // });
  // },
];

function useGuards(router) {
  guards.forEach((guard) => guard(router));
}

export { useGuards };
