export function namespaceFnGenerator(prefix: string) {
  const upperCasePrefix = prefix.toUpperCase()
  const namespace = (v: string) => `${upperCasePrefix}/${v}`

  return {
    namespace,
    failure: (v: string) => namespace(`${v}/FAILURE`),
    success: (v: string) => namespace(`${v}/SUCCESS`),
  }
}
