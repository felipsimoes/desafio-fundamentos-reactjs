const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(new Date(value)).toString();

export default formatDate;
