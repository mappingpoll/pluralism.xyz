import { users } from "./data";

const search = window.location.search;

function getClientUser() {
  const clientUser = search ? new URLSearchParams(search).get("user") ?? "" : "";
  return users.includes(clientUser) ? clientUser : "";
}

export const clientUser = getClientUser();
export const isClientUser = (user: string) => user === clientUser;
export const hasClientUser = clientUser.length > 0;

export const clientIsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent,
); // not exhaustive
