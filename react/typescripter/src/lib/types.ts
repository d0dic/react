export type ActivityEvent = {
  type?: 'todo/added' | 'todo/removed' | 'note',
  content?: string,
  created: Date,
}
