import Category from "./category";
import { validate as uuidValidator } from "uuid";
import UniqueEntityId from "../../../shared/domain/unique-entity-id.vo";

describe("Category Unit Tests", () => {
  test("Categoty id", () => {
    // Arrange
    const props = {
      name: "Movie",
    };
    // Act
    let category = new Category(props);
    expect(category.id).not.toBeNull();
    expect(category.id).toBeInstanceOf(UniqueEntityId);

    // Act
    category = new Category(props, undefined);
    expect(category.id).not.toBeNull();
    expect(category.id).toBeInstanceOf(UniqueEntityId);

    // Act
    category = new Category(props, null);
    expect(category.id).not.toBeNull();
    expect(category.id).toBeInstanceOf(UniqueEntityId);

  });

  test("Categoty constructor", () => {
    // Arrange
    const props = {
      name: "Movie",
      description: "description",
      is_active: true,
      created_at: new Date(),
    };
    // Act
    const category = new Category(props);
    // Assert
    expect(category.name).toBe("Movie");
    expect(category.description).toBe("description");
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBe(props.created_at);
  });
});
