import java.time.LocalDate;

public class TaskSub extends Task {
    String title;
    String description;
    LocalDate taskDate;

    public TaskSub(String title, String description) {
        super(title, description);
    }
    public void getTaskId(){
        taskDate = super.getTask_date();
    }
}
import java.time.LocalDate;
import java.util.*;

public class Task {
    String taskId;
    String title;
    String description;
    LocalDate task_date;
    String priority;
    List<String>tags;
    List<TaskSub> subtasks;
    public Task(String id,String title,String description,LocalDate date,String priority,List<String>tags){
        this.taskId = id;
        this.title = title;
        this.description=description;
        this.task_date=date;
        this.priority = priority;
        this.tags = tags;
    }
    public Task(String title,String description){

    }
    public LocalDate getTask_date(){
        return task_date;
    }

}
import java.time.LocalDate;
import java.util.*;

public class Main {
    static Map<String, Task> taskMap = new HashMap<>();
    static PriorityQueue<String[]> taskPriority = new PriorityQueue<>((a, b) -> {
        int a_ = Integer.parseInt(a[0]);
        int b_ = Integer.parseInt(b[0]);
        return Integer.compare(b_, a_);
    });
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Task Management Application");
        while (true) {
            System.out.println("\n1. Add a task\n2. Exit\n3.Get all tasks");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();
            sc.nextLine();
            switch (choice) {
                case 1:
                    System.out.println("\nAdd a Task");

                    System.out.print("Enter the task ID: ");
                    String taskId = sc.nextLine();

                    System.out.print("Enter the title of the task: ");
                    String title = sc.nextLine();

                    System.out.print("Enter the description: ");
                    String desc = sc.nextLine();

                    System.out.print("Enter the date to complete the task (dd-mm-yyyy): ");
                    String date = sc.nextLine();
                    String[] arr = date.split("-");

                    System.out.println("Enter the Priority of the Task (High,Medium,Low) :");
                    String priority = sc.nextLine();


                    try {
                        int day = Integer.parseInt(arr[0]);
                        int month = Integer.parseInt(arr[1]);
                        int year = Integer.parseInt(arr[2]);
                        LocalDate taskDate = LocalDate.of(year, month, day);
                        int priorAsInt;
                        if(priority.equals("High")){
                            priorAsInt = 2;
                        } else if (priority.equals("Medium")) {
                            priorAsInt = 1;
                        }else{
                            priorAsInt = 0;
                        }
                        Task newTask = new Task(taskId, title, desc, taskDate , priority);
                        taskMap.put(taskId, newTask);
                        taskPriority.add(new String[]{String.valueOf(priorAsInt),taskId});
                        System.out.println("Task added successfully!");

                    } catch (Exception e) {
                        System.out.println("Invalid date format. Please use dd-mm-yyyy.");
                    }
                    break;

                case 2:
                    System.out.println("Exiting Task Manager. Goodbye!");
                    sc.close();
                    return;
                case 3:
                    if (taskMap.isEmpty()){
                        System.out.println("First add the task First");
                        return;
                    }
                    System.out.println("......List of tasks......");
                    PriorityQueue<String[]> tempQueue = new PriorityQueue<>(taskPriority);
                    while (!tempQueue.isEmpty()) {
                        String[] entry = tempQueue.poll();
                        String taskid = entry[1];
                        Task task = taskMap.get(taskid);
                        System.out.println("Task Id: " + task.taskId);
                        System.out.println("Title: " + task.title);
                        System.out.println("Description: " + task.description);
                        System.out.println("Date: " + task.task_date);
                        System.out.println("Priority: " + task.priority);
                        System.out.println();
                    }


                default:
                    System.out.println("Invalid choice. Please select 1 or 2.");
            }
        }
    }
}
