import { openModal } from "../../../store/ui/uiSlice";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { TASK_STATUSES } from "../constants";
import { MODAL } from "../../../store/ui/constants";

const columns = TASK_STATUSES;

export default function TasksPage() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.items);

    return (
    <div className="w-full space-y-6">
      {/* Header / Action Area */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Your Tasks</h2>
        <button
          className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          onClick={() => dispatch(openModal(MODAL.ADD_TASK))}
        >
          + Add Task
        </button>
      </div>

      {/* Board Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((status) => (
          <div key={status} className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-semibold capitalize mb-2">{status[0].toUpperCase() + status.slice(1)}</h3>
            <div className="space-y-2">
              {tasks
                .filter((t) => t.status === status)
                .map((task) => (
                  <div key={task.id} className="p-2 border rounded-lg">
                    {task.title}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}