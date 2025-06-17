export const getSearch = (path: string): string => {
  const pos = path.indexOf('?')

  if (pos === -1) {
    return path
  }

  return path.slice(pos + 1)
}

export const isSerialisable = (val: any): boolean => val !== undefined

export interface IParsedName {
  hasBrackets: boolean
  name: string
}

export const parseName = (name: string): IParsedName => {
  const decodedName = decodeURIComponent(name)
  const bracketPosition = decodedName.indexOf('[')
  const hasBrackets = bracketPosition !== -1

  return {
    hasBrackets,
    name: hasBrackets ? decodedName.slice(0, bracketPosition) : decodedName
  }
}
