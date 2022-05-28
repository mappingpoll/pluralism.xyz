import { h } from "preact";
import "./notify.css";

export default function Notify(props) {
  if (!props.visible) return;
  return <div class="notif">{props.children}</div>;
}
