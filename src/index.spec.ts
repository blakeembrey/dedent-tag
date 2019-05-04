import dedent from "./index";

describe("dedent", () => {
  it("should dedent simple multiline blocks", () => {
    const text = dedent`
    this
    is
    easy
    `;

    expect(text).toEqual("\nthis\nis\neasy\n");
  });

  it("should dedent with the common level", () => {
    const text = dedent`
    this
      is
    a
      test
    `;

    expect(text).toEqual("\nthis\n  is\na\n  test\n");
  });

  it("should dedent as expected if begins with text", () => {
    const text = dedent`testing
    multi
      lines
    `;

    expect(text).toEqual("testing\n    multi\n      lines\n");
  });

  it("should dedent with space before text on first line", () => {
    const text = dedent`  testing
  multi
    lines
`;

    expect(text).toEqual("testing\nmulti\n  lines\n");
  });

  it("should dedent a single line", () => {
    const text = dedent`  testing`;

    expect(text).toEqual("testing");
  });

  it("should dedent with blank line support", () => {
    const text = dedent`
    this
    is

    blank
    `;

    expect(text).toEqual("\nthis\nis\n\nblank\n");
  });

  it("should not trim trailing whitespace with content", () => {
    const text = dedent`
    trailing
    whitespace  `;

    expect(text).toEqual("\ntrailing\nwhitespace  ");
  });

  it("should not dedent interpolated content", () => {
    const value = `  test\n  value`;
    const text = dedent`
    interpolated
    ${value}
    `;

    expect(text).toEqual("\ninterpolated\n  test\n  value\n");
  });

  it("should work as expected with nested dedent", () => {
    const value = dedent`
      test
      value
    `;

    const text = dedent`
      interpolated
      ${value}
    `;

    expect(text).toEqual("\ninterpolated\n\ntest\nvalue\n\n");
  });

  it("should strip indent based on smallest indent", () => {
    const text = dedent`
      indented
    here
    `;

    expect(text).toEqual("\n  indented\nhere\n");
  });

  it("should do nothing when there's no indent", () => {
    const text = dedent`
no
  indent
    `;

    expect(text).toEqual("\nno\n  indent\n");
  });

  it("should support usage as a function", () => {
    const text = dedent(`
    test
    value
    `);

    expect(text).toEqual("\ntest\nvalue\n");
  });
});
