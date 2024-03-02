export const formatDate = (date: string) => {
  const splitDate = date.split('-')
  return `${splitDate[2]}.${splitDate[1]}.${splitDate[0]}`
}

export const formatPriority = (priority: string) => {
  return priority.charAt(0) + priority.substring(1).toLowerCase() + ' priority'
}
