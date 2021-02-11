import { collatedTasks } from '../constants'

export const getTitle = (projects, projectid) =>
  projects.find((project) => project.projectid === projectid)

export const collatedTasksExist = (selectedProject) => {
  collatedTasks.find((task) => task.key === selectedProject)
}
