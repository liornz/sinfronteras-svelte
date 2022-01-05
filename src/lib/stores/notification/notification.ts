import { writable } from "svelte/store";

type notification = {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending';
};

const notification = writable<notification | null>(null);

export default notification;