export const isExpired = (tsExp: null | number) => {
  if (!tsExp) return true;
  return tsExp - 60 <= Date.now() / 1000;
};

export function parseJwt(token: null | string) {
  if (!token) return null;
  try {
    const [, payload] = token.split(".");
    return JSON.parse(atob(payload));
  } catch (error) {
    return null;
  }
}
