export function updateSetItem<T>(set: Set<T>, item: T, value?: boolean): Set<T> {
  const next = new Set(set);
  const shouldAdd = value ?? !next.has(item);

  if (shouldAdd) next.add(item);
  else next.delete(item);

  return next
}
