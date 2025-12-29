import { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { Modal } from "../../../shared/components/Modal";
import { addTask } from "../../../store/tasks/tasksSlice";
import { closeModal } from "../../../store/ui/uiSlice";



export function AddTaskModal() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    dispatch(addTask(title, description));
    setTitle("");
    setDescription("");
  };

  return (
    <Modal>
      <h3 className="text-xl font-semibold mb-4">Add new task</h3>

      <div className="space-y-4">
        <input
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <button className="px-4 py-2 rounded-lg border" onClick={() => dispatch(closeModal())}>
          Cancel
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50"
          disabled={!title.trim()}
          onClick={submit}
        >
          Create
        </button>
      </div>
    </Modal>
  );
}