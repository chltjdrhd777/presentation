export default function toggleListener(
  callback: (event: Event) => void,
  eventName: keyof WindowEventMap,
  action: 'add' | 'remove',
) {
  if (window) {
    action === 'add'
      ? window.addEventListener(eventName, callback)
      : window.removeEventListener(eventName, callback);
  }
}
