import UniqueEntityId from "../../../shared/domain/unique-entity-id.vo";


export type CategoryProperties = {
  name: string;
  is_active?: boolean;
  description?: string;
  created_at?: Date;
};

export default class Category {

  public readonly id: UniqueEntityId;
  constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
    this.id = id || new UniqueEntityId();
    this.description = this.props.description;
    this.props.is_active = this.props.is_active ?? true;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get name(): string {
    return this.props.name;
  }

  get is_active(): boolean | undefined {
    return this.props.is_active;
  }

  private set is_active(value: boolean){
    this.props.is_active = value;
  }

  get description(): string | undefined {
    return this.props.description;
  }

  private set description(value: string){
    this.props.description = value;
  }

  get created_at(): Date | undefined {
    return this.props.created_at;
  }
}
