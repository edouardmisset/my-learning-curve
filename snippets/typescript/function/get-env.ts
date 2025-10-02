const ENVIRONNEMENT_PREFIX = {
  node: '',
  CRA: 'REACT_APP_',
  vite: 'VITE_',
  deno: '',
} as const

type EnvType = keyof typeof ENVIRONNEMENT_PREFIX

/**
 * Retrieves the value of an environment variable.
 *
 * @param {string} variable - The name of the environment variable to retrieve.
 * @param {('node'|'CRA'|'vite')} [env='node'] - The environment from which to retrieve the variable.
 * 'node' and 'CRA' will use process.env, 'vite' will use import.meta.env.
 *
 * @throws {TypeError} Will throw an error if the environment variable is not set.
 *
 * @returns {string} The value of the environment variable.
 */
export async function getEnv(
  variable: string,
  env: EnvType = 'node',
): Promise<string> {
  const prefix = ENVIRONNEMENT_PREFIX[env]
  let value: string
  if (env === 'node' || env === 'CRA') {
    value = process.env[variable] || process.env[`${prefix}${variable}`]
  }
  if (env === 'vite') {
    // @ts-expect-error
    value = import.meta.env[variable] || import.meta.env[`${prefix}${variable}`]
  }

  if (env === 'deno') {
    try {
      const { load } = await import(
        // @ts-expect-error
        'https://deno.land/std@0.213.0/dotenv/mod.ts'
      )
      const env = await load()
      value = env[variable]
    } catch (error) {
      console.error("Error loading Deno's `dotenv` library:", error)
    }
  }

  if (value === undefined) {
    throw new TypeError(`It seems like the variable "${variable}" is not set in the environment (\`.env\` file).
    @Dev: Did you forget to execute "cp .env.dev .env" and adjust variables in the .env file to match your own environment ?`)
  }
  return value
}
