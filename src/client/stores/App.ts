export const useAppStore = defineStore(
  'App',
  () => {

    const isLogin = ref(false);

    const login = () => {

    }
    const logout = () => {

    }


    return {
      isLogin, login, logout,
    }

  },
  {
    persist: true,
  }
)
