export const formatTime = (seconds) => {
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds / 60) % 60);
  const second = Math.floor(seconds % 60);

  const time = hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0');

  return (seconds) != null
    ?
    time
    : null;
};

