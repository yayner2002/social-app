import { useState, useCallback, useEffect } from "react";
let logoutTimer;
export const useAuth = () => {
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uid, token, localStorageExpirationData) => {
    setToken(token);
    setUserId(uid);
    const expirationDate =
      localStorageExpirationData ||
      new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(expirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: expirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("userData"));
    if (
      localStorageData &&
      localStorageData.token &&
      new Date(localStorageData.expiration) > new Date()
    ) {
      login(
        localStorageData.userId,
        localStorageData.token,
        new Date(localStorageData.expiration)
      );
    }
  }, [login]);

  return { userId, token, login, logout };
};
