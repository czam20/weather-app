export const dayFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
});

export const hourFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
});

export const dateTimezoneFormatter = new Intl.DateTimeFormat(undefined, {
  timeZoneName: 'long'
});

