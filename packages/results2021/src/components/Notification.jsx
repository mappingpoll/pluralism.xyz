import { h } from "preact";
import "./Notification.css";

export function Notification(props) {
  if (!props.visible) return;
  return <div class="notif"><span>{props.message}</span></div>;
}
