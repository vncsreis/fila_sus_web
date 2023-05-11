import { Priority } from "../data/priority";

export default function getPriorityColor(priority: Priority) {
  switch (priority) {
    case Priority.GREEN:
      return "green.500";
    case Priority.YELLOW:
      return "yellow.400";
    case Priority.RED:
      return "red.500";
  }
}
