export const getLangLocal = () => {
  const data = localStorage.getItem('language');
  return data ? JSON.parse(data) : { title: 'Ру', localization: 'ru' };
};
