const unwantedStoryBlokFields = ['component', '_uid', '_editable'];
export function getActualDataFromStoryBlokStory<T extends object>(data: T) {
  return Object.keys(data)
    .filter((key) => !unwantedStoryBlokFields.includes(key))
    .reduce((acc, key) => {
      acc[key as keyof T] = data[key as keyof T];
      return acc;
    }, {} as T);
}
