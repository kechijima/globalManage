export default defineNuxtRouteMiddleware((to) => {
  const { isLoggedIn, authLoading } = useAuth()

  // Skip middleware on the login page
  if (to.path === '/login') return

  // If auth is still loading, let the layout handle redirection via watcher
  if (authLoading.value) return

  if (!isLoggedIn.value) {
    return navigateTo('/login')
  }
})
