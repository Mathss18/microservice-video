import InvalidUuidError from "../errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";

function spyValidationMethod(){
  return jest.spyOn(UniqueEntityId.prototype as any, "validate");
}
describe("UniqueEntityId Unit Tests", () => {
  const validateSpy = spyValidationMethod();
  it("should throw error when uuid is invalid", () => {
    expect(() => new UniqueEntityId("invalid-uuid")).toThrow(
      new InvalidUuidError()
    );
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a valid uuid", () => {
    const validateSpy = spyValidationMethod();
    expect(
      () => new UniqueEntityId("fdd5a518-f0df-4a50-bfa0-5eccd48b3219")
    ).not.toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should create a new uuid", () => {
    const validateSpy = spyValidationMethod();
    const uuid = new UniqueEntityId();
    expect(uuid).toBeInstanceOf(UniqueEntityId);
    expect(validateSpy).toHaveBeenCalled();
  });
});
