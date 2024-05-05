const formattedDate = (date) => {
  if (date) {
    return moment(date).format('DD/MM/YYYY');
  } else {
    return t('n/a');
  }
};
