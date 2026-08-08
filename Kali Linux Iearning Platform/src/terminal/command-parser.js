export class CommandParser {
  parse(input) {
    const trimmed = input.trim();
    if (!trimmed) return { command: '', args: [], options: [] };
    const [command, ...rest] = trimmed.split(/\s+/);
    const args = [];
    const options = [];
    rest.forEach((value) => {
      if (value.startsWith('-')) options.push(value);
      else args.push(value);
    });
    return { command, args, options };
  }
}
