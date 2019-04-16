import pathToRegexp from 'path-to-regexp';

export function toPath<T extends object>(path: string, data: T): string {
  return pathToRegexp.compile(path)(data);
}
