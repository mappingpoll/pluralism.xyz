const search = window.location.search;

const clientUser = search ? new URLSearchParams(search).get("user") ?? "" : "";
export const isClientUser = (user: string) => user === clientUser;
