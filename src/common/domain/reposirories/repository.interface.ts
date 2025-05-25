export interface SearchInput {
  page: number
  sort?: string | null
  sort_dir?: string | null
  filter?: string | null
    
}

export interface SearchOutput<Model> {
    items: Model[]
    per_page: number
    total: number
    current_page: number
    sort: string | null
    sort_dir: string | null
    filter: string | null
}

export interface RepositoryInterface<Model, CreateProps> {
    create(props: CreateProps): Promise<Model> 
    insert(model: Model): Promise<Model>
    findById(id: string): Promise<Model>
    update(model: Model): Promise<Model>
    delete(id: string): Promise<void>
    search(props: SearchInput): Promise<SearchOutput<Model>>
}
