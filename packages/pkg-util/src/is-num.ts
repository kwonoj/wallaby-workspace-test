const isNum = (value: unknown): value is Number => {
  return typeof value === 'number' && !isNaN(value);
}

export { isNum }
