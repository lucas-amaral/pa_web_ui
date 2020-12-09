export const getType = (type) => {
  return type === 'FISICAL' ? 'Pessoa Física' : 'Pessoa Jurídica';
};

export const getDbType = (type) => {
  return type === 'Pessoa Física' ? 'FISICAL' : 'LEGAL';
};
