import Category from "./category";

describe("Category Unit Tests", () => {
  test("Categoty constructor", () => {
    const category = new Category({name: "Movie"});
    expect(category.props.name).toBe('Movie');
  });
});
