export default function dedent(input: string): string;
export default function dedent(
  input: TemplateStringsArray,
  ...values: any[]
): string;
export default function dedent(
  input: string | TemplateStringsArray,
  ...values: any[]
) {
  const strings = typeof input === "string" ? [input] : input;
  const m = /^\r?\n?([\t ]+)/.exec(strings[0]);
  let indent = m ? m[1] : "";

  for (const str of strings) {
    const m = str.match(/\n[\t ]+(?=\S)/g);
    if (!m) continue;
    for (const i of m) {
      if (i.length <= indent.length) indent = i.substr(1); // Remove `\n` prefix.
    }
  }

  let result = "";

  for (let i = 0; i < strings.length; i++) {
    let str = strings[i];
    // Remove prefixed whitespace on first line.
    if (i === 0 && str.startsWith(indent)) str = str.substr(indent.length);
    // Remove trailing whitespace on the final line.
    if (i === values.length) str = str.replace(/\n[\t ]+$/, "\n");
    // Remove prefixed indentation.
    let index = -1;
    while (true) {
      index = str.indexOf(`\n${indent}`, index + 1);
      if (index === -1) break;
      str = str.slice(0, index + 1) + str.slice(index + indent.length + 1);
    }
    // Append computed string to result.
    result += str;
    // Append interpolated value after dedent.
    if (i < values.length) result += values[i];
  }

  return result;
}
