// WIP

export function joinSegments(segments: string[], base: string): string {
  return new URL(segments.join('/'), base).toString()
}